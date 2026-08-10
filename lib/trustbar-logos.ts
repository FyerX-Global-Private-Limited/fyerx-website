export type TrustBarLogo = {
  name: string;
  img: string;
  scale?: number;
};

/** All client logos under /public/trustbarlogos/trimmed */
export const TRUSTBAR_LOGOS: TrustBarLogo[] = [
  { name: "Adro", img: "/trustbarlogos/trimmed/adro.png" },
  { name: "Ambience", img: "/trustbarlogos/trimmed/ambience.png" },
  { name: "Avekshaa", img: "/trustbarlogos/trimmed/avekshaa.png" },
  { name: "Blummber", img: "/trustbarlogos/trimmed/blummber.png" },
  { name: "Bullsmart", img: "/trustbarlogos/trimmed/bullsmart.png" },
  { name: "Cinepebble", img: "/trustbarlogos/trimmed/cinipebble.png" },
  { name: "Codeus", img: "/trustbarlogos/trimmed/codeus.png" },
  { name: "Digitathya", img: "/trustbarlogos/trimmed/digitathya.png" },
  { name: "Dyashin", img: "/trustbarlogos/trimmed/dyashin.png" },
  { name: "Kaypee Space", img: "/trustbarlogos/trimmed/kaypeespace.png" },
  { name: "Multimedia", img: "/trustbarlogos/trimmed/multimedia.png" },
  { name: "Onroadz", img: "/trustbarlogos/trimmed/onroad.png" },
  { name: "Orihiro", img: "/trustbarlogos/trimmed/orihiro.png" },
  { name: "Saraogi", img: "/trustbarlogos/trimmed/sarogi.png" },
  { name: "Silvercross", img: "/trustbarlogos/trimmed/silvercross.png" },
  { name: "Solv", img: "/trustbarlogos/trimmed/solv.png" },
  { name: "SpinMatch", img: "/trustbarlogos/trimmed/spinmatch.png" },
  { name: "WeGoFin", img: "/trustbarlogos/trimmed/wegofin.png" },
  { name: "Workdays", img: "/trustbarlogos/trimmed/workdays.png" },
  { name: "Zassets", img: "/trustbarlogos/trimmed/zassets.png" },
];

export function splitTrustBarLogos(rows = 2): TrustBarLogo[][] {
  const chunkSize = Math.ceil(TRUSTBAR_LOGOS.length / rows);
  return Array.from({ length: rows }, (_, i) =>
    TRUSTBAR_LOGOS.slice(i * chunkSize, (i + 1) * chunkSize)
  );
}
