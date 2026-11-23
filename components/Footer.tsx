import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container-max grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold text-white">{siteConfig.name}</h3>
          <p className="mt-3 text-sm leading-relaxed">{siteConfig.description}</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/layanan" className="hover:text-white">Layanan</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="/harga" className="hover:text-white">Harga</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Perusahaan</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/tentang" className="hover:text-white">Tentang Kami</Link></li>
            <li><Link href="/testimoni" className="hover:text-white">Testimoni</Link></li>
            <li><Link href="/cara-pemesanan" className="hover:text-white">Cara Pemesanan</Link></li>
            <li><Link href="/kontak" className="hover:text-white">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Hubungi</h4>
          <p className="text-sm">Email: {siteConfig.email}</p>
          <p className="text-sm">Lokasi: {siteConfig.address}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max py-4 text-xs text-slate-400">
          © {new Date().getFullYear()} {siteConfig.name}. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
