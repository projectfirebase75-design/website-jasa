export type PortfolioItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  thumbnail?: string; // path di /public atau URL eksternal
};

export const portfolio: PortfolioItem[] = [
  {
    id: "chery-ibrahim",
    name: "Chery Ibrahim",
    category: "Website Personal / Company Profile",
    description:
      "Proyek website profil personal/profesional yang telah selesai dikerjakan. Kunjungi langsung untuk melihat hasilnya.",
    url: "https://cheryibrahim.com/"
  }
];
