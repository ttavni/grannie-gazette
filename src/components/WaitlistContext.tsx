"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface WaitlistContextValue {
  isOpen: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openWaitlist = () => setIsOpen(true);
  const closeWaitlist = () => setIsOpen(false);

  return (
    <WaitlistContext.Provider value={{ isOpen, openWaitlist, closeWaitlist }}>
      {children}
    </WaitlistContext.Provider>
  );
}

