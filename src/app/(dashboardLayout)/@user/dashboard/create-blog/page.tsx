import { CreateBlogFormClient } from "@/components/modules/user/CreateBlogFormClient";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function CreateBlogPage() {
  const { data } = await blogService();

  console.log(data.data);
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col gap-6 items-center justify-center">
      {/* <CreateBlogFormServer /> */}
      <CreateBlogFormClient></CreateBlogFormClient>
      <div>
        {data.data.map((post: BlogPost) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    </div>
  );
}
