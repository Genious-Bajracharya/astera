'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  email: string;
  number: string;
  img: string;
}

export default function AdminTeamPanel() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const fetchTeam = async () => {
    try {
      const res = await axios.get(`${API_URL}/team`);
      setTeam(res.data); 
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch team members!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this team member?");
      if (!confirmed) return;

      await axios.delete(`${API_URL}/team/${id}`);
      setTeam(prev => prev.filter(member => member._id !== id));
      toast.success("Deleted Successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Delete failed!");
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  if (loading) return <p>Loading team members...</p>;

  return (
    <div className="plr space-y-8">
      <Link className='back px-7 py-2.5 rounded-lg' href="/admin/addteam">Add Team Member</Link>
      <div className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:grid-cols-3">
        {team.map(member => (
          <div key={member._id} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="w-full h-48 mb-2 rounded overflow-hidden">
              <Image loading="lazy"
  decoding="async" src={member.img} alt={member.name} width={500} height={500} className="object-cover w-full h-full" />
            </div>
            <h2 className="text-lg font-semibold truncate">{member.name}</h2>
            <p className="text-sm text-gray-600">{member.position}</p>
            <p className="text-sm text-gray-600">{member.email}</p>
            <p className="text-sm text-gray-600">{member.number}</p>

            <div className="mt-4 flex justify-between">
              <button
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => router.push(`/admin/adminteam/${member._id}`)}
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(member._id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
