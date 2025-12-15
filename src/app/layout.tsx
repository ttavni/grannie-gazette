import Header from "@/components/Header";
import { WaitlistModal } from "@/components/Waitlist";
import { WaitlistProvider } from "@/components/WaitlistContext";
import type { Metadata } from "next";
import { Bebas_Neue, PT_Serif } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Grannie Gazette | Family Newspapers for Care Home Residents",
  description:
    "Transform your family's photos and stories into a beautiful printed newspaper for elderly loved ones. Perfect for grandparents and those with dementia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ptSerif.variable} ${bebasNeue.variable} antialiased`}>
      <body>
        <WaitlistProvider>
          <div className="flex flex-col min-h-screen items-center justify-center">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
          <WaitlistModal />
        </WaitlistProvider>
      </body>
    </html>
  );
}
