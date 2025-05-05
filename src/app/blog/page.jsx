'use client';
import InfiniteScroll from '../components/InfiniteScroll';
import useCategories from '../lib/useCategories';

export default function BlogPage() {
  const { categories } = useCategories();

  return (
    <>
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Top Stories & News Coverage</h1>
        <InfiniteScroll categories={categories} />
      </main>
    </>
  );
}


export const createmetadata = {
  title: "Top Stories & News Coverage",
  description: "Stay up-to-date with the latest news and breaking headlines from around the world. Explore a wide range of stories, from politics to entertainment.",
};
