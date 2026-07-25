export function DeveshWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1700 500"
      fill="none"
      {...props}
    >
      <text
        x="0"
        y="345"
        fill="currentColor"
        fontFamily="var(--font-sans), ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
        fontSize="300"
        textLength="1660"
        lengthAdjust="spacingAndGlyphs"
      >
        Devesh Kaushik
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1700 500" fill="none"><text x="0" y="345" fill="${color}" font-family="ui-sans-serif, system-ui, sans-serif" font-weight="700" font-size="300" text-length="1660" lengthAdjust="spacingAndGlyphs">Devesh Kaushik</text></svg>`;
}
