'use client';

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddTeamMember() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        data
      );
      setImg(res.data.secure_url);
      toast.success("Image uploaded!");
    } catch (err) {
      console.error(err);
      toast.error("Image upload failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!name || !position || !email || !number || !img) {
      return toast.error("All fields are required!");
    }

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      await axios.post(`${API_URL}/team`, { name, position, email, number, img });
      toast.success("Team member added!");
      router.push("/admin/adminteam");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add team member!");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Add Team Member</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Enter full name"
          className="input w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Position */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
        <input
          type="text"
          placeholder="e.g. Sales Manager"
          className="input w-full"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="example@company.com"
          className="input w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          type="tel"
          placeholder="+971-50-123-4567"
          className="input w-full"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="input w-full"
        />
        {loading && <p className="text-sm text-blue-600 mt-1">Uploading...</p>}
        {img && (
          <div className="mt-4">
            <img src={img} alt="Preview" className="w-32 h-32 object-cover rounded-full" />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          onClick={handleSubmit}
          className="back text-white px-6 py-2.5 rounded-md"
        >
          Add Member
        </button>
      </div>
    </div>
  );
}
