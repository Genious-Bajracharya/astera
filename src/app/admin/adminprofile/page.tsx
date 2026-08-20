/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from "react";
import { ChangePassword } from "@/api"; 
import toast from "react-hot-toast";

export default function AdminProfile() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await ChangePassword({ currentPassword, newPassword });
      toast.success("Password changed successfully");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      toast.error(err?.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="plr max-w-md mx-auto mt-10 space-y-6 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-semibold">Admin Profile</h1>
      <div className="space-y-4">
        <div>
          <label className="block mb-1">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          onClick={handlePasswordChange}
          className="w-full bg-yellow-600 border-[#FCFCFC1F] text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Updating..." : "Change Password"}
        </button>
      </div>
    </div>
  );
}
