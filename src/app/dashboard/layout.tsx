"use client";

import { getToken } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

export default function DashboardHome() {
  const router = useRouter();
  const token = getToken();
  let username = "USER";

  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.username) username = decoded.username.toUpperCase();
    } catch {
      username = "INVALID TOKEN";
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");   
    router.push("/login");           
  };

  return (
    <div className="w-full h-screen bg-[url('/qq.jpg')] bg-cover bg-center flex flex-col items-center pt-14 text-white relative">

      {/* NAV RIGHT */}
      <div className="absolute top-5 right-5 flex gap-3">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">
          HOME
        </button>

        <button
          onClick={handleLogout}
          className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">
          LOGOUT
        </button>
      </div>

      {/* WELCOME */}
      <h1 className="text-[60px] md:text-[75px] font-extrabold italic tracking-wide">
        WELCOME, ({username})
      </h1>

      {/* TOKEN BOX */}
      <div className="mt-10 w-[85%] max-w-5xl bg-white rounded-[50px] p-10 text-black shadow-2xl">
        <h2 className="text-2xl font-semibold mb-5">YOUR BEARER TOKEN:</h2>

        <div className="w-full min-h-[300px] border p-5 text-lg break-all rounded-lg">
          {token || "(TOKEN) HERE"}
        </div>
      </div>
    </div>
  );
}
