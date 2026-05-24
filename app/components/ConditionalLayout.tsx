"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPasswordPage = pathname === "/password";

  return (
    <>
      {!isPasswordPage && <Navbar />}
      {children}
      {!isPasswordPage && <Footer />}
    </>
  );
}
