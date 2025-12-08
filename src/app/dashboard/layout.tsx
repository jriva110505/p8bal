'use client';

import { getToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function DashboardHome() {
  const router = useRouter();
  const token = getToken();
  const username = "USER";

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center">

      {/* NAVIGATION BUTTONS – top-left */}
      <div className="absolute top-5 left-5 flex gap-3 z-50">
        <button
          onClick={() => router.push("/")}
          className="px-5 py-2 border border-white rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
        >
          HOME
        </button>
        <button
          onClick={handleLogout}
          className="px-5 py-2 border border-white rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
        >
          LOGOUT
        </button>
      </div>

      {/* CONTENT WRAPPER – side by side */}
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 px-5 md:px-10 lg:px-20">

        {/* LEFT – TOKEN BOX */}
        <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-white/20">
          <h2 className="text-2xl font-semibold mb-5">YOUR BEARER TOKEN:</h2>
          <div className="w-full min-h-[300px] p-5 bg-white/20 rounded-xl border border-white/30 text-black text-lg break-all overflow-auto">
            {token || "(TOKEN) HERE"}
          </div>
        </div>

        {/* RIGHT – WELCOME MESSAGE */}
        <div className="w-full lg:w-1/2 text-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic tracking-wide drop-shadow-lg">
            WELCOME, {username}
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light">
            You are now logged in to your dashboard. Manage your account and access all features here.
          </p>
        </div>
      </div>
    </div>
  );
}
