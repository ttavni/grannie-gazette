import Image from "next/image";

export default function Header() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="container mx-auto max-w-3xl px-4 sm:px-6 py-6 md:py-12">
      {/* Top section with lines and THE */}
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <div className="flex-1 h-[2px] md:h-[3px] bg-black"></div>
        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
          THE
        </span>
        <div className="flex-1 h-[2px] md:h-[3px] bg-black"></div>
      </div>

      {/* Main title with grannie image */}
      <div className="flex flex-row items-center gap-1 py-4">
        <Image src="/grannie.png" alt="Grannie illustration" width={100} height={100} />
        <h1
          className="md:text-9xl sm:text-8xl text-7xl leading-[0.9] font-serif font-bold tracking-normal"
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
      <div className="border-t-2" />
    </header>
  );
}
