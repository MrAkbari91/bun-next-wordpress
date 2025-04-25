'use client';
import { useEffect, useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BlogCard from '@/app/components/BlogCard';
import api from '@/app/lib/api';
import useCategories from '@/app/lib/useCategories';

export default function CategoryPage({ params }) {
  const { name } = params;
  const { categories, nameToId } = useCategories();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchCategoryPosts() {
      if (!nameToId[name]) return;

      try {
        const res = await api.get(`/posts?categories=${nameToId[name]}&_fields=date,slug,title,excerpt,categories`);
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching posts for category:', err);
      }
    }

    fetchCategoryPosts();
  }, [nameToId, name]);

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Category: {name}</h1>
        <div className="grid gap-4">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} categories={categories} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
