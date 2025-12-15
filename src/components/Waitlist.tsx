"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon, CheckCircle2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FlashingDot } from "./ui/flashing-dot";
import { useWaitlist } from "./WaitlistContext";

// The trigger button for the header
export function WaitlistTrigger() {
  const { openWaitlist } = useWaitlist();

  return (
    <Button
      className="group text-[0.65rem] font-bold uppercase tracking-wider sm:tracking-widest"
      onClick={openWaitlist}
    >
      <FlashingDot size="sm" />
      Get early access
      <ArrowRightIcon
        aria-hidden="true"
        className="-me-1 transition-transform group-hover:translate-x-0.5"
        size={16}
      />
    </Button>
  );
}

// The fullscreen modal
export function WaitlistModal() {
  const { isOpen, closeWaitlist } = useWaitlist();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#fdfcf9]"
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            onClick={closeWaitlist}
            className="absolute right-4 top-4 sm:right-6 sm:top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200/80 text-neutral-700 hover:bg-neutral-300 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </motion.button>

          {/* Content */}
          <div className="h-full w-full overflow-y-auto">
            <div className="min-h-full flex flex-col lg:flex-row items-center justify-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16 max-w-6xl mx-auto">
              {/* Left side - Info */}
              <div className="flex-1 w-full text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] uppercase bg-neutral-900 text-white font-medium mb-6">
                    Early Access
                  </span>

                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-neutral-900"
                    style={{ fontFamily: "var(--font-bebas-neue)" }}
                  >
                    JOIN THE WAITLIST
                  </h2>

                  <p className="text-neutral-600 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                    Be among the first families to bring joy to your grandparents with their very
                    own personalized newspaper.
                  </p>

                  <div className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                      <span className="text-neutral-700">Early-bird pricing (30% off)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                      <span className="text-neutral-700">First access when we launch</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                      <span className="text-neutral-700">Free sample gazette template</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex-1 w-full max-w-md"
              >
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white border-2 border-neutral-900 p-6 md:p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
                  >
                    <div className="text-center mb-6">
                      <div className="text-xs tracking-[0.2em] text-neutral-500 mb-1">
                        RESERVE YOUR SPOT
                      </div>
                      <div className="border-t-2 border-b-2 border-neutral-900 py-2 my-2">
                        <h3
                          className="text-2xl font-bold"
                          style={{ fontFamily: "var(--font-bebas-neue)" }}
                        >
                          GET NOTIFIED
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="waitlist-name"
                          className="block text-xs uppercase tracking-wider text-neutral-600 font-medium mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="waitlist-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Sarah Johnson"
                          className="w-full px-4 py-3 border-2 border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="waitlist-email"
                          className="block text-xs uppercase tracking-wider text-neutral-600 font-medium mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="waitlist-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sarah@family.com"
                          className="w-full px-4 py-3 border-2 border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className={cn(
                          "w-full py-4 bg-neutral-900 text-white font-bold uppercase tracking-wider text-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2",
                          isLoading && "opacity-70 cursor-not-allowed"
                        )}
                      >
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Joining...
                          </>
                        ) : (
                          <>
                            Join Waitlist
                            <ArrowRightIcon className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-neutral-500 text-center mt-4">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border-2 border-neutral-900 p-6 md:p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)] text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>

                    <div className="border-t-2 border-b-2 border-neutral-900 py-2 my-4">
                      <h3
                        className="text-2xl font-bold"
                        style={{ fontFamily: "var(--font-bebas-neue)" }}
                      >
                        YOU'RE ON THE LIST!
                      </h3>
                    </div>

                    <p className="text-neutral-600 mb-4">
                      Thanks for joining, <span className="font-bold">{name}</span>! We'll email you
                      at <span className="font-bold">{email}</span> when we're ready to launch.
                    </p>

                    <div className="pt-4 border-t border-neutral-200">
                      <p className="text-sm text-neutral-500">
                        Share with family members who'd love this for their grandparents too!
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Default export for backwards compatibility
export default function Waitlist() {
  return <WaitlistTrigger />;
}
