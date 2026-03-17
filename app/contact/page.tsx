"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mnjggkld", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      }
    } catch {
      setError("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 style={{ color: "var(--foreground)" }} className="text-3xl md:text-4xl font-bold mb-3">
          문의하기
        </h1>
        <p style={{ color: "#888" }} className="text-base leading-relaxed">
          궁금한 점이 있으시면 편하게 문의해 주세요.
          <br />
          영업일 기준 1~2일 내에 답변드립니다.
        </p>
      </div>

      {submitted ? (
        /* 감사 메시지 */
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--gold)",
          }}
          className="rounded-xl p-10 text-center"
        >
          <div
            style={{
              background: "rgba(201,168,76,0.12)",
              border: "1px solid var(--gold)",
            }}
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="#C9A84C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 style={{ color: "var(--gold)" }} className="text-xl font-bold mb-2">
            문의가 접수되었습니다
          </h2>
          <p style={{ color: "#aaa" }} className="text-sm leading-relaxed">
            문의해 주셔서 감사합니다.
            <br />
            곧 답변드리겠습니다.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{ color: "var(--gold)", border: "1px solid var(--border)" }}
            className="mt-6 px-5 py-2 rounded-lg text-sm hover:border-[var(--gold)] transition-colors"
          >
            새 문의 작성
          </button>
        </div>
      ) : (
        /* 문의 폼 */
        <form
          onSubmit={handleSubmit}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
          className="rounded-xl p-6 md:p-8 space-y-5"
        >
          {/* 이름 */}
          <div>
            <label
              htmlFor="name"
              style={{ color: "var(--foreground)" }}
              className="block text-sm font-medium mb-1.5"
            >
              이름 <span style={{ color: "var(--gold)" }}>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="홍길동"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
              className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-[var(--gold)] transition-colors placeholder:text-[#444]"
            />
          </div>

          {/* 이메일 */}
          <div>
            <label
              htmlFor="email"
              style={{ color: "var(--foreground)" }}
              className="block text-sm font-medium mb-1.5"
            >
              이메일 <span style={{ color: "var(--gold)" }}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="example@email.com"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
              className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-[var(--gold)] transition-colors placeholder:text-[#444]"
            />
          </div>

          {/* 문의 제목 */}
          <div>
            <label
              htmlFor="subject"
              style={{ color: "var(--foreground)" }}
              className="block text-sm font-medium mb-1.5"
            >
              문의 제목 <span style={{ color: "var(--gold)" }}>*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="문의 제목을 입력해 주세요"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
              className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-[var(--gold)] transition-colors placeholder:text-[#444]"
            />
          </div>

          {/* 문의 내용 */}
          <div>
            <label
              htmlFor="message"
              style={{ color: "var(--foreground)" }}
              className="block text-sm font-medium mb-1.5"
            >
              문의 내용 <span style={{ color: "var(--gold)" }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="문의 내용을 자유롭게 작성해 주세요"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                resize: "vertical",
              }}
              className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-[var(--gold)] transition-colors placeholder:text-[#444]"
            />
          </div>

          {/* 에러 메시지 */}
          {error && (
            <p style={{ color: "#e74c3c" }} className="text-sm">
              {error}
            </p>
          )}

          {/* 제출 버튼 */}
          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? "#7a6020" : "var(--gold)",
              color: "#000",
            }}
            className="w-full py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed"
          >
            {loading ? "전송 중..." : "문의 보내기"}
          </button>
        </form>
      )}
    </div>
  );
}
