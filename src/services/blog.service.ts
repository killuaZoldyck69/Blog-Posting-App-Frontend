import { env } from "@/env";

const API_URL = env.API_URL;

interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export interface BlogSearchParams {
  search?: string;
  page?: string;
  limit?: string;
  tags?: string;
}

export const blogService = async (
  params?: BlogSearchParams,
  options?: ServiceOptions,
) => {
  try {
    const url = new URL(`${API_URL}/posts`);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          url.searchParams.append(key, String(value));
        }
      });
    }

    const config: RequestInit = {};

    if (options?.cache) {
      config.cache = options.cache;
    }

    if (options?.revalidate) {
      config.next = { revalidate: options.revalidate };
    }

    const res = await fetch(url.toString(), config);
    const data = await res.json();

    return { data: data, error: null };
  } catch (error) {
    return { data: null, error: { message: "Something went wrong" } };
  }
};
