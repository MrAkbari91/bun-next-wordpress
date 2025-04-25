import { useEffect, useState } from 'react';
import api from './api';

export default function useCategories() {
  const [categories, setCategories] = useState({});
  const [nameToId, setNameToId] = useState({});

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await api.get('/categories?_fields=id,name');
        const idToName = {};
        const nameToIdMap = {};
        res.data.forEach(cat => {
          idToName[cat.id] = cat.name;
          nameToIdMap[cat.name.toLowerCase()] = cat.id;
        });
        setCategories(idToName);
        setNameToId(nameToIdMap);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    }

    fetchCategories();
  }, []);

  return { categories, nameToId };
}
