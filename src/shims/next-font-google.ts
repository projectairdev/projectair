export interface FontOptions {
  subsets?: string[];
  variable?: string;
  weight?: string | string[];
  display?: string;
}

export function Outfit(options?: FontOptions) {
  const variable = options?.variable || '--font-display';
  return {
    variable,
    className: 'font-display',
    style: { fontFamily: `var(${variable}, "Outfit", sans-serif)` },
  };
}

export function Plus_Jakarta_Sans(options?: FontOptions) {
  const variable = options?.variable || '--font-sans';
  return {
    variable,
    className: 'font-sans',
    style: { fontFamily: `var(${variable}, "Plus Jakarta Sans", sans-serif)` },
  };
}

export function Barlow_Condensed(options?: FontOptions) {
  const variable = options?.variable || '--font-condensed';
  return {
    variable,
    className: 'font-condensed',
    style: { fontFamily: `var(${variable}, "Barlow Condensed", sans-serif)` },
  };
}

export function JetBrains_Mono(options?: FontOptions) {
  const variable = options?.variable || '--font-code';
  return {
    variable,
    className: 'font-code',
    style: { fontFamily: `var(${variable}, "JetBrains Mono", monospace)` },
  };
}

// Legacy aliases mapped to the new typography architecture
export const Space_Grotesk = Outfit;
export const Inter = Plus_Jakarta_Sans;

