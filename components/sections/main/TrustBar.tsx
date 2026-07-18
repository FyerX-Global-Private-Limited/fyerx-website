const logos = [
  "WeGoFin", "Sayyam", "Adro", "Saraogi", "Codeus", "Bullsmart", "Onroadz",
  "KPRM", "Kaypee Space", "Avekshaa", "Orihiro", "Hoshitry", "TrnDigital",
  "Digitathya", "Cinepebble", "WinExch", "SpinMatch",
];

export default function TrustBar() {
  return (
    <section className="w-full bg-white py-4 lg:py-6 font-calibri overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2
          className="text-black"
          style={{
            textAlign: "center",
            textTransform: "none",
            marginBottom: "1.25rem",
            fontSize: "1.125rem",
            lineHeight: "1.4",
          }}
        >
          Organisations That Have Partnered With Us
        </h2>
      </div>

      <div
        className="group relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        style={{ marginTop: "60px" }}
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
              key={`${logo}-${i}`}
              className="shrink-0 flex items-center justify-center text-center font-bold tracking-tight text-black w-[calc((100vw-1.5rem)/2)] sm:w-[calc((100vw-3rem)/3)] md:w-[calc((100vw-4.5rem)/4)] lg:w-[calc((100vw-7.5rem)/6)]"
              style={{
                padding: "0 1rem",
              }}
            >
              <span className="text-sm sm:text-base lg:text-lg leading-snug">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
