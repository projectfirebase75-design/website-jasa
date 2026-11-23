export type Testimonial = {
  id: string;
  name: string;
  role: string;
  message: string;
  isPlaceholder?: boolean;
};

// CATATAN: Semua data di bawah ini adalah PLACEHOLDER.
// Ganti dengan testimoni asli dari klien Anda sebelum dipublikasikan.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Nama Klien",
    role: "Pemilik Usaha",
    message:
      "[Placeholder] Ulasan pelanggan asli akan ditampilkan di sini setelah dikonfirmasi oleh klien.",
    isPlaceholder: true
  },
  {
    id: "t2",
    name: "Nama Klien",
    role: "Founder",
    message:
      "[Placeholder] Ulasan pelanggan asli akan ditampilkan di sini setelah dikonfirmasi oleh klien.",
    isPlaceholder: true
  },
  {
    id: "t3",
    name: "Nama Klien",
    role: "Manajer",
    message:
      "[Placeholder] Ulasan pelanggan asli akan ditampilkan di sini setelah dikonfirmasi oleh klien.",
    isPlaceholder: true
  }
];
