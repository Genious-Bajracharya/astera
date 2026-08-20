"use client"
import UpdateBlogEditor from '@/components/admin/forms/blogUpdateForm';
import { useParams } from 'next/navigation';

export default function EditBlogPage() {
  const router = useParams();
  const { id } = router;

  if (!id || typeof id !== 'string') return null;

  return <UpdateBlogEditor blogId={id} />;
}