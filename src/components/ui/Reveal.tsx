"use client";
import React, { useEffect, useRef, useState, type ElementType } from "react";
import { cn } from "./utils";

export function useReveal(options?: IntersectionObserverInit) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (isRevealed) return;
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isRevealed, options]);

  return { elementRef, isRevealed };
}

type RevealElement = ElementType;

export function Reveal({
  as: Component = "div",
  className,
  children,
  delay = 0,
}: {
  as?: RevealElement;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const { elementRef, isRevealed } = useReveal();
  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Component>
        {children}
      </Component>
    </div>
  );
}


