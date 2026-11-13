export function Placeholder({ value }: { value: string }) {
  return (
    <span
      className="inline-block rounded-sm border border-dashed border-amber-500 bg-amber-50 px-1.5 py-0.5 font-mono text-sm text-amber-950 dark:border-amber-400 dark:bg-amber-950 dark:text-amber-100"
      title="Placeholder — replace when confirmed"
    >
      {value}
    </span>
  );
}
