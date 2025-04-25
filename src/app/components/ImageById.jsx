'use client';
import { useEffect, useState } from 'react';
import api from '../lib/api';

export default function ImageById({ id }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    async function fetchImage() {
      if (!id) return;
      try {
        const res = await api.get(`/media/${id}`);
        setUrl(res.data?.source_url || '');
        console.log('Image URL:', res.data);
      } catch (err) {
        console.error('Error fetching image:', err);
      }
    }

    fetchImage();
  }, [id]);
  console.log('Image ID:', id);
  if (!url) return null;

  return (
    <div className="relative w-full h-64">
      <img
        src={url}
        alt="Image"
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
