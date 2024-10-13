import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "../components/Navigation/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SavvyMoney test",
  description: "SavvyMoney test application",
};
 
export const viewport: Viewport = {
  themeColor: 'black',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col items-center w-full h-dvh">
          <Navigation />

          <main className="grow p-2 flex flex-col justify-center content-center items-center w-full md:mt-20">
            <div className="w-full md:w-[36rem]">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
