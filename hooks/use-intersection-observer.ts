// intersection observer implementation of infinite loading
// use intersection observer to detect if user has reached the end (bottom) of a list so we can safely trigger a function call to load more data

import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { targetRef, isIntersecting };
};
