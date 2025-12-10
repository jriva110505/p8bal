'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { saveToken } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { API_BASE } from '@/lib/config';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch(`${API_BASE}/auth/login`, {
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
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white px-4 font-sans">
      {/* Background Image */}
      <Image
        src="/qqq.jpg"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={80}
        priority
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        aria-hidden="true"
      />

      {/* Content (on top of overlay) */}
      <div className="relative z-10 w-full max-w-md">
        {/* WELCOME TEXT */}
        <div className="text-center mb-10">
          <h1 className="text-[65px] font-extrabold italic tracking-widest drop-shadow-2xl">
            WELCOME TO MY WEB
          </h1>
          <p className="text-xl font-light mt-2 drop-shadow-md">login / sign up first</p>
        </div>

        {/* LOGIN CARD */}
        <Card className="bg-white/90 backdrop-blur-md shadow-xl p-4 text-center rounded-xl transition-transform hover:scale-[1.03]">
          <CardContent>
            <h1 className="text-2xl font-bold mb-4 text-black">Login</h1>

            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <Button className="w-full" type="submit">
                Login
              </Button>
            </form>

            <Button
              variant="link"
              className="mt-3 w-full text-black"
              onClick={() => router.push('/register')}
            >
              Create an account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
