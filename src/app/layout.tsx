import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehedi Hasan | Full Stack Web Developer",
  description:
    "Professional portfolio of Mehedi Hasan, a Full Stack Web Developer specializing in PERN/MERN stack, SaaS, and complex logic solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ToastContainer position="top-right" autoClose={2000} />
        {children}
      </body>
    </html>
  );
}