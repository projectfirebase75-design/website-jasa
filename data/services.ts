export type Service = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  icon: string; // nama ikon lucide
};

export const services: Service[] = [
  {
    slug: "company-profile",
    title: "Website Company Profile",
    description:
      "Website representatif untuk memperkenalkan perusahaan, visi misi, layanan, dan kontak profesional.",
    features: ["Desain korporat", "Halaman profil & layanan", "Blog opsional", "SEO dasar"],
    icon: "Building2"
  },
  {
    slug: "toko-online",
    title: "Website Toko Online",
    description:
      "Katalog produk lengkap dengan keranjang, checkout, dan integrasi pembayaran.",
    features: ["Katalog produk", "Keranjang belanja", "Checkout", "Integrasi payment gateway"],
    icon: "ShoppingCart"
  },
  {
    slug: "restoran",
    title: "Website Restoran",
    description:
      "Website restoran modern dengan menu digital, galeri, reservasi, dan lokasi.",
    features: ["Menu digital", "Galeri foto", "Reservasi", "Google Maps"],
    icon: "UtensilsCrossed"
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    description:
      "Halaman fokus konversi untuk kampanye, produk, atau event dengan CTA kuat.",
    features: ["Single page fokus", "Copywriting persuasif", "Form lead", "Fast loading"],
    icon: "Rocket"
  },
  {
    slug: "sekolah",
    title: "Website Sekolah",
    description:
      "Website informasi sekolah, PPDB, berita, dan galeri kegiatan.",
    features: ["Profil sekolah", "Informasi PPDB", "Berita", "Galeri"],
    icon: "GraduationCap"
  },
  {
    slug: "booking",
    title: "Website Booking",
    description:
      "Sistem reservasi online untuk klinik, salon, hotel, atau jasa lainnya.",
    features: ["Kalender booking", "Notifikasi", "Manajemen jadwal", "Integrasi WhatsApp"],
    icon: "CalendarCheck"
  },
  {
    slug: "custom",
    title: "Website Custom",
    description:
      "Solusi web app sesuai kebutuhan bisnis Anda, dari dashboard hingga sistem internal.",
    features: ["Analisis kebutuhan", "Desain custom", "Full stack", "Maintenance"],
    icon: "Code2"
  }
];
