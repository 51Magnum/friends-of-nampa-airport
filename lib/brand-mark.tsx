/** Simple original mark: a top-view airplane over a short runway stripe. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="40" height="40" rx="9" fill="#ffffff" />
      <rect x="6" y="31" width="28" height="2.4" rx="1.2" fill="#0b2545" />
      <rect x="18.4" y="30.4" width="3.2" height="3.6" rx="0.4" fill="#e09a2d" />
      <path
        fill="#0b2545"
        d="M20 5.8c1.15 0 1.95 2.2 1.95 4.7v4.4l11.4 3.3v2.55l-11.4-1.35v5.7l4.4 2.7v2.05L20 27.4l-6.35 2.85V28.2l4.4-2.7v-5.7L6.65 20.85V18.3l11.4-3.3V10.5c0-2.5.8-4.7 1.95-4.7z"
      />
    </svg>
  );
}
