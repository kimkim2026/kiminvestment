"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "already" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else if (data.error === "already_subscribed") {
        setStatus("already");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const MESSAGE: Record<string, { text: string; color: string }> = {
    success: { text: "구독해 주셔서 감사합니다! 새 글이 올라오면 알려드릴게요 😊", color: "#2ecc71" },
    already: { text: "이미 구독 중이신 이메일입니다", color: "#C9A84C" },
    error: { text: "오류가 발생했습니다. 다시 시도해 주세요", color: "#e74c3c" },
  };

  return (
    <section
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      className="py-16 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-5">
          <div style={{ background: "#C9A84C", width: 8, height: 8 }} className="rounded-full" />
          <span style={{ color: "#C9A84C" }} className="text-xs font-semibold uppercase tracking-widest">
            뉴스레터
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
          새 글 알림 받기
        </h2>
        <p className="text-sm md:text-base mb-8" style={{ color: "#888" }}>
          미국 부동산 투자 최신 글을 이메일로 받아보세요
        </p>

        {status === "success" ? (
          <p className="font-semibold text-base" style={{ color: "#2ecc71" }}>
            {MESSAGE.success.text}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소를 입력하세요"
              required
              disabled={status === "loading"}
              style={{
                background: "#1e1e1e",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
              className="flex-1 px-4 py-3 rounded-lg text-sm outline-none focus:border-[#C9A84C] transition-colors placeholder:text-[#555] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              style={{ background: "#C9A84C", color: "#000" }}
              className="px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap cursor-pointer"
            >
              {status === "loading" ? "처리 중..." : "구독하기"}
            </button>
          </form>
        )}

        {(status === "already" || status === "error") && MESSAGE[status] && (
          <p className="mt-4 text-sm font-medium" style={{ color: MESSAGE[status].color }}>
            {MESSAGE[status].text}
          </p>
        )}
      </div>
    </section>
  );
}
