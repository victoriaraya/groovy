import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Josefin_Sans, Lobster } from "next/font/google";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { Providers } from "./providers";
import { auth } from "@clerk/nextjs";

const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lobster",
  weight: "400",
});

const josephin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josephin-sans",
  weight: ["700", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Groovy",
  description:
    "Love music? Discover new songs and artists, find shows, and learn about artists all in one place.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();
  let href = userId ? "/profile" : "/new-user";

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={josephin_sans.className}>
          <Providers>
            <header
              className={`flex-1 flex-row text-center ${lobster.className} text-4xl py-2 bg-zinc-700 text-white`}
            >
              <span className="justify-center">
                <Link href="/">Groovy</Link>
              </span>
              <span className="flex justify-end -mt-2 mr-3 mb-1 pb-1 lg:pb-0 sm:mb-0 lg:-mt-9 lg:mr-4">
                <Link href={href}>
                  <CgProfile />
                </Link>
              </span>
            </header>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
