"use server";

import { BlogData, blogService, createBlogPost } from "@/services/blog.service";
import { updateTag } from "next/cache";

export async function getBlogs() {
  return await blogService();
}

export const createBlogPostAction = async (data: BlogData) => {
  const res = await createBlogPost(data);
  updateTag("blogPosts");
  return res;
};
