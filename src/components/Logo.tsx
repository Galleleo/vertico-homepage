import Image from "next/image";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: LogoProps) {
  const src = tone === "dark" ? "/images/logo-referenz.png" : "/images/logo-white.png";
  const width = tone === "dark" ? 700 : 1187;
  const height = tone === "dark" ? 280 : 557;

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
