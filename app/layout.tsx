import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const aileron = localFont({
  src: [
    {
      path: "../public/aileron/Aileron-UltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/aileron/Aileron-Thin.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/aileron/Aileron-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/aileron/Aileron-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/aileron/Aileron-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/aileron/Aileron-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/aileron/Aileron-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/aileron/Aileron-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-aileron",
});

const consolas = localFont({
  src: [
    {
      path: "../public/consolas/Consolas.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/consolas/Consolas-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-consolas",
});

export const metadata: Metadata = {
  title: "AETHERWEB",
  description: "Building 21st century websites for small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden" id="home">
      <body
        className={`${aileron.variable} ${roboto.variable} ${consolas.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
