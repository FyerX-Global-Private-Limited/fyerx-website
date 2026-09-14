import Image from "next/image";

const FORM_AVATARS_SRC = "/images/main/section12.webp";

/** Team avatar strip used on top of every contact form card. */
export function ContactFormAvatars() {
  return (
    <div className="absolute -top-[22px] left-1/2 z-10 -translate-x-1/2">
      <Image
        src={FORM_AVATARS_SRC}
        alt=""
        width={904}
        height={200}
        unoptimized
        className="h-9 w-auto select-none sm:h-11"
        draggable={false}
      />
    </div>
  );
}
