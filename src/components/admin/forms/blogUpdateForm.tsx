'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Blockquote from '@tiptap/extension-blockquote';
import { TextStyle } from '@tiptap/extension-text-style';
import FontSize from '@tiptap/extension-font-size';
import sanitizeHtml from 'sanitize-html';
import axios from 'axios';

import { UpdateBlog, GetBlog } from '@/api';
import '@/app/admin/addblog/editor.css';
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import toast from 'react-hot-toast';

export default function UpdateBlogEditor({ blogId }: { blogId: string }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState<string>("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [initialContent, setInitialContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [blogLoaded, setBlogLoaded] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes
  
  // EXACT DIMENSION REQUIREMENTS: 856 × 481 pixels
  const REQUIRED_WIDTH = 856;
  const REQUIRED_HEIGHT = 481;
  const DIMENSION_TOLERANCE = 5; // Allow ±5 pixels tolerance

  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Heading.configure({ levels: [1, 2, 3] }),
      Paragraph,
      BulletList,
      OrderedList,
      ListItem,
      Blockquote,
      TextStyle,
      FontSize,
    ],
    content: '', // Start empty
    editorProps: {
      attributes: {
        class: 'editor-content',
      },
    },
    immediatelyRender: false,
  });

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      try {
        const res = await GetBlog(blogId);
        const { data } = res.data;

        setTitle(data.title);
        setDesc(data.desc);
        setCoverImage(data.blogCover);
        setInitialContent(data.content);
        setBlogLoaded(true);

        setIsLoading(false);
      } catch (err) {
        console.error('Failed to fetch blog:', err);
      }
    };

    fetchBlog();
  }, [blogId]);

  // Hydrate editor only when ready
  useEffect(() => {
    if (editor && blogLoaded && initialContent) {
      editor.commands.setContent(initialContent);
    }
  }, [editor, blogLoaded, initialContent]);

  const handleUpdate = async () => {
    if (!editor) return;

    const rawHtml = editor.getHTML();
    const cleanHtml = sanitizeHtml(rawHtml, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      allowedAttributes: {
        '*': ['style', 'class'],
        a: ['href', 'target'],
        img: ['src', 'alt'],
      },
    });

    const payload = {
      title,
      desc,   
      content: cleanHtml,
      blogCover: coverImage,
    };

    try {
      await UpdateBlog(blogId, payload);
      toast.success("Updated Successfully");
    } catch (error) {
      console.error('Failed to update blog:', error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError(null);
    setLoading(true);

    // Validate file size (10 MB limit)
    if (file.size > MAX_FILE_SIZE) {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      setUploadError(`Image size (${sizeInMB} MB) exceeds the 10 MB limit.`);
      e.target.value = '';
      setLoading(false);
      return;
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Only JPG, PNG, WebP, and GIF images are allowed.');
      e.target.value = '';
      setLoading(false);
      return;
    }

    // Check image dimensions
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      
      const width = img.width;
      const height = img.height;
      
      // EXACT DIMENSION VALIDATION: Must be 856×481px (±5px tolerance)
      const widthDiff = Math.abs(width - REQUIRED_WIDTH);
      const heightDiff = Math.abs(height - REQUIRED_HEIGHT);
      
      if (widthDiff > DIMENSION_TOLERANCE || heightDiff > DIMENSION_TOLERANCE) {
        setUploadError(`Image must be ${REQUIRED_WIDTH}×${REQUIRED_HEIGHT}px. Your image is ${width}×${height}px.`);
        e.target.value = '';
        setLoading(false);
        return;
      }
      
      // Upload if dimensions are correct
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

      axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        data
      )
      .then((res) => {
        setCoverImage(res.data.secure_url);
        toast.success('Image updated successfully!');
      })
      .catch((err) => {
        console.error('Image upload failed:', err);
        setUploadError('Failed to upload image. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      setUploadError('Failed to load image. Please try a different file.');
      e.target.value = '';
      setLoading(false);
    };
    
    img.src = objectUrl;
  };

  if (!editor || isLoading || !blogLoaded) return <Loading />;
  
  return (
    <div className="editor-container space-y-8">
      <h2 className='heading3'>Update Blog</h2>
      
      <label htmlFor="">Title</label>
      <input
        placeholder="Title"
        type="text"
        value={title}
        className='bg-gray-200 w-full px-4 py-2.5 rounded-lg'
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <label htmlFor="">Description</label>
      <textarea
        placeholder="Description"
        value={desc}
        className='bg-gray-200 w-full px-4 py-2.5 rounded-lg'
        onChange={(e) => setDesc(e.target.value)}
      />
      
      <div className="cover-upload">
        <label>Upload New Cover Image</label>
        <div className="text-sm text-gray-500 mb-2">
          Max file size: 10 MB • Dimensions: {REQUIRED_WIDTH}×{REQUIRED_HEIGHT}px
        </div>
        <input 
          type="file" 
          accept="image/jpeg,image/jpg,image/png,image/webp,image/gif" 
          className='bg-gray-200 w-full px-4 py-2.5 rounded-lg cursor-grab' 
          onChange={handleImageUpload} 
        />
        
        {uploadError && (
          <div className="text-red-600 text-sm mt-2 p-2 bg-red-50 rounded">
            ⚠️ {uploadError}
          </div>
        )}
        
        {loading && <p>Uploading...</p>}
        
        {coverImage && (
          <img src={coverImage} alt="Cover Preview" className="w-full h-auto mt-2 rounded" />
        )}
      </div>

      <div className="toolbar">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>I</button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>U</button>
        
        <select
          onChange={(e) => editor.chain().focus().setFontSize(e.target.value).run()}
          defaultValue="16px"
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="24px">24px</option>
          <option value="36px">36px</option>
        </select>
      </div>

      <EditorContent editor={editor} />

      <button 
        className='back px-7 py-2.5 rounded-lg disabled:opacity-50' 
        onClick={handleUpdate}
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Update Blog'}
      </button>
    </div>
  );
}