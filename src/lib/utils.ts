// Utilitário para combinar classes CSS com suporte a Tailwind e classes condicionais
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Função que une classes utilizando clsx e resolve conflitos do Tailwind com twMerge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
