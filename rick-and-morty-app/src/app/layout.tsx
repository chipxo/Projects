import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import BG from "@public/bg-img.jpg";
import Footer from "@/components/Footer";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Rick and Morty test app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ibm.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Image
            src={BG}
            alt={"background image"}
            className="fixed inset-0 -z-10 h-full object-cover blur-sm"
          />

          <header className="sticky top-0 z-10">
            <NavBar />
          </header>

          {children}

          <div className="fixed bottom-4 right-4 z-[10]">
            <ThemeToggle />
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
