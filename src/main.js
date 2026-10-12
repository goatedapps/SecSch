import { schools, referenceSchools, filterSchools, cutoff } from './schools.js';

const icons = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 18 18 6M6 6h12v12"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg>',
};
const state = { query: '', pathway: 'all', gender: 'all', maxScore: '', affiliated: false, selected: null };
let map, markerGroup, tileLayer;
let markers = new Map();
let tileErrors = 0;
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="brand" href="./" aria-label="School Atlas home"><span class="brand-icon">${icons.pin}</span><span>school<span class="brand-light">atlas</span><span class="brand-dot">.</span></span></a>
    <span class="header-label">SINGAPORE SECONDARY SCHOOLS</span>
    <button class="settings-button" id="map-help">${icons.pin}<span>About the map</span></button>
  </header>
  <main>
    <section class="intro"><div><div class="eyebrow"><span></span> A LITTLE CLARITY FOR YOUR NEXT CHAPTER</div><h1>Find your place<span>.</span></h1><p>Explore Singapore’s secondary schools, one neighbourhood at a time.</p></div><div class="intro-note"><span class="note-icon">${icons.arrow}</span><span>Different paths.<br><strong>A world of possibilities.</strong></span></div></section>
    <section class="workspace" aria-label="School explorer">
      <aside class="sidebar">
        <div class="sidebar-heading"><h2>Explore schools</h2><span class="count-pill" id="school-count">23 schools</span></div>
        <label class="search-field">${icons.search}<input id="search" type="search" placeholder="Search school or neighbourhood" aria-label="Search schools" /></label>
        <div class="tabs" aria-label="Programme filter"><button data-pathway="all" class="active" aria-pressed="true">All schools</button><button data-pathway="ip" aria-pressed="false">IP</button><button data-pathway="g3" aria-pressed="false">G3</button></div>
        <div class="select-row"><label>School type<select id="gender"><option value="all">All school types</option><option>Boys</option><option>Girls</option><option>Co-ed</option></select></label><label>Cut-off up to<select id="score"><option value="">Any score</option>${Array.from({ length: 17 }, (_, i) => `<option value="${i + 6}">${i + 6}</option>`).join('')}</select></label></div>
        <label class="affiliation"><input id="affiliated" type="checkbox" /><span>Show affiliated cut-offs</span><span class="toggle" aria-hidden="true"></span></label>
        <div class="list-heading"><span>SCHOOL</span><div><span>IP</span><span>G3</span></div></div>
        <div class="school-list" id="school-list" aria-label="Schools"></div>
        <button class="reference-school" data-school="yew-tee-primary"><span class="primary-dot"></span><span><strong>Yew Tee Primary School</strong><small>Primary school · reference location</small></span></button>
        <div class="sidebar-footer"><span class="legend-dot"></span> IP · Integrated Programme <span class="divider">/</span> G3 · Posting Group 3</div>
      </aside>
      <section class="map-panel" aria-label="School locations">
        <div id="map"></div>
        <div id="map-placeholder" class="map-placeholder">
          <div class="map-grid" aria-hidden="true"></div>
          <div class="island" aria-hidden="true"><span class="area-label area-west">WEST</span><span class="area-label area-central">CENTRAL</span><span class="area-label area-east">EAST</span><span class="island-label">S I N G A P O R E</span></div>
          <div id="schematic-pins" class="schematic-pins"></div>
          <div class="map-connect"><span class="connect-icon">${icons.pin}</span><h2>Your next chapter, on the map.</h2><p>The map could not load. You can still<br>search schools and explore their details.</p><button class="primary-button" id="reload-map">Retry map <span>${icons.arrow}</span></button><small>Internet access is needed for map tiles.</small></div>
          <div class="schematic-label">ILLUSTRATIVE OVERVIEW · NOT TO SCALE</div>
        </div>
        <div class="map-top-label">${icons.pin}<span>Singapore</span><span class="live-dot"></span><span id="map-mode">OpenStreetMap</span></div>
        <button class="fit-button" id="fit-map" title="Show all filtered schools" aria-label="Show all filtered schools">⌖</button>
        <div class="detail-card" id="detail-card" hidden></div>
        <div class="map-status" id="map-status" role="status" hidden></div>
      </section>
    </section>
    <footer class="page-footer"><p>Made for the journey ahead.</p><p>Cut-offs transcribed from your image · Year unspecified · <button id="source-note">About this data ${icons.arrow}</button></p></footer>
  </main>
  <dialog id="map-about"><form method="dialog"><button class="dialog-close" aria-label="Close map information">×</button></form><div class="eyebrow">OPENSTREETMAP</div><h2>A map without an API key.</h2><p>Explore locations with Leaflet and OpenStreetMap. No account, API key or billing setup is needed. Internet access is needed to load map tiles.</p><p><span class="legend-dot"></span> Green markers: secondary schools offering IP.<br><span class="g3-dot"></span> Terracotta markers: secondary schools offering G3 only.<br><span class="primary-dot"></span> Blue marker: Yew Tee Primary School, shown as a reference location.</p><p>Yew Tee Primary stays on the map when secondary-school filters change. Campus positions are approximate. Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>.</p></dialog>
  <dialog id="about"><form method="dialog"><button class="dialog-close" aria-label="Close data information">×</button></form><div class="eyebrow">A NOTE ON THE NUMBERS</div><h2>Start exploring. Then verify.</h2><p>All 23 visible school rows and the first two score columns (IP and PG3 / G3) were transcribed from your screenshot. Affiliated scores are kept separately. “—” means no score shown in the image.</p><p>The superscript <strong>M</strong> is preserved exactly as shown; the image does not explain its meaning or state an admission year. Cut-off points are historical references, not admission guarantees. Confirm current criteria with MOE and each school.</p><p>The map uses approximate campus coordinates. Temasek Junior College is shown at its Tampines holding campus; confirm its location for your admission year.</p><p>“Cut-off up to” shows schools whose displayed cut-off is at or below your selected value. It is a filter on the source data, not an eligibility assessment.</p></dialog>
`;

function getVisible() { return filterSchools(state); }
function scoreHtml(score) { return score ? escapeHtml(score).replace('ᴹ', '<sup>M</sup>') : '<span class="no-score">—</span>'; }
function render() {
  const visible = getVisible();
  document.querySelector('#school-count').textContent = `${visible.length} school${visible.length === 1 ? '' : 's'}`;
  document.querySelector('#school-list').innerHTML = visible.length ? visible.map(school => `
    <button class="school-row ${state.selected === school.id ? 'selected' : ''}" data-school="${school.id}" aria-pressed="${state.selected === school.id}">
      <span class="school-number">${String(school.id).padStart(2, '0')}</span><span class="school-info"><span class="school-name">${escapeHtml(school.short)}</span><span class="school-meta">${school.gender}<span>·</span>${school.ip && school.g3 ? 'Dual pathway' : school.ip ? 'Integrated Programme' : 'Posting Group 3'}${state.affiliated && (school.affiliatedIp || school.affiliatedG3) ? '<span>·</span>Affiliated' : ''}</span></span><span class="scores"><span>${scoreHtml(cutoff(school, 'ip', state.affiliated))}</span><span>${scoreHtml(cutoff(school, 'g3', state.affiliated))}</span></span>
    </button>`).join('') : '<div class="empty"><h3>No schools found</h3><p>Try a different name or broaden your filters.</p><button id="reset-filters" class="text-button">Reset filters</button></div>';
  if (![...visible, ...referenceSchools].some(s => s.id === state.selected)) { state.selected = null; document.querySelector('#detail-card').hidden = true; map?.closePopup(); }
  document.querySelector('.reference-school').classList.toggle('selected', state.selected === 'yew-tee-primary');
  renderSchematic([...visible, ...referenceSchools]);
  if (map) renderMarkers(visible);
}
function renderSchematic(visible) {
  document.querySelector('#schematic-pins').innerHTML = visible.map(school => {
    const left = 14 + ((school.lng - 103.70) / 0.25) * 73;
    const top = 58 - ((school.lat - 1.30) / 0.08) * 27;
    return `<button class="schematic-pin ${school.level === 'Primary' ? 'primary-pin' : school.ip ? 'ip-pin' : 'g3-pin'} ${state.selected === school.id ? 'selected' : ''}" style="left:${left}%;top:${top}%" data-school="${school.id}" aria-label="${escapeHtml(school.short)}">${school.level === 'Primary' ? 'P' : school.id}</button>`;
  }).join('');
}
function selectSchool(id) {
  const school = [...schools, ...referenceSchools].find(s => s.id === id);
  if (!school) return;
  state.selected = id;
  render();
  const card = document.querySelector('#detail-card');
  card.hidden = false;
  card.innerHTML = `<button class="detail-close" aria-label="Close school details">×</button><div class="eyebrow">${school.level === 'Primary' ? 'PRIMARY SCHOOL · REFERENCE LOCATION' : school.gender.toUpperCase() + ' · SCHOOL ' + String(id).padStart(2, '0')}</div><h2>${escapeHtml(school.name)}</h2><p class="address">${icons.pin}${escapeHtml(school.address)}</p>${school.level === 'Primary' ? '<p class="primary-note">A primary school reference location. IP and G3 secondary-school cut-offs do not apply.</p>' : `<div class="detail-scores"><div><span>IP CUT-OFF</span><strong>${scoreHtml(cutoff(school, 'ip', state.affiliated))}</strong></div><div><span>G3 CUT-OFF</span><strong>${scoreHtml(cutoff(school, 'g3', state.affiliated))}</strong></div>${school.affiliatedIp || school.affiliatedG3 ? `<div><span>AFFILIATED ${school.affiliatedIp ? 'IP' : 'G3'}</span><strong>${scoreHtml(school.affiliatedIp || school.affiliatedG3)}</strong></div>` : ''}</div>`}<p class="detail-note">${state.affiliated && (school.affiliatedIp || school.affiliatedG3) ? 'Affiliated entry selected. ' : ''}Approximate campus location.${school.locationNote ? ` ${escapeHtml(school.locationNote)}` : ''}</p><a class="directions" href="https://www.openstreetmap.org/?mlat=${school.lat}&mlon=${school.lng}#map=17/${school.lat}/${school.lng}" target="_blank" rel="noopener noreferrer">View on OpenStreetMap <span>${icons.arrow}</span></a>`;
  card.querySelector('.detail-close').addEventListener('click', () => { state.selected = null; card.hidden = true; map?.closePopup(); render(); });
  if (map) {
    map.setView([school.lat, school.lng], 14);
    if (map.getSize().x >= 500) markers.get(id)?.openPopup();
    else { map.closePopup(); map.panBy([0, 90], { animate: false }); }
  }
}
function popupHtml(school) {
  const scores = school.level === 'Primary' ? '<p>Primary school · reference location</p>' : `<p>IP: ${scoreHtml(cutoff(school, 'ip', state.affiliated))} &nbsp; G3: ${scoreHtml(cutoff(school, 'g3', state.affiliated))}</p>`;
  return `<div class="map-info"><strong>${escapeHtml(school.short)}</strong>${scores}<small>Approximate campus location</small></div>`;
}
function renderMarkers(visible) {
  const mapSchools = [...visible, ...referenceSchools];
  const activeIds = new Set(mapSchools.map(s => s.id));
  for (const [id, marker] of markers) {
    if (!activeIds.has(id)) { markerGroup.removeLayer(marker); markers.delete(id); }
  }
  for (const school of mapSchools) {
    let marker = markers.get(school.id);
    const kind = school.level === 'Primary' ? 'primary' : school.ip ? 'ip' : 'g3';
    const icon = L.divIcon({ className: `school-marker ${kind}-marker${state.selected === school.id ? ' selected-marker' : ''}`, html: `<span>${school.level === 'Primary' ? 'P' : school.id}</span>`, iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -15] });
    if (!marker) {
      marker = L.marker([school.lat, school.lng], { title: school.short, alt: school.short, keyboard: true, icon }).addTo(markerGroup);
      marker.bindPopup(popupHtml(school), { autoPanPaddingTopLeft: [20, 70], autoPanPaddingBottomRight: [20, 280] });
      marker.on('click', () => selectSchool(school.id));
      markers.set(school.id, marker);
    } else {
      marker.setIcon(icon);
      marker.setPopupContent(popupHtml(school));
    }
    marker.getElement()?.setAttribute('aria-label', school.short);
  }
}
function fitMap() {
  if (!map) return;
  const visible = [...getVisible(), ...referenceSchools];
  map.fitBounds(L.latLngBounds(visible.map(s => [s.lat, s.lng])), { padding: [45, 65], maxZoom: 15 });
}
function showMapError(message) {
  const status = document.querySelector('#map-status');
  status.hidden = false;
  status.replaceChildren(document.createTextNode(message + ' '));
  const retry = document.createElement('button');
  retry.className = 'text-button';
  retry.textContent = 'Retry';
  retry.addEventListener('click', () => {
    if (!map) { window.location.reload(); return; }
    tileErrors = 0;
    status.hidden = true;
    tileLayer.redraw();
  });
  status.append(retry);
}
function initMap() {
  try {
    if (!window.L) throw new Error('Leaflet did not load');
    map = L.map('map', { zoomControl: false, scrollWheelZoom: true }).setView([1.35, 103.82], 11);
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
      // Ordinary interactive viewing only: no tile prefetching or offline downloads.
    }).addTo(map);
    tileLayer.on('tileerror', () => { tileErrors += 1; showMapError('Some map tiles could not load. Check your connection; school markers and details still work.'); });
    tileLayer.on('tileload', () => { if (!tileErrors) document.querySelector('#map-status').hidden = true; });
    markerGroup = L.layerGroup().addTo(map);
    document.querySelector('#map-placeholder').hidden = true;
    renderMarkers(getVisible());
    fitMap();
  } catch {
    document.querySelector('#map-placeholder').hidden = false;
    document.querySelector('#map-mode').textContent = 'School overview';
    showMapError('The map library could not load. Reload the page to try again.');
  }
}
document.querySelector('#map-help').addEventListener('click', () => document.querySelector('#map-about').showModal());
document.querySelector('#reload-map').addEventListener('click', () => window.location.reload());
document.querySelector('#source-note').addEventListener('click', () => document.querySelector('#about').showModal());
// Remove the obsolete saved Google browser key without reading or using it.
try { localStorage.removeItem('school-atlas-maps-key'); } catch { /* Storage may be disabled. */ }
document.querySelector('#search').addEventListener('input', event => { state.query = event.target.value; render(); });
document.querySelector('#gender').addEventListener('change', event => { state.gender = event.target.value; render(); fitMap(); });
document.querySelector('#score').addEventListener('change', event => { state.maxScore = event.target.value; render(); fitMap(); });
document.querySelector('#affiliated').addEventListener('change', event => { state.affiliated = event.target.checked; render(); if (state.selected) selectSchool(state.selected); fitMap(); });
document.querySelectorAll('[data-pathway]').forEach(button => button.addEventListener('click', () => {
  state.pathway = button.dataset.pathway;
  document.querySelectorAll('[data-pathway]').forEach(tab => { tab.classList.toggle('active', tab === button); tab.setAttribute('aria-pressed', String(tab === button)); });
  render(); fitMap();
}));
document.querySelector('#fit-map').addEventListener('click', fitMap);
document.querySelector('.workspace').addEventListener('click', event => {
  const row = event.target.closest('[data-school]');
  if (row) selectSchool([...schools, ...referenceSchools].find(s => String(s.id) === row.dataset.school)?.id);
  if (event.target.closest('#reset-filters')) {
    Object.assign(state, { query: '', pathway: 'all', gender: 'all', maxScore: '', affiliated: false });
    document.querySelector('#search').value = '';
    document.querySelector('#gender').value = 'all';
    document.querySelector('#score').value = '';
    document.querySelector('#affiliated').checked = false;
    document.querySelector('[data-pathway="all"]').click();
  }
});
render();
initMap();
