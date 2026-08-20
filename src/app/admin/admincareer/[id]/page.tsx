"use client";
import { useParams } from "next/navigation";
import UpdateCareerForm from "@/components/admin/forms/careerUpdateForm";

export default function EditCareerPage() {
  const { id } = useParams(); 

  if (!id || typeof id !== "string") return <p>Invalid career ID</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Career</h1>
      <UpdateCareerForm careerId={id} />
    </div>
  );
}