
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plane, LockKeyhole, Mail } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    // Mock login for Milestone 1 — no real authentication.
    sessionStorage.setItem("airport-demo-login", "true");
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <div className="rounded-2xl bg-cyan-400/10 p-4">
            <Plane size={36} className="text-cyan-400" />
          </div>
        </div>

        <h1 className="text-center text-2xl font-bold">
          Airport Operations
        </h1>
        <p className="mt-2 text-center text-sm text-slate-400">
          Coordination Engine
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>
            <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-950 px-3">
              <Mail size={18} className="text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Enter your email"
                className="w-full bg-transparent py-3 text-white outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>
            <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-950 px-3">
              <LockKeyhole size={18} className="text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter your password"
                className="w-full bg-transparent py-3 text-white outline-none"
                required
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-400 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          Milestone 1 Demo · Mock authentication only
        </p>
      </div>
    </div>
  );
}
