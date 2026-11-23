const stats = [
  { label: "Proyek Selesai", value: "—" },
  { label: "Klien Aktif", value: "—" },
  { label: "Tahun Pengalaman", value: "—" },
  { label: "Rating", value: "—" }
];

// CATATAN: Nilai statistik dikosongkan (—) karena belum ada data nyata.
// Isi dengan angka yang dapat diverifikasi sebelum dipublikasikan.
export default function StatsSection() {
  return (
    <section className="bg-navy-900 py-12">
      <div className="container-max grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-extrabold text-white">{s.value}</p>
            <p className="mt-1 text-sm text-slate-300">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
