import Link from "next/link";
import { consultingNav } from "@/lib/constants";

export default function ConsultingFooter() {
  return (
    <footer className="border-t border-green-50 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-bold text-xl tracking-tight">
            Fyerx <span className="text-green-700">Consulting</span>
          </span>
          <p className="text-sm text-zinc-500 mt-1">
            Professional consulting for growth and clarity.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {consultingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-500 hover:text-green-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} Fyerx Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
