import Image, { type ImageProps } from "next/image";
import { encodePublicSrc } from "@/lib/public-src";

/** next/image wrapper that encodes spaces and `&` in public paths. */
export function PublicImage({ src, unoptimized, ...props }: ImageProps) {
  const nextSrc = typeof src === "string" ? encodePublicSrc(src) : src;
  const needsEncode =
    typeof src === "string" && /[\s&()]/.test(src);
  return <Image src={nextSrc} unoptimized={needsEncode || unoptimized} {...props} />;
}
