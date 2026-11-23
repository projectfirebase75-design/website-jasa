export type Plan = {
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  popular?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Basic",
    price: "Rp299.000",
    features: ["1 halaman", "Desain template", "Responsif", "Free domain 1 tahun", "Support 7 hari"],
    cta: "Pilih Basic"
  },
  {
    name: "Standard",
    price: "Rp599.000",
    features: ["3 halaman", "Desain semi custom", "Responsif", "Free domain 1 tahun", "SEO dasar", "Support 14 hari"],
    cta: "Pilih Standard"
  },
  {
    name: "Premium",
    price: "Rp999.000",
    popular: true,
    features: ["5 halaman", "Desain custom", "Responsif", "Free domain 1 tahun", "SEO lengkap", "Blog", "Support 30 hari"],
    cta: "Pilih Premium"
  },
  {
    name: "Business",
    price: "Rp3.000.000",
    features: ["10 halaman", "Desain premium", "Responsif", "Free domain 1 tahun", "SEO + Analytics", "Blog + CMS", "Support 60 hari"],
    cta: "Pilih Business"
  },
  {
    name: "Custom",
    price: "Hubungi Kami",
    priceNote: "Sesuai kebutuhan",
    features: ["Halaman sesuai kebutuhan", "Desain fully custom", "Integrasi API", "Dashboard admin", "Maintenance bulanan"],
    cta: "Konsultasi Custom"
  }
];
