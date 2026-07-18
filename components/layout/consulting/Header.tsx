import Link from "next/link";
import { consultingNav } from "@/lib/constants";

export default function ConsultingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/consulting" className="font-bold text-xl tracking-tight">
          Fyerx <span className="text-green-700">Consulting</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {consultingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 hover:text-green-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/consulting/book-session"
          className="rounded-full bg-green-700 text-white px-5 py-2 text-sm font-medium hover:bg-green-800 transition-colors"
        >
          Book a Session
        </Link>
      </div>
    </header>
  );
}
