'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState } from "react";

export const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("authtoken");
    router.push("/");
  };

  return (
    <>
      {/* Floating Hamburger for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden  fixed top-4 left-4 z-50 bg-white shadow-md p-2 rounded-full text-2xl text-gray-700 hover:text-gray-900 transition"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar Drawer for Mobile & Static for Desktop */}
      <aside
        className={`bg-white lg:h-screen shadow-md p-6 w-64 h-full fixed top-0 left-0 z-40 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:static sm:block`}
      >
        {/* Sidebar content */}
        <nav className="flex flex-col gap-4 mt-10 sm:mt-0">
          <Link
  href="/admin/adminprofile"
  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition"
  onClick={() => setIsOpen(false)}
>
  🧑 Profile
</Link>

          <Link
            href="/admin/adminbuy"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            🛒 Buys
          </Link>
          <Link
            href="/admin/adminoffplan"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            🏗️ Offplan
          </Link>
          <Link
            href="/admin/admincareer"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            💼 Career
          </Link>
          <Link
            href="/admin/adminteam"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            
           🧑🏽‍💻 Teams
          </Link>
          <Link
            href="/admin/adminblog"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            📝 Blog
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="text-red-600 hover:text-white hover:bg-red-500 px-4 py-2 rounded transition mt-4 text-left"
          >
            🚪 Logout
          </button>
        </nav>
      </aside>
    </>
  );
};