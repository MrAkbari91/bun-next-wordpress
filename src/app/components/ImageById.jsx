'use client';
import { useEffect, useState } from 'react';
import api from '../lib/api';

export default function ImageById({ id, cssClass }) {
  const [url, setUrl] = useState('');
  const [AltText, setAltText] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      if (!id) return;
      try {
        const res = await api.get(`/media/${id}`);
        setUrl(res.data?.source_url || '');
        setAltText(res.data?.alt_text || null);
      } catch (err) {
        console.error('Error fetching image:', err);
      }
    }

    fetchImage();
  }, [id]);
  if (!url) return null;
  return (
      <img
        src={url}
        alt={url}
        className={`object-cover text-center ${cssClass}`}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
  );
}
