export function RecaptchaLegalNote({ className }: { className?: string }) {
  return (
    <p
      className={
        className ??
        "mx-auto mt-1.5 max-w-[320px] text-center text-[10px] leading-[1.55] text-[#676879]"
      }
    >
      This site is protected by reCAPTCHA and the Google{" "}
      <a
        href="https://policies.google.com/privacy"
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>{" "}
      and{" "}
      <a
        href="https://policies.google.com/terms"
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
}
