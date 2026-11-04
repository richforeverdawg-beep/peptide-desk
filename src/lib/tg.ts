export const HANDLE = "donjuanjodyy";
export const CHANNEL = "ThePeptideDesk";
export const SITE = "https://peptidesontelegram.com";

export function tg(src: string, msg: string): string {
  const text = encodeURIComponent(msg);
  return "https://t.me/" + HANDLE + "?text=" + text + "&src=" + encodeURIComponent(src);
}

export function tgPlain(): string {
  return "https://t.me/" + HANDLE;
}

export function orderLink(src: string, label: string): string {
  return tg(src, "Hi - " + label + ". Source page: " + src);
}

export function priceLink(src: string, label: string): string {
  return tg(src, "Price for " + label + " please. Source page: " + src);
}