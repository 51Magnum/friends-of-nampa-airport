"use client";

import { useEffect } from "react";

/**
 * When an archived item is opened from a homepage hash such as
 * #asap-workshop, send the visitor to the matching archive anchor.
 */
export function HashRedirect({
  ids,
  to,
}: {
  ids: readonly string[];
  to: string;
}) {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && ids.includes(hash)) {
      window.location.replace(`${to}#${hash}`);
    }
  }, [ids, to]);

  return null;
}
