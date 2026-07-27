import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type Media =
  | { type: "image"; src: string; alt: string }
  | { type: "icon"; icon: ReactNode };

type ServiceCardProps = {
  href: string;
  title: string;
  description: string;
  media: Media;
};

export function ServiceCard({ href, title, description, media }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col border border-border rounded-[var(--radius-sharp)] overflow-hidden"
    >
      <div className="relative h-48 w-full bg-surface-alt flex items-center justify-center">
        {media.type === "image" ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="text-primary h-20 w-20">{media.icon}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-6 border-t-2 border-transparent group-hover:border-primary transition-colors">
        <h3 className="text-xl">{title}</h3>
        <p className="font-body text-sm text-ink">{description}</p>
      </div>
    </Link>
  );
}
