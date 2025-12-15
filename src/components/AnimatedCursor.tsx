"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Marquee } from "./ui/marquee";

const Cursor = ({
  color = "amber",
}: { color?: "amber" | "emerald" | "rose" | "sky" | "violet" }) => {
  const colors = {
    amber: { fill: "#f59e0b", stroke: "#fbbf24" },
    emerald: { fill: "#10b981", stroke: "#34d399" },
    rose: { fill: "#f43f5e", stroke: "#fb7185" },
    sky: { fill: "#0ea5e9", stroke: "#38bdf8" },
    violet: { fill: "#8b5cf6", stroke: "#a78bfa" },
  };

  return (
    <svg fill="none" height="18" viewBox="0 0 17 18" width="17" className="shrink-0">
      <path
        d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
        fill={colors[color].fill}
        stroke={colors[color].stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
};

// Family contribution card for marquee
interface FamilyContribution {
  name: string;
  relation: string;
  message: string;
  avatar: string;
  color: "amber" | "emerald" | "rose" | "sky" | "violet";
}

const familyContributions: FamilyContribution[] = [
  {
    name: "Sarah",
    relation: "Daughter",
    message: "Adding Emma's graduation photos...",
    avatar: "👩",
    color: "amber",
  },
  {
    name: "Mike",
    relation: "Son",
    message: "Writing about Tommy's football match",
    avatar: "👨",
    color: "emerald",
  },
  {
    name: "Emma",
    relation: "Granddaughter",
    message: "Sharing my first day at university!",
    avatar: "👧",
    color: "rose",
  },
  {
    name: "Tom",
    relation: "Grandson",
    message: "Uploading birthday party pictures",
    avatar: "👦",
    color: "sky",
  },
  {
    name: "Lisa",
    relation: "Daughter-in-law",
    message: "Adding the family recipe story",
    avatar: "👩‍🦰",
    color: "violet",
  },
  {
    name: "David",
    relation: "Son-in-law",
    message: "Writing about our holiday trip",
    avatar: "🧔",
    color: "amber",
  },
  {
    name: "Katie",
    relation: "Granddaughter",
    message: "Sharing my art project photos!",
    avatar: "👧",
    color: "emerald",
  },
  {
    name: "Jack",
    relation: "Grandson",
    message: "Adding my science fair win 🏆",
    avatar: "👦",
    color: "rose",
  },
];

// Random cursor position type
type CursorPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function ContributionCard({
  name,
  relation,
  message,
  avatar,
  color,
  cursorPosition,
  seed,
}: FamilyContribution & { cursorPosition: CursorPosition; seed: number }) {
  const bgColors = {
    amber: "border-amber-200 bg-amber-50",
    emerald: "border-emerald-200 bg-emerald-50",
    rose: "border-rose-200 bg-rose-50",
    sky: "border-sky-200 bg-sky-50",
    violet: "border-violet-200 bg-violet-50",
  };

  const cursorBgColors = {
    amber: "bg-amber-600 border-amber-400",
    emerald: "bg-emerald-600 border-emerald-400",
    rose: "bg-rose-600 border-rose-400",
    sky: "bg-sky-600 border-sky-400",
    violet: "bg-violet-600 border-violet-400",
  };

  // Position classes for cursor - placed just outside the card edge
  const positionClasses: Record<CursorPosition, string> = {
    "top-left": "top-1 left-1",
    "top-right": "top-1 right-1",
    "bottom-left": "bottom-1 left-1",
    "bottom-right": "bottom-1 right-1",
  };

  // Natural, subtle cursor drift - like someone's hand naturally moves while hovering
  const duration = 2.5 + (seed % 3) * 0.5; // Varies between 2.5-4s based on seed

  return (
    <div className="relative group py-2 px-4">
      {/* Floating cursor with natural subtle movement */}
      <motion.div
        className={cn("absolute z-10 flex items-center gap-1", positionClasses[cursorPosition])}
        animate={{
          x: [0, 2, -1, 1, 0],
          y: [0, 1, 2, -1, 0],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Cursor color={color} />
        <span
          className={cn(
            "text-[10px] font-medium text-white px-1.5 py-0.5 rounded-full border shadow-sm",
            cursorBgColors[color]
          )}
        >
          {name}
        </span>
      </motion.div>

      {/* Card */}
      <div
        className={cn(
          "w-64 rounded-lg border p-3 shadow-sm transition-all hover:shadow-md",
          bgColors[color]
        )}
      >
        <div className="flex items-center gap-2">
          <div className="text-2xl">{avatar}</div>
          <div className="flex-1 min-w-0">
            <span className="text-xs text-neutral-500">{relation}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{message}</p>
      </div>
    </div>
  );
}

// Vertical marquee showing family members contributing
export function FamilyContributionMarquee() {
  const contributionsWithPositions = familyContributions.map((contribution, index) => ({
    ...contribution,
    cursorPosition: "bottom-right" as CursorPosition,
    seed: index,
  }));

  return (
    <div className="relative flex h-[340px] w-full items-center justify-center">
      {/* Single column infinite vertical marquee - using clip for smooth edges */}
      <div className="overflow-hidden h-full w-full flex items-center justify-center">
        <Marquee vertical pauseOnHover repeat={4} className="[--duration:25s] [--gap:0.5rem]">
          {contributionsWithPositions.map((contribution, index) => (
            <ContributionCard
              key={`${contribution.name}-${index}`}
              {...contribution}
            />
          ))}
        </Marquee>
      </div>

      {/* Gradient overlays for vertical marquee */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

