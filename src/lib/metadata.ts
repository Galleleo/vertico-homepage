import type { Metadata } from "next";
import { COMPANY } from "./site-data";

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const title =
    input.path === "/" ? COMPANY.name : `${input.title} | ${COMPANY.name}`;

  return {
    title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
  };
}
