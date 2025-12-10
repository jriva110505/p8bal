"use client";

import React, { useEffect, useState } from "react";
import { getToken, logoutUser, getUsername, getBarrierToken } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { API_BASE } from "@/lib/config";

interface Position {
  position_id: number;
  position_code: string;
  position_name: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [positionCode, setPositionCode] = useState("");
  const [positionName, setPositionName] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/login");
      return;
    }

    setUsername(getUsername());
    fetchPositions();
  }, []);

  function authHeaders() {
    const token = getToken();
    const barrier = getBarrierToken();

    return {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      "X-Barrier-Token": barrier ? barrier : "",
    };
  }

  async function fetchPositions() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/positions`, {
        method: "GET",
        headers: authHeaders(),
      });

      if (res.status === 401) {
        logoutUser();
        router.push("/login");
        return;
      }

      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

      const data = await res.json();
      const mappedData = data.map((pos: any) => ({
        position_id: pos.position_id ?? pos.id,
        position_code: pos.position_code,
        position_name: pos.position_name,
      }));

      setPositions(mappedData);
    } catch (err: any) {
      setError(err.message || "Failed to fetch positions");
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateOrUpdate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const payload = {
      position_code: positionCode,
      position_name: positionName,
    };

    try {
      let res: Response;
      if (editingId) {
        res = await fetch(`${API_BASE}/positions/${editingId}`, {
          method: "PUT",
          headers: authHeaders(),
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch(`${API_BASE}/positions`, {
          method: "POST",
          headers: authHeaders(),
          body: JSON.stringify(payload),
        });
      }

      if (res.status === 401) {
        logoutUser();
        router.push("/login");
        return;
      }

      if (!res.ok) throw new Error(`Save failed: ${res.status}`);

      setPositionCode("");
      setPositionName("");
      setEditingId(null);
      fetchPositions();
    } catch (err: any) {
      setError(err.message || "Save failed");
    }
  }

  function startEdit(p: Position) {
    setEditingId(p.position_id);
    setPositionCode(p.position_code);
    setPositionName(p.position_name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this position?")) return;

    try {
      const res = await fetch(`${API_BASE}/positions/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });

      if (!res.ok) throw new Error(`Delete failed: ${res.status}`);

      fetchPositions();
    } catch (err: any) {
      setError(err.message || "Delete failed");
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setPositionCode("");
    setPositionName("");
  }

  function handleLogout() {
    logoutUser();
    router.push("/login");
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col text-white pt-14 font-sans">

      {/* HEADER */}
      <header className="w-full px-10 flex items-center justify-between mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-400 drop-shadow-[0_0_20px_rgba(0,128,255,0.8)]">
          Positions Dashboard ({username.toUpperCase()})
        </h1>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={fetchPositions}
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-5 py-2 rounded-xl transition-all shadow-[0_0_10px_rgba(0,128,255,0.7)]"
          >
            Refresh
          </Button>

          <Button
            variant="destructive"
            onClick={handleLogout}
            className="bg-red-700 hover:bg-red-800 px-5 py-2 rounded-xl transition-all shadow-lg"
          >
            Log Out
          </Button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="w-full px-10 flex flex-col gap-12">

        {/* FORM CARD */}
        <div className="bg-black rounded-3xl shadow-[0_0_20px_rgba(0,128,255,0.7)] p-8 w-full transition-all">
          <h2 className="text-2xl font-bold text-center mb-6 tracking-tight text-blue-300 drop-shadow-[0_0_10px_rgba(0,128,255,0.7)]">
            {editingId ? "Edit Position" : "Create Position"}
          </h2>

          <form onSubmit={handleCreateOrUpdate} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium text-blue-200">Position Code</label>
              <Input
                placeholder="Position Code..."
                value={positionCode}
                onChange={(e) => setPositionCode(e.target.value)}
                required
                className="border border-blue-400 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-blue-200">Position Name</label>
              <Input
                placeholder="Position Name..."
                value={positionName}
                onChange={(e) => setPositionName(e.target.value)}
                required
                className="border border-blue-400 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full bg-blue-400 text-black py-3 rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_10px_rgba(0,128,255,0.8)]"
              >
                {editingId ? "Update" : "Create"}
              </Button>

              {editingId && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancelEdit}
                  className="w-full border border-blue-400 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition-all shadow-[0_0_10px_rgba(0,128,255,0.8)]"
                >
                  Cancel
                </Button>
              )}
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
        </div>

        {/* TABLE CARD */}
        <div className="bg-black rounded-3xl shadow-[0_0_20px_rgba(0,128,255,0.7)] p-8 w-full mb-10">
          <h2 className="text-xl font-semibold mb-4 tracking-tight text-blue-300 drop-shadow-[0_0_8px_rgba(0,128,255,0.7)]">
            Positions List {loading && "(Loading...)"}
          </h2>

          <div className="overflow-y-auto max-h-[500px] border border-blue-400 rounded-lg">
            <table className="w-full text-sm text-blue-200">
              <thead>
                <tr className="bg-gray-900 text-blue-400">
                  <th className="px-4 py-3 font-semibold text-left">ID</th>
                  <th className="px-4 py-3 font-semibold text-left">Code</th>
                  <th className="px-4 py-3 font-semibold text-left">Name</th>
                  <th className="px-4 py-3 font-semibold text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {positions.map((p) => (
                  <tr key={p.position_id} className="border-b border-blue-600 hover:bg-gray-700 transition-all">
                    <td className="px-4 py-3">{p.position_id}</td>
                    <td className="px-4 py-3">{p.position_code}</td>
                    <td className="px-4 py-3">{p.position_name}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border border-blue-400 hover:bg-black-400 hover:text-black rounded-md px-3 py-1 transition-all shadow-[0_0_8px_rgba(0,128,255,0.7)]"
                          onClick={() => startEdit(p)}
                        >
                          Edit
                        </Button>

                        <Button
                          size="sm"
                          className="bg-red-700 hover:bg-red-800 text-white rounded-md px-3 py-1 transition-all shadow-lg"
                          onClick={() => handleDelete(p.position_id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}

                {positions.length === 0 && !loading && (
                  <tr>
                    <td colSpan={4} className="py-5 text-center text-blue-400">
                      No positions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
