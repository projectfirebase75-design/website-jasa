"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buildWhatsAppUrl, defaultMessage } from "@/lib/whatsapp";

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/harga", label: "Harga Paket" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/cara-pemesanan", label: "Cara Pemesanan" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold text-navy-900">
          {siteConfig.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-800 hover:text-accent transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={buildWhatsAppUrl(defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-primary text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          Konsultasi WhatsApp
        </a>

        <button
          type="button"
          aria-label="Buka menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="container-max flex flex-col py-4 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-navy-800 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppUrl(defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Konsultasi WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
