"use client";
import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import api from "./lib/api";
import useCategories from "./lib/useCategories";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const { categories } = useCategories();
  console.log(categories, "categories");
  useEffect(() => {
    async function fetchRecentPosts() {
      try {
        const res = await api.get(
          "/posts?per_page=12&_fields=id,date,slug,title,excerpt,categories,featured_media",
        );
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching recent posts:", err);
      }
    }

    fetchRecentPosts();
  }, []);

  return (
    <>
      <main className="container mx-auto p-4">
        <h1 className="mb-4 text-center text-3xl font-bold text-white">
          Welcome to WanderCity Blog
        </h1>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} categories={categories} />
          ))}
        </div>
      </main>
    </>
  );
}
