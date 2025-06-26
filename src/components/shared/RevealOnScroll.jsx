import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          scrollRef.current.classList.add("visible");
        } else {
          scrollRef.current.classList.remove("visible");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }
    return () => observer.disconnect();
  }, [scrollRef]);

  return (
    <div ref={scrollRef} className="viewOpen">
      {children}
    </div>
  );
};
