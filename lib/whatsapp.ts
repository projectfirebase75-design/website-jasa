import { siteConfig } from "@/data/site";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.waNumber}?text=${encoded}`;
}

export const defaultMessage =
  "Halo, saya tertarik menggunakan jasa pembuatan website. Saya ingin berkonsultasi mengenai paket dan kebutuhan website saya.";

export function serviceMessage(serviceTitle: string): string {
  return `Halo, saya tertarik dengan layanan "${serviceTitle}". Mohon info lebih lanjut mengenai paket dan prosesnya.`;
}

export function planMessage(planName: string, price: string): string {
  return `Halo, saya tertarik dengan paket "${planName}" (${price}). Mohon informasi detail mengenai paket tersebut.`;
}

export function contactMessage(data: {
  name: string;
  phone: string;
  email: string;
  type: string;
  budget: string;
  message: string;
}): string {
  return [
    "Halo, saya ingin mengajukan permintaan penawaran.",
    "",
    `Nama: ${data.name}`,
    `WhatsApp: ${data.phone}`,
    `Email: ${data.email}`,
    `Jenis Website: ${data.type}`,
    `Anggaran: ${data.budget}`,
    "",
    "Deskripsi kebutuhan:",
    data.message
  ].join("\n");
}
