import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TMDB",
  description: "TMDB copy to showcase Next.js features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <div className="bg-background">
            <div className="border-t">
              <Menubar className="flex justify-center rounded-none border-b border-none px-2 lg:px-4">
                <MenubarMenu>
                  <MenubarTrigger className="font-bold">TMDB</MenubarTrigger>
                  <MenubarContent>
                    <Link href={"/"}>
                      <MenubarItem>Home</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </Providers>
  );
}
