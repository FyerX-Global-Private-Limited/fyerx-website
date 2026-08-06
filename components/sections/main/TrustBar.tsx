const logos: { name: string; img: string; scale?: number }[] = [
  { name: "Adro", img: "/trustbarlogos/trimmed/adro.png" },
  { name: "Ambience", img: "/trustbarlogos/trimmed/ambience.png" },
  { name: "Avekshaa", img: "/trustbarlogos/trimmed/avekshaa.png" },
  { name: "Blummber", img: "/trustbarlogos/trimmed/blummber.png" },
  { name: "Bullsmart", img: "/trustbarlogos/trimmed/bullsmart.png" },
  { name: "Cinepebble", img: "/trustbarlogos/trimmed/cinipebble.png" },
  { name: "Codeus", img: "/trustbarlogos/trimmed/codeus.png" },
  { name: "Digitathya", img: "/trustbarlogos/trimmed/digitathya.png" },
  { name: "TrnDigital", img: "/trustbarlogos/trndigital.png", scale: 1.65 },
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

const LOGO_SLOT =
  "flex h-10 w-28 shrink-0 items-center justify-center p-2 sm:h-12 sm:w-36 sm:p-3 md:w-40";
const LOGO_IMG =
  "block h-full w-full max-h-6 max-w-[6rem] object-contain object-center sm:max-h-7 sm:max-w-[7.5rem]";

export default function TrustBar() {
  return (
    <section
      className="home-section w-full overflow-hidden bg-white"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div className="section-shell section-shell--wide">
        <div className="section-header section-header--center">
          <h2 className="section-heading section-heading--sm text-black">
            Organisations That Have{" "}
            <span className="brand-gradient-text">Partnered With Us</span>
          </h2>
        </div>

        <div className="section-body group relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-x-6 group-hover:[animation-play-state:paused] sm:gap-x-8">
            {[...logos, ...logos].map((logo, i) => (
              <div key={`${logo.name}-${i}`} className={LOGO_SLOT}>
                <img
                  src={logo.img}
                  alt={logo.name}
                  className={LOGO_IMG}
                  loading="lazy"
                  style={
                    logo.scale
                      ? { transform: `scale(${logo.scale})`, transformOrigin: "center" }
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
