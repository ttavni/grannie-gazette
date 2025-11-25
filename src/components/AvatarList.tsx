"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const data = [
  {
    name: "Jack",
    position: "@Tencent",
    image: "https://img.buoucoding.com/avatar/0004.png",
  },
  {
    name: "Adam",
    position: "@Tencent",
    image: "https://img.buoucoding.com/avatar/0002.png",
  },
  {
    name: "Kroul",
    position: "@Tencent",
    image: "https://img.buoucoding.com/avatar/0005.png",
  },
  {
    name: "Alice",
    position: "@Huawei",
    image: "https://img.buoucoding.com/avatar/0001.png",
  },
  {
    name: "Korel",
    position: "@Alibaba",
    image: "https://img.buoucoding.com/avatar/0006.png",
  },
];

function AvatarList({ size = "md", className }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sizes: Record<"sm" | "md" | "lg", string> = {
    lg: "m-3 size-40",
    md: "m-2 size-12",
    sm: "m-1 size-8",
  };

  return (
    <div className={cn("flex py-12", className)}>
      {data.map((item, index) => (
        <div
          key={item.name}
          className="group relative z-0 -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative overflow-hidden rounded-full bg-white">
            <div className="bg-size pointer-events-none absolute size-full animate-bg-position from-violet-500 from-30% via-cyan-400 via-50% to-pink-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r" />
            <div className="z-1 blur-lg" />
            <img
              src={item.image}
              alt={item.name}
              className={cn("rounded-full object-cover", sizes[size] ?? sizes.md)}
            />
          </div>
          {hoveredIndex === index && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
              <div className="text-sm font-semibold">{item.name}</div>
              <div className="text-sm">{item.position}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function AvatarListDemo() {
  return <AvatarList size="md" className="flex items-center justify-center" />;
}
