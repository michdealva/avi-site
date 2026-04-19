"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/dashboard");
        router.refresh();
      } else {
        setError("Incorrect password");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-graphite grid-texture flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-steel border border-border-dark rounded-2xl p-10">
        <div className="flex justify-center mb-8">
          <Image
            src="/avi-logo.svg"
            alt="AVI Industriel"
            width={120}
            height={40}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(60%) sepia(85%) saturate(475%) hue-rotate(79deg) brightness(95%) contrast(90%)",
            }}
            priority
          />
        </div>
        <h1 className="text-2xl font-semibold text-bright text-center mb-2">
          Dashboard Login
        </h1>
        <p className="text-dust text-sm text-center mb-8">
          Enter your password to manage inventory.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-bright mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
              className="w-full bg-graphite border border-border-dark text-bright rounded-lg p-3 focus:border-signal focus:outline-none transition-colors"
            />
          </div>

          {error && (
            <p className="text-sm text-danger" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-signal hover:bg-signal-dark text-machine-black font-semibold py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
