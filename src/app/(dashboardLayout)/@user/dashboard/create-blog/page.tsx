import CreateBlogFormServer from "@/components/modules/user/CreateBlogFormServer";
import { BlogData, blogService } from "@/services/blog.service";

export default async function CreateBlogPage() {
  const { data } = await blogService();

  console.log(data.data);
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col gap-6 items-center justify-center">
      <CreateBlogFormServer />
      <div>
        {data.data.map((post: BlogData) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    </div>
  );
}
