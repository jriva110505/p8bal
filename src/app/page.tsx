'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { saveToken } from '@/lib/auth';
import Image from "next/image";
import { API_BASE } from '@/lib/config';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || 'Login failed');
      return;
    }

    saveToken(data.accessToken);
    router.push('/dashboard');
  }

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-10 overflow-hidden">

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.45)",
        }}
      />

      {/* Navigation Menu */}
      <nav
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        {["About", "Education", "Hobbies", "Contact"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "700",
              padding: "10px 20px",
              borderRadius: "12px",
              border: "2px solid rgba(255,255,255,0.7)",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0,0,0,0.35)",
              transition: "0.3s",
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* LOGIN BUTTON (top-right) */}
      <button
        onClick={() => (window.location.href = "/login")}
        style={{
          position: "fixed",
          top: 20,
          right: 30,
          padding: "10px 25px",
          fontWeight: "700",
          color: "white",
          borderRadius: "12px",
          border: "2px solid rgba(255,255,255,0.7)",
          backgroundColor: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(5px)",
          cursor: "pointer",
          transition: "0.3s",
          zIndex: 10,
        }}
      >
        LOG IN
      </button>

      {/* Content Section */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
          gap: "4rem",
        }}
      >
        {/* Left Side Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            WELCOME TO MY <br /> PERSONAL WEB
          </h1>
          <p className="text-lg lg:text-xl font-light text-white/80">
            Jan Ayale Balote • BSIT-2B
          </p>
        </div>

        {/* Right Side Profile Photo with Glow */}
        <div className="lg:w-1/2 flex justify-center">
          <div
            className="w-96 h-96 rounded-full border-8 overflow-hidden shadow-2xl"
            style={{
              borderColor: "#7bbfc4ff",
              boxShadow: "0 0 30px #62aaafff, 0 0 60px #566162ff, 0 0 90px #00f0ff",
            }}
          >
            <Image
              src="/balote.jpg"
              alt="Profile"
              width={384}
              height={384}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
