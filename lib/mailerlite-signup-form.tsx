import Script from "next/script";
import { siteConfig } from "./site-config";

/** Embeds the MailerLite "Website signup" form via the official universal script. */
export function MailerLiteSignupForm() {
  const { accountId, formSlug, scriptSrc } = siteConfig.mailerLiteSignup;

  return (
    <div>
      <div className="ml-embedded" data-form={formSlug} />
      <Script id="mailerlite-universal" strategy="afterInteractive">
        {`
          (function (w, d, e, u, f, l, n) {
            w[f] = w[f] || function () {
              (w[f].q = w[f].q || []).push(arguments);
            };
            l = d.createElement(e);
            l.async = 1;
            l.src = u;
            n = d.getElementsByTagName(e)[0];
            n.parentNode.insertBefore(l, n);
          })(window, document, "script", ${JSON.stringify(scriptSrc)}, "ml");
          ml("account", ${JSON.stringify(accountId)});
        `}
      </Script>
    </div>
  );
}
