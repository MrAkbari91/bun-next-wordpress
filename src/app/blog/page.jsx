'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfiniteScroll from '../components/InfiniteScroll';
import useCategories from '../lib/useCategories';

export default function BlogPage() {
  const { categories } = useCategories();

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <InfiniteScroll categories={categories} />
      </main>
      <Footer />
    </>
  );
}
