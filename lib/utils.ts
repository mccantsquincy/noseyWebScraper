import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractPrice(...elements: any) {
  for(const element of elements) {
    const priceText = element.text().trim();

    if(priceText) return priceText.replace(/[^0-9.]/g, '');
  }

  return '';
}

export function extractCurrency(element: any) {
  const currencyText = element.text().slice(0, 1);
  return currencyText ? currencyText : '';
}
