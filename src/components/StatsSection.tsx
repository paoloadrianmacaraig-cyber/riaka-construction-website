'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 10, suffix: '+', label: 'Years of Experience Serving Clients Across the Philippines' },
  { target: 600, suffix: '+', label: 'Successfully Completed Residential and Commercial Projects' },
  { target: 100, suffix: '%', label: 'Customer Satisfaction and Commitment to Quality' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (started) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const duration = 1500;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    const increment = target / totalFrames;

    let current = 0;
    const tick = () => {
      current += increment;
      if (current < target) {
        setCount(Math.ceil(current));
        frame = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <div className="bg-navy py-12 px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-extrabold text-white text-5xl lg:text-6xl tracking-wide">
              <Counter target={stat.target} suffix={stat.suffix} />
            </p>
            <p className="text-skyblue font-extrabold text-xs mt-2.5 leading-snug max-w-xs mx-auto uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
