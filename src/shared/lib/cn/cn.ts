interface Mods {
  [key: string]: boolean | undefined;
}

export function cn(
  cls: string,
  additional: (string | undefined)[] = [],
  mods: Mods = {},
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([key]) => key),
  ].join(' ');
}
