# School Atlas

A static HTML, JavaScript and CSS site with a Leaflet / OpenStreetMap map of Singapore schools. No API key, account, billing setup, Vite, build step, or npm installation is needed to run it.

Includes the 23 secondary schools from the supplied screenshot, IP/G3 cut-offs and separate affiliated scores. Yew Tee Primary School is an additional **blue reference marker**, always visible regardless of secondary-school filters. It has no IP/G3 scores.

## View locally

Serve this folder with any static web server. With Python installed:

```sh
python3 -m http.server 5173
```

Open **http://localhost:5173**. Alternatively, `npm run dev` starts the same Python server. JavaScript uses native browser modules, so use HTTP rather than double-clicking `index.html` with a `file://` URL.

## Publish a website

Upload `index.html`, `src/`, and `vendor/` together to any static host. There is no build command or `dist/` directory to deploy. All asset paths are relative, so hosting under a subdirectory works.

For GitHub Pages, open the repository's **Settings → Pages**, choose **Deploy from a branch**, and select **main / (root)**. Once published, the site will be at `https://goatedapps.github.io/SecSch/`. Committing the files alone does not enable Pages.

## Map

Leaflet 1.9.4 is included locally in `vendor/leaflet/`, along with its license; no CDN is needed. Map tiles load from `https://tile.openstreetmap.org/`, so internet access is required. The map includes zoom controls, selectable school markers, one detail card per school, fit-to-schools, and location links to OpenStreetMap.

Green markers identify schools offering IP, terracotta identifies G3-only schools, and blue identifies Yew Tee Primary. A tile-load error leaves markers, school details and filters available, with a retry button.

The public OSM tile service permits ordinary interactive viewing under its [tile usage policy](https://operations.osmfoundation.org/policies/tiles/). Keep visible attribution and normal browser caching/referrers. This site does not prefetch or download offline tiles. For substantial traffic, use a suitable tile provider or your own tile server; the public service has no uptime guarantee.

## Optional development checks

Node.js is needed only for tests, not for serving or using the site. No npm dependencies are required.

```sh
node --test
```

## Data

`src/schools.js` contains the screenshot transcription and approximate campus coordinates. The image does not identify an admission year or explain the `M` annotation; the app retains that annotation. A dash means no score shown. The affiliated toggle uses affiliated rows for schools with one and general rows for other schools. Cut-off filters compare source scores, not student eligibility.

Yew Tee Primary is a separately maintained reference location, not part of the screenshot's secondary-school scores. Campus markers are approximate and are not entrance coordinates. Temasek Junior College is shown at its Tampines holding campus. Confirm current locations and admission criteria with each school and MOE.

## Morning public transport from Yew Tee Primary

Each secondary-school row shows a total journey estimate; its single detail card shows walking legs, bus services, MRT lines and boarding/alighting stops, estimated arrival, and a dated Google Maps source link. Yew Tee Primary is the origin, so it has no journey to itself.

The snapshot in `src/commutes.js` was researched on **12 October 2026** for the user-confirmed **Tuesday, 13 October 2026, at 7am Singapore time**. Google Maps resolved all 23 destination schools and their campus addresses. Hwa Chong uses its High School Section rather than the College Section; Temasek Junior College uses the Tampines holding campus.

For each school, we compared the returned transit alternatives and selected the earliest arrival for journeys starting no earlier than 7am. Total time is measured from 7am, including any wait before a later departure, walking, transfers and transit. Times are approximate and rounded to the nearest minute; the displayed legs may differ slightly in their rounding. These are Google Maps planning estimates, not guaranteed or live journey times, and should be rechecked via the source link before travel.

All route data is saved statically. Viewing the app requires no Google API key or route API calls; only the optional external source links open Google Maps. To update the planned date, research new routes and replace the snapshot and its metadata together rather than reusing old estimates.
