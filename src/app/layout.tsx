import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./layouts/Header";
import Link from "next/link";

import Footer from "./layouts/Footer";
import SubNav from "./components/SubNav";
import SocialMediaLinks from "./components/SocialMediaLinks";
import AppProvider from "@/context/app_context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donmanuel | Personal Portfolio",
  description: "Domanuel ui/ux portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Header />
          <SubNav />
          <section className="flex  justify-between items-start relative pt-7">
            <SocialMediaLinks />

            <div className="bg-main-pattern max-w-[1080px] bg-cover mx-auto px-4 py-16">
              {children}
            </div>

            <div className="hidden flex-col items-center gap-10  mt-20  right-8 lg:flex w-[15rem]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="33"
                  viewBox="0 0 2 33"
                  fill="none"
                >
                  <path d="M1 33V0" stroke="white" />
                </svg>
              </div>

              <Link href="" className="-rotate-90 w-24">
                Contact me
              </Link>
            </div>
          </section>
        </AppProvider>

        <Footer />
      </body>
    </html>
  );
}
