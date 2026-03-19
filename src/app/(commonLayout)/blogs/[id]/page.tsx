import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, MessageCircle } from "lucide-react";
import { getBlogById } from "@/services/blog.service";

// 1. Next.js 16 requires params to be a Promise
type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function SingleBlogPage({ params }: PageProps) {
  // 2. Await the params to unwrap the ID
  const resolvedParams = await params;
  const postId = resolvedParams.id;

  // 3. In your real app, you will fetch the data here using the ID!
  const { data: responsPayload } = await getBlogById(postId);
  const post = responsPayload.data;
  console.log(responsPayload);

  // 4. Safely format the ugly ISO date string into something readable
  // 1. Give it a safe fallback (like the current date, or a default string)
  let formattedDate = "Unknown Date";

  // 2. Only try to format it if post.createdAt actually exists
  if (post?.createdAt) {
    try {
      formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(post.createdAt));
    } catch (error) {
      // If it STILL fails (e.g., a badly formatted string), it will just fall back to "Unknown Date"
      console.error("Could not parse date:", post.createdAt);
    }
  }
  return (
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      {/* Header Section */}
      <header className="mb-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="uppercase text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          {post.title}
        </h1>

        {/* Metadata (Date, Views, Comments) */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.createdAt}>{formattedDate}</time>
          </div>
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4" />
            <span>{post.views} Views</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4" />
            <span>{post._count?.comments} Comments</span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      {post.thumbnail && (
        <div className="relative w-full h-[400px] sm:h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            priority // Tells Next.js to load this image immediately!
            className="object-cover"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="prose prose-lg prose-gray max-w-none">
        {/* Note: If your content contains actual HTML tags from a rich text editor later, 
            you will need to use dangerouslySetInnerHTML here! */}
        <p className="leading-relaxed text-gray-700">{post.content}</p>
      </div>
    </article>
  );
}
