const logos = [
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

export default function TrustBar() {
  return (
    <section
      className="w-full bg-white px-6 py-4 sm:px-10 lg:px-16 lg:py-6 overflow-hidden"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2
          className="text-black"
          style={{
            textAlign: "center",
            textTransform: "none",
            marginBottom: "2.5rem",
            fontSize: "1.125rem",
            lineHeight: "1.4",
          }}
        >
          Organisations That Have Partnered With Us
        </h2>
      </div>

      <div
        className="group relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        style={{ marginTop: "10px" }}
      >
        <div
          className="animate-marquee group-hover:[animation-play-state:paused] flex items-center gap-x-14 sm:gap-x-16 lg:gap-x-20"
          style={{
            width: "max-content",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 flex items-center justify-center px-3 h-4 sm:h-5 lg:h-6"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
