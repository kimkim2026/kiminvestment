import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { getAllPosts, getPostBySlug, categoryToSlug } from "@/lib/posts";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const ogImage = post.coverImage
    ? { url: post.coverImage, width: 1200, height: 630, alt: post.title }
    : { url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200", width: 1200, height: 630, alt: post.title };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://kiminvestment.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["김통찰"],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage.url],
    },
  };
}

const categoryColors: Record<string, string> = {
  주식: "#2ecc71",
  ETF: "#c9a84c",
  투자전략: "#3498db",
  부동산: "#e67e22",
  암호화폐: "#9b59b6",
  "나의 투자 경험담": "#e74c3c",
  "투자 가이드": "#2ecc71",
  "세금/법률": "#3498db",
};

function renderInline(text: string, baseKey: number): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${baseKey}-${idx}`} style={{ color: "var(--foreground)" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          style={{
            color: "var(--foreground)",
            borderLeft: "3px solid var(--gold)",
            paddingLeft: "12px",
            marginTop: "40px",
            marginBottom: "16px",
          }}
          className="text-xl font-bold"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          style={{ color: "var(--foreground)", marginTop: "24px", marginBottom: "10px" }}
          className="text-base font-semibold"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)) {
      const match = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (match) {
        const [, alt, src] = match;
        elements.push(
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={key++}
            src={src}
            alt={alt}
            className="w-full rounded-xl my-6 object-cover"
            style={{ maxHeight: "400px", border: "1px solid var(--border)" }}
          />
        );
      }
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={key++}
          style={{
            borderLeft: "3px solid var(--gold)",
            background: "var(--surface-2)",
            color: "#aaa",
            lineHeight: 1.9,
          }}
          className="pl-4 py-3 pr-4 rounded-r-lg my-4 text-lg italic"
        >
          {line.slice(2)}
        </blockquote>
      );
    } else if (line.startsWith("| ")) {
      // Table
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0]
        .split("|")
        .filter((c) => c.trim())
        .map((c) => c.trim());
      const rows = tableLines
        .slice(2)
        .map((row) =>
          row
            .split("|")
            .filter((c) => c.trim())
            .map((c) => c.trim())
        );
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table
            style={{ border: "1px solid var(--border)" }}
            className="w-full text-sm border-collapse rounded-lg overflow-hidden"
          >
            <thead>
              <tr style={{ background: "var(--surface-2)" }}>
                {headers.map((h, idx) => (
                  <th
                    key={idx}
                    style={{ border: "1px solid var(--border)", color: "var(--gold)" }}
                    className="px-4 py-2 text-left font-semibold"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  style={{ background: rIdx % 2 === 0 ? "transparent" : "var(--surface)" }}
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
                      className="px-4 py-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.match(/^(\d+\.) /) || line.startsWith("- ")) {
      // List
      const isOrdered = line.match(/^\d+\. /);
      const listItems: string[] = [];
      while (
        i < lines.length &&
        (lines[i].match(/^\d+\. /) || lines[i].startsWith("- "))
      ) {
        listItems.push(
          lines[i].replace(/^(\d+\. |- )/, "")
        );
        i++;
      }
      const Tag = isOrdered ? "ol" : "ul";
      elements.push(
        <Tag
          key={key++}
          style={{ color: "#bbb", lineHeight: 1.9 }}
          className={`my-4 pl-5 space-y-1.5 text-lg ${isOrdered ? "list-decimal" : "list-disc"}`}
        >
          {listItems.map((item, idx) => (
            <li key={idx}>{renderInline(item, key * 100 + idx)}</li>
          ))}
        </Tag>
      );
      continue;
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} style={{ color: "var(--foreground)", lineHeight: 1.9 }} className="font-semibold my-3 text-lg">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      // Parse inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={key++} style={{ color: "#ccc", lineHeight: 1.9 }} className="my-3 text-lg">
          {parts.map((part, idx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={idx} style={{ color: "var(--foreground)" }}>
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const color = categoryColors[post.category] || "var(--gold)";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: "#666" }}>
        <Link href="/" className="hover:opacity-80">홈</Link>
        <span>/</span>
        <Link href={`/blog?category=${categoryToSlug(post.category)}`} className="hover:opacity-80">{post.category}</Link>
        <span>/</span>
        <span style={{ color: "var(--gold)" }} className="truncate max-w-xs">{post.title}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span
            style={{
              color,
              background: `${color}18`,
              border: `1px solid ${color}40`,
            }}
            className="text-xs font-semibold px-3 py-1 rounded-full"
          >
            {post.category}
          </span>
          <span style={{ color: "#555" }} className="text-xs">{post.readTime}분 읽기</span>
          <time style={{ color: "#555" }} className="text-xs">
            {new Date(post.date).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <h1 style={{ color: "var(--foreground)" }} className="text-2xl md:text-3xl font-bold leading-snug mb-4">
          {post.title}
        </h1>

        <p style={{ color: "#888" }} className="text-base leading-relaxed mb-6">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{ color: "#666", background: "var(--surface-2)", border: "1px solid var(--border)" }}
              className="text-xs px-2.5 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full rounded-xl mb-8 object-cover"
          style={{ maxHeight: "420px", border: "1px solid var(--border)" }}
        />
      )}

      {/* Divider */}
      <div style={{ background: "var(--border)" }} className="h-px mb-10" />

      {/* Article Content */}
      <article className="prose-custom">
        {renderMarkdown(post.content)}
      </article>

      {/* Divider */}
      <div style={{ background: "var(--border)" }} className="h-px mt-12 mb-8" />

      {/* Navigation */}
      <nav className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prevPost && (
          <Link
            href={`/blog/${prevPost.slug}`}
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            className="p-4 rounded-lg hover:border-[var(--gold)] transition-colors group"
          >
            <div style={{ color: "#666" }} className="text-xs mb-1">← 이전 글</div>
            <div style={{ color: "var(--foreground)" }} className="text-sm font-medium group-hover:text-[var(--gold)] transition-colors line-clamp-2">
              {prevPost.title}
            </div>
          </Link>
        )}
        {nextPost && (
          <Link
            href={`/blog/${nextPost.slug}`}
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            className="p-4 rounded-lg hover:border-[var(--gold)] transition-colors group md:text-right md:col-start-2"
          >
            <div style={{ color: "#666" }} className="text-xs mb-1">다음 글 →</div>
            <div style={{ color: "var(--foreground)" }} className="text-sm font-medium group-hover:text-[var(--gold)] transition-colors line-clamp-2">
              {nextPost.title}
            </div>
          </Link>
        )}
      </nav>

      {/* Back to Blog */}
      <div className="text-center mt-8">
        <Link
          href={`/blog?category=${categoryToSlug(post.category)}`}
          style={{ color: "var(--gold)", border: "1px solid var(--border)" }}
          className="inline-block px-6 py-2.5 rounded-lg text-sm font-medium hover:border-[var(--gold)] transition-colors"
        >
          ← 목록으로
        </Link>
      </div>

      {/* Schema.org Article */}
      <Script
        id={`schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Person",
              name: "김통찰",
              url: "https://kiminvestment.com/about",
            },
            publisher: {
              "@type": "Organization",
              name: "김통찰의 미국 부동산",
              url: "https://kiminvestment.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://kiminvestment.com/blog/${post.slug}`,
            },
            keywords: post.tags.join(", "),
            inLanguage: "ko-KR",
          }),
        }}
      />
    </div>
  );
}
