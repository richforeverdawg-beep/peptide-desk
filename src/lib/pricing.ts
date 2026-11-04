import type { Place } from "../data/places";

export type Band = { low: string; high: string; compact: string };

export function band(lowEur: number, highEur: number, place: Place): Band {
  const f = place.priceFactor;
  const fmt = (n: number) =>
    new Intl.NumberFormat(place.locale, {
      style: "currency",
      currency: place.currencyCode,
      maximumFractionDigits: 0,
    }).format(n * f);
  return {
    low: fmt(lowEur),
    high: fmt(highEur),
    compact: fmt(lowEur) + " to " + fmt(highEur),
  };
}

export function deliveryWindow(place: Place): string {
  return place.daysMin + " to " + place.daysMax + " working days";
}

export function deliveryShort(place: Place): string {
  return place.daysMin + "-" + place.daysMax + " days";
}