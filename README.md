# School Atlas

A responsive map and searchable directory of Singapore secondary schools. Includes all 23 school rows visible in the supplied screenshot, IP and G3 cut-off points, and separate affiliated scores.

## Run locally

Requires Node.js 20.19+ or 22.12+ (Node 24 works).

```sh
npm ci
npm run dev
```

Open the address printed by Vite. The directory, filters and school details work without a Google Maps key. The initial overview is an illustrative diagram, not a geographic map.

## Google Maps

1. Create a Google Cloud project with billing and **Maps JavaScript API** enabled.
2. Create a browser API key and restrict it to Maps JavaScript API and your website's HTTP referrers. Include your local development origin when testing locally.
3. Click **Map settings** in the app and enter the key. It is stored only in that browser's local storage. Alternatively, copy `.env.example` to `.env.local`, set `VITE_GOOGLE_MAPS_API_KEY`, and restart Vite. Deployment environment keys must be set before building.

Browser keys are included in requests and frontend bundles, so use Google Cloud restrictions. Do not use a server credential. The map displays filtered markers and school cut-offs. Selecting a school opens details; **Get directions** opens Google Maps. The overview button fits the current filtered schools.

## Checks and production build

```sh
npm test
npm run build
npm run preview
```

Deploy the generated `dist/` folder to a static host. Configure allowed HTTP referrers for its domain.

## Data and limitations

`src/schools.js` contains the transcription and approximate campus coordinates. The image does not state an admission year or explain the `M` annotation; both are explicitly described in the app. A dash means no score shown, rather than zero. The affiliated toggle uses the affiliated row for schools with one and keeps the general row for schools without an affiliated row. Cut-off filters compare displayed score values, not student eligibility.

Campus positions are approximate and are not entrance coordinates. Temasek Junior College is listed at its Tampines holding campus. Verify current locations and admission criteria with each school and MOE. There are no PG2 or PG1 columns in this app.
