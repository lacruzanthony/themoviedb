import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const imageUrl = (poster_path: string, posterWidth = "w300") => {
  if (!poster_path) {
    return "/fallback.webp";
  }
  return `${process.env.IMAGE_BASE_URL}${posterWidth}${poster_path}`;
};

export const getPromiseSettledValue = <T>(
  result: PromiseSettledResult<T>
): T | null => {
  if (result.status === "fulfilled") {
    return result.value;
  }
  return null;
};
