"use client";
import { useEffect, useState } from "react";
// import BlogCard from '@/app/components/BlogCard';
import api from "@/app/lib/api";
import useCategories from "@/app/lib/useCategories";
import InfiniteScroll from "@/app/components/InfiniteScroll";

export default function CategoryPage({ params }) {
  const { name } = params;
  const { categories, nameToId } = useCategories();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchCategoryPosts() {
      if (!nameToId[name]) return;

      try {
        const res = await api.get(
          `/posts?categories=${nameToId[name]}&_fields=date,slug,title,excerpt,categories,featured_media,tag`,
        );
        setPosts(res.data);
        console.log(posts, "posts");
      } catch (err) {
        console.error("Error fetching posts for category:", err);
      }
    }

    fetchCategoryPosts();
  }, [nameToId, name]);

  return (
    <>
      <main className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Category: {name}</h1>
        <div className="flex flex-wrap">
          {/* {posts.map(post => (
            <BlogCard key={post.slug} post={post} categories={categories} />
          ))} */}
          <InfiniteScroll categories={name} />
        </div>
      </main>
    </>
  );
}
