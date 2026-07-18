import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({ hover = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-100 bg-white p-6",
        hover && "hover:shadow-md transition-shadow cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
