const logos = [
  { name: "WeGoFin" },
  { name: "Sayyam" },
  { name: "Adro", img: "/avatar/adro.webp" },
  { name: "Saraogi" },
  { name: "Codeus" },
  { name: "Bullsmart", img: "/avatar/bullsmart.png" },
  { name: "Onroadz", img: "/avatar/onroad.png" },
  { name: "KPRM" },
  { name: "Kaypee Space" },
  { name: "Avekshaa", img: "/avatar/avekshaa.png" },
  { name: "Orihiro" },
  { name: "Hoshitry" },
  { name: "TrnDigital" },
  { name: "Digitathya", img: "/avatar/digitathya.png" },
  { name: "Cinepebble" },
  { name: "WinExch" },
  { name: "SpinMatch" },
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
          className="animate-marquee group-hover:[animation-play-state:paused] flex items-center"
          style={{
            columnGap: "1.5rem",
            width: "max-content",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 flex items-center justify-center text-center font-bold tracking-tight text-black w-[calc((100vw-1.5rem)/2)] sm:w-[calc((100vw-3rem)/3)] md:w-[calc((100vw-4.5rem)/4)] lg:w-[calc((100vw-7.5rem)/6)]"
              style={{
                padding: "0 1rem",
              }}
            >
              {logo.img ? (
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="h-6 w-auto max-w-full object-contain sm:h-7 lg:h-8"
                />
              ) : (
                <span className="text-sm sm:text-base lg:text-lg leading-snug">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
