import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function BlogPage() {
  const { data } = await blogService(
    {
      search: "",
    },
    {
      cache: "no-store",
    },
  );

  console.log(data);

  return (
    <div className="grid grid-cols-3 max-w-5xl mx-auto gap-6">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
