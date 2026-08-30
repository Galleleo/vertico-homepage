import Image from "next/image";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: LogoProps) {
  const src = tone === "dark" ? "/images/vertico-logo.png" : "/images/vertico-logo-white.png";
  const width = 3799;
  const height = 1322;

  return (
    <Image
      src={src}
      alt="Vertico Logo"
      width={width}
      height={height}
      className={className}
    />
  );
}
