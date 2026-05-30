import { redirect } from "next/navigation";

export default function PostsRedirect({ params }: { params: { slug: string } }) {
  redirect(`/blog/${params.slug}`);
}
