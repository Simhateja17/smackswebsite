"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LogoMark = ({ size = 30 }: { size?: number }) => (
  <span className="nav-logo-mark" style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24" width={size * 0.55} height={size * 0.55} fill="#fff" aria-hidden="true">
      <path d="M12 2c2.2 3.6 6 5.5 6 10.2 0 3.4-2.7 6.1-6 6.1s-6-2.7-6-6.1c0-2.6 1.4-3.7 2.4-5.6.3 1.5 1.1 2.4 2 2.4 0-2 .8-3.8 1.6-7zM7 21h10v1.2H7z"/>
    </svg>
  </span>
);

export default function Navbar() {
  const pathname = usePathname();
  const link = (href: string, label: string) => {
    const active = pathname === href || pathname.startsWith(href + "/");
    return (
      <Link href={href} className={active ? "active" : ""}>
        {label}
      </Link>
    );
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <LogoMark size={30} />
          <span>SmackCheck</span>
        </Link>
        <div className="nav-links">
          {link("/features", "Features")}
          {link("/how-it-works", "How it works")}
          {link("/download", "Download")}
          {link("/blog", "Blog")}
          {link("/about", "About")}
        </div>
        <div className="nav-cta">
          <Link href="/download" className="btn btn-ghost btn-sm">Sign in</Link>
          <Link href="/download" className="btn btn-primary btn-sm">Get the app</Link>
        </div>
      </div>
    </nav>
  );
}
