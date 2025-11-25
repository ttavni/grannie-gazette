"use client";

import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger
} from "@/components/ui/expandable-screen";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { FlashingDot } from "./ui/flashing-dot";

export default function Waitlist() {
  return (
    <ExpandableScreen
      layoutId="cta-card"
      triggerRadius="100px"
      contentRadius="24px"
    >
      <ExpandableScreenTrigger>
        <Button className="group text-[0.65rem] font-bold uppercase tracking-wider sm:tracking-widest">
          <FlashingDot size="sm" />
          Get early access
          <ArrowRightIcon
            aria-hidden="true"
            className="-me-1 transition-transform group-hover:translate-x-0.5"
            size={16}
          />
        </Button>
      </ExpandableScreenTrigger>

      <ExpandableScreenContent className="bg-primary">
        <div className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-6xl mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16">
          <div className="flex-1 w-full"></div>
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
}
