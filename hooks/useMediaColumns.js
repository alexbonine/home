import { useEffect, useState } from 'react';

export default function useMediaColumns(queries, values, defaultValue) {
  const match = () => values[queries.findIndex((query) => window.matchMedia(query).matches)] || defaultValue;

  const [value, set] = useState(match);

  useEffect(() => {
    const handler = () => set(match);
    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  return value;
}
