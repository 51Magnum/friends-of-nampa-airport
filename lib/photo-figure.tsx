import Image from "next/image";
import type { SitePhoto } from "./photos";
import { sitePhotos } from "./photos";

export function PhotoFigure({
  photo,
  sizes,
  aspectClassName = "aspect-[3/2]",
}: {
  photo: SitePhoto;
  sizes: string;
  aspectClassName?: string;
}) {
  return (
    <figure>
      <div
        className={`relative overflow-hidden rounded-2xl border border-line shadow-sm ${aspectClassName}`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-muted">
        {photo.caption}{" "}
        <span>
          Photo: {photo.author},{" "}
          <a
            href={photo.licenseUrl}
            className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
          >
            {photo.license}
          </a>
          ,{" "}
          <a
            href={photo.filePage}
            className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
          >
            Wikimedia Commons
          </a>
          .
        </span>
      </figcaption>
    </figure>
  );
}

export function PhotoCredits() {
  return (
    <p>
      Photo credits:{" "}
      {sitePhotos.map((photo, index) => (
        <span key={photo.id}>
          {index > 0 ? "; " : null}
          {photo.caption.replace(/\.$/, "")} by{" "}
          <a
            href={photo.filePage}
            className="font-medium text-white underline decoration-sky-bright/70 underline-offset-4 hover:decoration-amber-bright"
          >
            {photo.author}
          </a>
          {", "}
          <a
            href={photo.licenseUrl}
            className="font-medium text-white underline decoration-sky-bright/70 underline-offset-4 hover:decoration-amber-bright"
          >
            {photo.license}
          </a>
        </span>
      ))}
      . Images from Wikimedia Commons.
    </p>
  );
}
