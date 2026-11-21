export function SourceLinks({
  sources,
}: {
  sources: { label: string; href: string }[];
}) {
  return (
    <>
      {" "}
      (
      {sources.map((source, index) => (
        <span key={`${source.href}-${source.label}`}>
          {index > 0 ? "; " : null}
          <a
            href={source.href}
            className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
          >
            {source.label}
          </a>
        </span>
      ))}
      )
    </>
  );
}
