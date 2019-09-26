import { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useMeasure(showing = true) {
  const ref = useRef();
  const [bounds, set] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)));
  useEffect(() => {
    if (showing) {
      ro.observe(ref.current);
    }

    return () => {
      if (ro) {
        ro.disconnect();
      }
    };
  }, [showing]);

  return [{ ref }, bounds];
}
