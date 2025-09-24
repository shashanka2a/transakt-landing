import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Lightweight scroll-reveal hook without external deps
import { useEffect, useRef, useState } from "react";

export function useReveal(options?: IntersectionObserverInit) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (isRevealed) return;
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      });
    }, { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1, ...options });

    observer.observe(element);
    return () => observer.disconnect();
  }, [isRevealed, options]);

  return { elementRef, isRevealed };
}

export function Reveal({
  as: Component = "div",
  className,
  children,
  delay = 0,
}: {
  as?: any;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const { elementRef, isRevealed } = useReveal();
  return (
    <Component
      ref={elementRef as any}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
