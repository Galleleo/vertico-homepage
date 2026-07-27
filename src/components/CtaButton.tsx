import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function CtaButton({ href, children }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className="inline-block bg-primary hover:bg-primary-hover text-on-dark font-body px-6 py-3 rounded-[var(--radius-sharp)] transition-colors"
    >
      {children}
    </Link>
  );
}
