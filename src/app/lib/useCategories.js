import { useEffect, useState } from 'react';
import api from './api';

export default function useCategories() {
  const [categories, setCategories] = useState({});
  const [nameToId, setNameToId] = useState({});
  const [slugToId, setSlugToId] = useState({});
  const [idToSlug, setIdToSlug] = useState({});

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await api.get('/categories?_fields=id,name,slug');
        console.log('Fetched categories:', res.data);
        const idToName = {};
        const nameToIdMap = {};
        const slugToIdMap = {};
        const idToSlugMap = {};

        res.data.forEach(cat => {
          idToName[cat.id] = cat.name;
          nameToIdMap[cat.name.toLowerCase()] = cat.id;
          slugToIdMap[cat.slug] = cat.id;
          idToSlugMap[cat.id] = cat.slug;
        });

        setCategories(idToName);
        setNameToId(nameToIdMap);
        setSlugToId(slugToIdMap);
        setIdToSlug(idToSlugMap);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    }

    fetchCategories();
  }, []);

  return { categories, nameToId, slugToId, idToSlug };
}
