import { useEffect, useRef, useState, useCallback } from 'react';
import BlogCard from './BlogCard';
import api from '../lib/api';

export default function InfiniteScroll({ categories }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await api.get(`/posts?_fields=date,slug,title,excerpt,categories,featured_media,tag&page=${page}`);
      if (res.data.length === 0) {
        setHasMore(false);
        return;
      }
      setPosts(prev => [...prev, ...res.data]);
    } catch (err) {
      setHasMore(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1);
      }
    });
    if (loader.current) observer.observe(loader.current);
    return () => loader.current && observer.unobserve(loader.current);
  }, [hasMore]);

  return (
    <>
      <div className="flex flex-wrap">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} categories={categories} />
        ))}
      </div>
      <div ref={loader} className="h-10 mt-4" />
    </>
  );
}
