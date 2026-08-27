export type TrustBarLogo = {
  name: string;
  img?: string;
  scale?: number;
  /** Text badge instead of a logo image (e.g. "150+ Clients"). */
  badge?: boolean;
};

/** All client logos under /public/trustbarlogos/trimmed */
export const TRUSTBAR_LOGOS: TrustBarLogo[] = [
  { name: "Adro", img: "/trustbarlogos/trimmed/adro.webp" },
  { name: "Ambience", img: "/trustbarlogos/trimmed/ambience.webp" },
  { name: "Avekshaa", img: "/trustbarlogos/trimmed/avekshaa.webp" },
  { name: "Blummber", img: "/trustbarlogos/trimmed/blummber.webp" },
  { name: "Bullsmart", img: "/trustbarlogos/trimmed/bullsmart.webp" },
  { name: "Cinepebble", img: "/trustbarlogos/trimmed/cinipebble.webp" },
  { name: "Codeus", img: "/trustbarlogos/trimmed/codeus.webp" },
  { name: "Digitathya", img: "/trustbarlogos/trimmed/digitathya.webp" },
  { name: "Dyashin", img: "/trustbarlogos/trimmed/dyashin.webp" },
  { name: "Kaypee Space", img: "/trustbarlogos/trimmed/kaypeespace.webp" },
  { name: "Z-Assets", img: "/trustbarlogos/trimmed/zassets.webp" },
  { name: "Onroadz", img: "/trustbarlogos/trimmed/onroad.webp" },
  { name: "Orihiro", img: "/trustbarlogos/trimmed/orihiro.webp" },
  { name: "Saraogi", img: "/trustbarlogos/trimmed/sarogi.webp" },
  { name: "Silvercross", img: "/trustbarlogos/trimmed/silvercross.webp" },
  { name: "Solv", img: "/trustbarlogos/trimmed/solv.webp" },
  { name: "SpinMatch", img: "/trustbarlogos/trimmed/spinmatch.webp" },
  { name: "WeGoFin", img: "/trustbarlogos/trimmed/wegofin.webp" },
  { name: "Workdays", img: "/trustbarlogos/trimmed/workdays.webp" },
  { name: "150+ Clients", badge: true },
];

export function splitTrustBarLogos(rows = 2): TrustBarLogo[][] {
  const chunkSize = Math.ceil(TRUSTBAR_LOGOS.length / rows);
  return Array.from({ length: rows }, (_, i) =>
    TRUSTBAR_LOGOS.slice(i * chunkSize, (i + 1) * chunkSize)
  );
}
