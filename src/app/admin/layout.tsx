import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Sidebar } from "@/components/admin/sidebar";

export default async function AdminLayout({ children }: { children: ReactNode }) {

  const cookieStore =await cookies();
  const token = cookieStore.get("authtoken")?.value;

  if (!token) {
    redirect("/login"); 
  }
  return (
    <div className="flex min-h-screen ptb ">
      {/* Sidebar */}
      {
        token &&
        <Sidebar />
      }

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
     
        <main className="">{children}</main>
      </div>
    </div>
  );
}