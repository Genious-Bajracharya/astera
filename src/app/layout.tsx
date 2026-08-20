import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import Navbar from "@/components/common/nav/navbar";
import Footer from "@/components/common/footer/footer";
import "./globals.css";
import { BookmarkProvider } from "@/context/bookmarkContext";
import { CompareProvider } from "@/context/compareContext";
import { BuyProvider } from "@/context/buycontext";
import { OffplanProvider } from "@/context/offplanContext";
import Loading from "./loading";
import { Suspense } from "react";
import Whatsapp from "@/components/whatsapp";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astera",
  description: "Astera Real State",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${outfit.variable} antialiased`}>
        <Navbar />
        <BookmarkProvider>
          <CompareProvider>
            <BuyProvider>
              <OffplanProvider>
                <Toaster position="top-center" reverseOrder={false} />
                {/* <Suspense fallback={<Loading />}> */}
                {children}
                {/* </Suspense> */}
                <Whatsapp />
              </OffplanProvider>
            </BuyProvider>
          </CompareProvider>
        </BookmarkProvider>
        <Footer />
      </body>
    </html>
  );
}
