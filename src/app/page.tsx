"use client";

import { FamilyContributionMarquee } from "@/components/AnimatedCursor";
import { AvatarListDemo } from "@/components/AvatarList";
import { Globe } from "@/components/Globe";
import { Heading, Paragraph, PricingWrapper } from "@/components/PricingCard";
import { useWaitlist } from "@/components/WaitlistContext";
import { cn } from "@/lib/utils";
import type { Variants } from "motion/react";
import { motion } from "motion/react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Newspaper-style decorative divider
function NewspaperDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 py-6", className)}>
      <div className="flex-1 h-px bg-neutral-300" />
      <div className="text-neutral-400 text-xs tracking-[0.3em] uppercase font-medium">✦</div>
      <div className="flex-1 h-px bg-neutral-300" />
    </div>
  );
}

// Hero section
function HeroSection() {
  const { openWaitlist } = useWaitlist();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[70vh] flex items-center justify-center py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-8"
        >
          A newspaper for families
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0, 1] }}
          className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-serif leading-[1.1] mb-10 text-neutral-900 tracking-tight"
          style={{ fontFamily: "var(--font-pt-serif)" }}
        >
          Your family's stories,{" "}
          <br className="hidden md:block" />
          <span className="italic">printed & delivered</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-md mx-auto mb-14"
        >
          Photos and updates from everyone in the family, 
          transformed into a beautiful newspaper they can hold.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <button
            type="button"
            onClick={openWaitlist}
            className="group inline-flex items-center gap-3 text-sm tracking-wide text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            <span className="w-12 h-[1px] bg-neutral-900 group-hover:w-16 transition-all" />
            Join the Waitlist
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

// How it works
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Everyone Shares",
      description:
        "The whole family contributes through a dead-simple app. Photos, updates, little notes—all in one place.",
      icon: "📱",
    },
    {
      number: "02",
      title: "We Design It",
      description:
        "We turn your family's chaos into a beautiful, readable newspaper. Large print. Clear layout. No squinting required.",
      icon: "📰",
    },
    {
      number: "03",
      title: "They Get It",
      description:
        "A real, printed newspaper arrives. No charging, no updates, no 'click here'—just news from the people who matter most.",
      icon: "📬",
    },
  ];

  return (
    <motion.section
      id="how-it-works"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-8 scroll-mt-8"
    >
      <motion.div variants={fadeInUp} className="text-center mb-10">
        <span className="inline-block px-3 py-1 text-[0.65rem] tracking-[0.15em] uppercase bg-neutral-100 text-neutral-500 font-medium mb-3 rounded-full">
          How It Works
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold tracking-wide"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
        >
          Simple for You. Perfect for Them.
        </h2>
        <div className="w-24 h-1 bg-neutral-900 mx-auto mt-3" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step) => (
          <motion.div
            key={step.number}
            variants={fadeInUp}
            className="text-center px-6 py-4"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <div className="text-xs tracking-[0.2em] text-neutral-400 mb-2">STEP {step.number}</div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-bebas-neue)" }}>
              {step.title}
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// Globe section for global connection
function GlobalConnectionSection() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-8"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div variants={fadeInUp} className="order-2 md:order-1">
          <div className="relative h-[350px] md:h-[400px] bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden border border-neutral-200">
            <Globe className="opacity-90" />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="order-1 md:order-2">
          <span className="text-xs tracking-[0.2em] uppercase text-amber-600 font-medium">
            🌍 No Distance Too Far
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            Family Scattered? Paper Connects.
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Your daughter in Sydney. Your brother in London. Grandparents in their kitchen in Ohio.
            Distance means nothing when love arrives folded on the doorstep every month.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm text-neutral-600">
                Contributors from anywhere in the world
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm text-neutral-600">Delivered to any address</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm text-neutral-600">Timezone? What timezone?</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Stories preview
function StoriesPreviewSection() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-8"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div variants={fadeInUp}>
          <span className="text-xs tracking-[0.2em] uppercase text-amber-600 font-medium">
            ✨ Real-Time Updates
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            Stories Flow In. Magic Flows Out.
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Share a photo at breakfast. Add a caption at lunch. By month's end, it's all woven into
            a gazette worth keeping forever.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm text-neutral-600">No tech skills needed for recipients</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm text-neutral-600">Large, easy-to-read print</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm text-neutral-600">Designed for aging eyes and minds</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-lg">
            <div className="text-xs tracking-[0.15em] uppercase text-amber-600 mb-3 text-center font-medium">
              ✨ Concept preview
            </div>
            <FamilyContributionMarquee />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Family section
function FamilySection() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-8"
    >
      <div className="text-center">
        <motion.div variants={fadeInUp}>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            The Whole Crew. One Gazette.
          </h2>
          <p className="text-neutral-600 mt-3 max-w-xl mx-auto">
            Kids, cousins, that uncle who never calls—everyone can drop in a photo or story. One
            subscription covers unlimited family.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex justify-center mt-6">
          <AvatarListDemo />
        </motion.div>
      </div>
    </motion.section>
  );
}

// Testimonial/scenarios section
function TestimonialSection() {
  const scenarios = [
    {
      quote:
        "Imagine them lighting up when the Gazette arrives. Reading every page twice. Calling you to say they showed it to a friend at bingo.",
      person: "The daughter who lives three states away",
      icon: "💝",
    },
    {
      quote:
        "Picture him at breakfast, newspaper in hand—just like always. Except now it's his grandkids' faces, not strangers.",
      person: "The son caring for dad with memory loss",
      icon: "🏡",
    },
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-8"
    >
      <motion.div variants={fadeInUp} className="text-center mb-8">
        <span className="inline-block px-3 py-1 text-[0.65rem] tracking-[0.15em] uppercase bg-amber-100 text-amber-700 font-medium mb-3 rounded-full">
          Why We're Building This
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
        >
          It's Personal
        </h2>
        <div className="w-24 h-1 bg-neutral-900 mx-auto mt-3" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {scenarios.map((scenario) => (
          <motion.blockquote
            key={scenario.person}
            variants={fadeInUp}
            className="bg-gradient-to-br from-amber-50 to-white border border-neutral-200 p-6 md:p-8 relative"
          >
            <div className="absolute -top-4 left-6 text-4xl">{scenario.icon}</div>
            <p className="text-neutral-700 italic leading-relaxed pt-4 font-serif">
              "{scenario.quote}"
            </p>
            <footer className="mt-4 pt-4 border-t border-neutral-200">
              <span className="text-amber-600 text-sm font-bold">{scenario.person}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </motion.section>
  );
}

// Newspaper preview
function NewspaperPreview() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-8"
    >
      <motion.div variants={fadeInUp} className="text-center mb-8">
        <span className="inline-block px-3 py-1 text-[0.65rem] tracking-[0.15em] uppercase bg-neutral-100 text-neutral-500 font-medium mb-3 rounded-full">
          Sample
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
        >
          What They'll Actually Hold
        </h2>
        <p className="text-neutral-600 mt-2">Real paper. Real stories. Designed for real people.</p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="max-w-2xl mx-auto bg-[#f9f6f0] border-2 border-neutral-300 shadow-xl p-6 md:p-8 relative"
      >
        <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          Sample
        </div>

        <div className="text-center border-b-4 border-double border-neutral-400 pb-4 mb-4">
          <div className="text-xs tracking-[0.3em] text-neutral-500 mb-1">THE JOHNSON FAMILY</div>
          <h3 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-bebas-neue)" }}>
            FAMILY GAZETTE
          </h3>
          <div className="text-xs tracking-wider text-neutral-500 mt-1">
            December 2024 · Issue No. 7
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="md:col-span-2">
            <h4 className="font-bold text-xl mb-2 border-b border-neutral-300 pb-1">
              Emma Graduates Top of Her Class!
            </h4>
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-neutral-200 flex-shrink-0 flex items-center justify-center text-3xl">
                🎓
              </div>
              <p className="text-neutral-600 text-xs leading-relaxed">
                Our brilliant granddaughter Emma received her diploma with honors last Saturday. The
                whole family gathered to celebrate. She's off to university in September to study
                medicine—following in Grandad's footsteps!
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2 border-b border-neutral-300 pb-1">
              Tommy's Winning Goal
            </h4>
            <p className="text-neutral-600 text-xs leading-relaxed">
              Tommy scored the winning goal in Saturday's match! Coach says he's got real talent.
              We're all so proud.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-2 border-b border-neutral-300 pb-1">
              Mum's Apple Pie Lives On
            </h4>
            <p className="text-neutral-600 text-xs leading-relaxed">
              Lisa made your famous apple pie for Sunday dinner. Everyone agreed it was almost as
              good as yours! 🥧
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-neutral-300 text-center">
          <p className="text-xs text-neutral-500 italic">
            Made with love by your family · Grannie Gazette
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

// Roadmap section
function RoadmapSection() {
  const { openWaitlist } = useWaitlist();

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-8"
    >
      <motion.div variants={fadeInUp} className="text-center mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-[0.65rem] tracking-[0.15em] uppercase bg-amber-500 text-white font-medium mb-3 rounded-full">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          Building in the Open
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
        >
          The Roadmap
        </h2>
        <p className="text-neutral-600 mt-2 max-w-lg mx-auto">
          We're building this step by step. Join the waitlist to follow along.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch"
      >
        <PricingWrapper
          type="waves"
          colorClass="bg-amber-500"
          buttonText="Join Waitlist"
          onClick={openWaitlist}
          className="h-full min-h-[420px]"
        >
          <Heading>Coming First</Heading>
          <div className="text-4xl sm:text-5xl font-bold leading-none">
            Digital
            <br />
            PDFs
          </div>
          <Paragraph>
            Beautiful, print-ready PDFs you can download and print at home, at the library, or at
            any print shop. Same love, DIY delivery.
          </Paragraph>
        </PricingWrapper>

        <PricingWrapper
          type="crosses"
          colorClass="bg-neutral-800"
          buttonText="Get Early Access"
          onClick={openWaitlist}
          className="h-full min-h-[420px]"
        >
          <Heading>The Dream</Heading>
          <div className="text-4xl sm:text-5xl font-bold leading-none">
            Printed &
            <br />
            Delivered
          </div>
          <Paragraph>
            Professional printing. Monthly delivery. Right to their mailbox. You'll never have to
            think about it—just share and we handle the rest.
          </Paragraph>
        </PricingWrapper>
      </motion.div>
    </motion.section>
  );
}

// CTA section
function CTASection() {
  const { openWaitlist } = useWaitlist();

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12"
      id="waitlist"
    >
      <motion.div
        variants={fadeInUp}
        className="text-center bg-gradient-to-b from-amber-50 to-orange-50 border-2 border-neutral-200 p-8 md:p-12"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs tracking-[0.2em] uppercase bg-amber-500 text-white font-medium mb-4 rounded-full">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          Waitlist Open
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
        >
          Be Part of This
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto mb-8">
          We're not far from launch. Get on the list for early access, sneak peeks, and the best
          pricing when we go live.
        </p>

        <button
          type="button"
          onClick={openWaitlist}
          className="px-10 py-4 bg-neutral-900 text-white font-bold uppercase tracking-wider text-sm hover:bg-neutral-800 transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,0.2)]"
        >
          Join the Waitlist →
        </button>

        <p className="text-xs text-neutral-500 mt-4">No spam. Just the good stuff.</p>
      </motion.div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl px-4">
      <main>
        <div className="relative">
          <HeroSection />
          <NewspaperDivider />
          <HowItWorksSection />
          <NewspaperDivider />
          <GlobalConnectionSection />
          <NewspaperDivider />
          <StoriesPreviewSection />
          <NewspaperDivider />
          <FamilySection />
          <NewspaperDivider />
          <TestimonialSection />
          <NewspaperDivider />
          <NewspaperPreview />
          <NewspaperDivider />
          <RoadmapSection />
          <NewspaperDivider />
          <CTASection />

          <footer className="text-center py-8 border-t-2 border-neutral-200 mt-8">
            <p className="text-xs text-neutral-500 tracking-wider">
              © 2024 Grannie Gazette · Made with ♥ for families everywhere
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
