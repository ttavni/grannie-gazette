import Waitlist from "./Waitlist";

export default function Header() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="container mx-auto max-w-5xl">
      {/* Top line with title */}
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <hr className="flex-1 border-black border-t-2 md:border-t-4" />
        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
          THE
        </span>
        <hr className="flex-1 border-black border-t-2 md:border-t-4" />
      </div>

      {/* Main title*/}
      <div className="flex flex-row justify-center items-center gap-1 py-4">
        <h1
          className="md:text-8xl sm:text-7xl text-6xl leading-[0.9] font-serif font-bold tracking-normal"
          style={{
            fontFamily: "var(--font-pt-serif), serif",
            fontWeight: 700,
            lineHeight: 0.85,
          }}
        >
          GRANNIE
          <br />
          GAZETTE
        </h1>
      </div>

      {/* Bottom line with subtitle */}
      <div className="mt-1 w-full border-t-2 border-b-2 md:border-t-4 md:border-b-4 border-black py-2 flex justify-between items-center gap-2">
        <span className="px-2 sm:px-4 shrink-0">
          <Waitlist />
        </span>
        <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-tight sm:tracking-widest px-2 sm:px-4 text-right">
          {currentDate}
        </span>
      </div>
    </header>
  );
}
