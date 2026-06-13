# Caloristika B2B CRM Demo

Prospect-specific sales page for a vertical CRM demo aimed at Caloristika B2B.

Public page:

```text
https://egoriklok.github.io/caloristika-b2b-crm-demo/
```

## What This Demo Sells

Not a generic CRM. The offer is a sales intelligence and lead-to-pilot CRM for B2B ready-to-eat food suppliers:

- lead base for Saint Petersburg partner segments,
- tasting pipeline,
- SKU launch matrices,
- repeat orders,
- Telegram catalog/order flow,
- AI-agent tasks for managers.

## Local CRM Demo

The matching laptop database is generated in the main CRM repo:

```bash
cd ../lunch-up-crm
npm run db:demo:caloristika
```

Run the CRM with the demo database:

```cmd
START_CALORISTIKA_CRM_DEMO.cmd
```

or manually:

```cmd
set LUNCH_UP_CRM_DB_PATH=%CD%\data\caloristika_demo_crm.sqlite
npm run dev
```

## Verify

```bash
npm run verify
```

## Source Safety

The landing uses public Caloristika sources and demo assumptions. It must not contain private Lunch-Up data, API tokens, or closed customer information.
