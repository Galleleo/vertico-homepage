import { BASE_PATH } from "./base-path";

export default function imageLoader({ src }: { src: string }) {
  return `${BASE_PATH}${src}`;
}
