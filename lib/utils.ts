import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const imageUrl = (poster_path: string, posterWidth = "w300") => {
  return `${process.env.IMAGE_BASE_URL}${posterWidth}${poster_path}`;
};
