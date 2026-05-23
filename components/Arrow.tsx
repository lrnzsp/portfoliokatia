type Props = { size?: number };

export function ArrowRight({ size = 16 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowDown({ size = 16 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowLeft({ size = 16 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowUp({ size = 16 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M12 19V5M6 11l6-6 6 6" strokeLinecap="square" />
    </svg>
  );
}
