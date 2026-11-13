<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Friends of Nampa Airport

This is the public website for Friends of Nampa Airport, an independent volunteer group for Nampa Municipal Airport (KMAN). It is not a City of Nampa body and not an AOPA chapter.

## Working rules

- Do not add personal contact information for Shane or any other individual. The only public contact is the group address in `lib/site-config.ts`.
- Draft all outgoing communications (emails, posts, newsletter copy) for review. Do not send, publish, or contact anyone unless the owner has explicitly approved that specific message.
- Airport information on the site must use official source links only (`officialLinks` in `lib/site-config.ts` and sourced announcement citations). Do not invent facts, rates, dates, or meeting details.
- The site domain is `friendsofnampaairport.org` (`SITE_DOMAIN` / `SITE_ORIGIN` in `lib/site-config.ts`). Keep unresolved values as visible placeholders: contact email, first meeting date/venue/time, and the MailerLite signup embed. Do not hide or invent replacements.
- No database, paid services, environment variables, or analytics.

## Deployment

- Never deploy local files to Vercel, including previews. Do not run `vercel`, `vercel deploy`, `vercel --prod`, or `vercel --prebuilt` to upload a working directory or local build.
- Commit and push to GitHub first. Vercel should build from the Git integration, with no env vars. Production must come from the merged Git commit.
