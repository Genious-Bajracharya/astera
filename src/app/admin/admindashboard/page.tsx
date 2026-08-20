"use client";
import { useAuth } from "@/hooks/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminDashboard = () => {
  const router = useRouter();
  const isAuthenticated = useAuth();

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated === null) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome, Admin 👋</h1>
        <p className="mt-2 text-gray-600">Choose a section from the sidebar to manage content.</p>
      </main>
    </div>
  );
};

export default AdminDashboard;