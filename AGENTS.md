# AI Agent Instructions

This repository is a public prospect-specific demo for Caloristika B2B. It must remain safe to share.

Rules for future agents:

- Do not add private Lunch-Up data, credentials, tokens, closed customer conversations or non-public pricing.
- Public claims about Caloristika must link to public sources.
- Treat CRM numbers as demo assumptions unless backed by a source file.
- Keep the product position narrow: sales intelligence and lead-to-pilot CRM for B2B ready-to-eat partners in Saint Petersburg.
- Preserve the Vite + React + TypeScript + Tailwind + shadcn-style component stack.
- Use `npm run verify` before publishing changes.

Local related demo database:

```bash
cd ../lunch-up-crm
npm run db:demo:caloristika
set LUNCH_UP_CRM_DB_PATH=%CD%\data\caloristika_demo_crm.sqlite
npm run dev
```
