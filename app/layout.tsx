import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const metadata: Metadata = {
  title:
    "KTL | Empowering Business Growth Through Expert Web Application Development",
  description:
    "Freelance web developer dedicated to crafting cutting-edge solutions for small businesses. Elevate your online presence with innovative designs and seamless functionality. Let's build your success together.",
  keywords: [
    "web developer",
     "web design",
     "website design",
     "web development",
     "web designer near me",
     "Triad, NC",
     "Greensboro, NC",
     "Asheboro, NC",
     "North Carolina",
     "mobile website designer",
  ],
  metadataBase: new URL("https://ktlweb.dev"),
};
export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div className="flex h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Providers>{children}</Providers>
          </main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
