"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--bg-dark)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{
        background: "var(--surface-dark)",
        border: "1px solid var(--border-on-dark)",
        borderRadius: "var(--r-lg)",
        padding: "48px 40px",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: "32px",
          fontWeight: "800",
          color: "var(--text-on-dark)",
          marginBottom: "8px",
          letterSpacing: "-0.5px",
        }}>
          Smack<span style={{ color: "var(--rose)" }}>Check</span>
        </div>
        <p style={{
          color: "var(--text-on-dark-dim)",
          fontSize: "14px",
          marginBottom: "32px",
        }}>
          Enter the password to continue
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            style={{
              width: "100%",
              padding: "12px 16px",
              background: "var(--bg-dark-2)",
              border: `1px solid ${error ? "var(--rose)" : "var(--border-on-dark-strong)"}`,
              borderRadius: "var(--r-sm)",
              color: "var(--text-on-dark)",
              fontSize: "15px",
              outline: "none",
              boxSizing: "border-box",
              marginBottom: "8px",
            }}
          />
          {error && (
            <p style={{
              color: "var(--rose)",
              fontSize: "13px",
              marginBottom: "12px",
              textAlign: "left",
            }}>
              Incorrect password. Try again.
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            style={{
              width: "100%",
              padding: "12px",
              background: "var(--brand)",
              color: "#fff",
              border: "none",
              borderRadius: "var(--r-sm)",
              fontSize: "15px",
              fontWeight: "700",
              cursor: loading || !password ? "not-allowed" : "pointer",
              opacity: loading || !password ? 0.6 : 1,
              marginTop: "8px",
              letterSpacing: "0.2px",
            }}
          >
            {loading ? "Verifying..." : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
