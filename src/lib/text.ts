export function clampTitle(t: string, fallback: string): string {
  return t.length <= 60 ? t : fallback;
}

export function clampMeta(m: string): string {
  return m.length <= 155 ? m : m.slice(0, 152).replace(/[,;:\s]+\S*$/, "") + "...";
}