import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div style={{ color: "var(--gold)" }} className="text-8xl font-bold mb-4">
          404
        </div>
        <h1 style={{ color: "var(--foreground)" }} className="text-2xl font-bold mb-3">
          페이지를 찾을 수 없습니다
        </h1>
        <p style={{ color: "#888" }} className="text-sm mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            style={{ background: "var(--gold)", color: "#000" }}
            className="px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            홈으로
          </Link>
          <Link
            href="/blog"
            style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
            className="px-6 py-2.5 rounded-lg font-semibold text-sm hover:border-[var(--gold)] transition-colors"
          >
            블로그 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
