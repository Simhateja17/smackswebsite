import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact  SmackCheck",
  description: "Support, partnerships, and press inquiries for SmackCheck.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
