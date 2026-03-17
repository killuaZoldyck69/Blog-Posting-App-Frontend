import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function Home() {
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
    <div className="grid grid-cols-2 max-w-5xl mx-auto px-4 gap-6">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
