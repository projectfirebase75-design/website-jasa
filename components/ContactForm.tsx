"use client";

import { useState } from "react";
import { buildWhatsAppUrl, contactMessage } from "@/lib/whatsapp";
import { Send } from "lucide-react";

const websiteTypes = [
  "Company Profile",
  "Toko Online",
  "Restoran",
  "Landing Page",
  "Sekolah",
  "Booking",
  "Custom"
];

const budgets = [
  "< Rp500.000",
  "Rp500.000 – Rp1.000.000",
  "Rp1.000.000 – Rp2.000.000",
  "> Rp2.000.000"
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: websiteTypes[0],
    budget: budgets[0],
    message: ""
  });
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (form.name.trim().length < 2) {
      setError("Nama minimal 2 karakter.");
      return;
    }
    if (!/^\+?\d{8,15}$/.test(form.phone.replace(/[\s-]/g, ""))) {
      setError("Nomor WhatsApp tidak valid (8–15 digit).");
      return;
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Format email tidak valid.");
      return;
    }
    if (form.message.trim().length < 10) {
      setError("Deskripsi kebutuhan minimal 10 karakter.");
      return;
    }

    const url = buildWhatsAppUrl(contactMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-navy-900">Nama *</label>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-900">Nomor WhatsApp *</label>
          <input
            required
            inputMode="tel"
            placeholder="08xxxxxxxxxx"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-900">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-900">Jenis Website</label>
          <select
            value={form.type}
            onChange={(e) => update("type", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-accent focus:outline-none"
          >
            {websiteTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-900">Anggaran</label>
          <select
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-accent focus:outline-none"
          >
            {budgets.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy-900">Deskripsi Kebutuhan *</label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-accent focus:outline-none"
        />
      </div>

      {error && (
        <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary w-full">
        <Send className="h-4 w-4" />
        Kirim ke WhatsApp
      </button>
      <p className="text-xs text-slate-500">
        Formulir ini tidak menyimpan data ke database. Pesan akan diteruskan ke WhatsApp Anda.
      </p>
    </form>
  );
        }
