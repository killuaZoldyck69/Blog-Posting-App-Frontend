"use server";

import { blogService } from "@/services/blog.service";

export async function getBlogs() {
  return await blogService();
}
