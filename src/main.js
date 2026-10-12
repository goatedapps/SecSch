import './style.css';
import { schools, filterSchools, cutoff } from './schools.js';

const icons = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 18 18 6M6 6h12v12"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg>',
};
const state = { query: '', pathway: 'all', gender: 'all', maxScore: '', affiliated: false, selected: null };
let map, infoWindow, markers = [], mapLoading = false;
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="brand" href="/" aria-label="School Atlas home"><span class="brand-icon">${icons.pin}</span><span>school<span class="brand-light">atlas</span><span class="brand-dot">.</span></span></a>
    <span class="header-label">SINGAPORE SECONDARY SCHOOLS</span>
    <button class="settings-button" id="open-settings">${icons.pin}<span>Map settings</span></button>
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
        <div class="sidebar-footer"><span class="legend-dot"></span> IP · Integrated Programme <span class="divider">/</span> G3 · Posting Group 3</div>
      </aside>
      <section class="map-panel" aria-label="School locations">
        <div id="map"></div>
        <div id="map-placeholder" class="map-placeholder">
          <div class="map-grid" aria-hidden="true"></div>
          <div class="island" aria-hidden="true"><span class="area-label area-west">WEST</span><span class="area-label area-central">CENTRAL</span><span class="area-label area-east">EAST</span><span class="island-label">S I N G A P O R E</span></div>
          <div id="schematic-pins" class="schematic-pins"></div>
          <div class="map-connect"><span class="connect-icon">${icons.pin}</span><h2>Your next chapter, on the map.</h2><p>Connect Google Maps to explore real locations,<br>street views and directions.</p><button class="primary-button" id="connect-map">Connect Google Maps <span>${icons.arrow}</span></button><small>School details are ready to explore below.</small></div>
          <div class="schematic-label">ILLUSTRATIVE OVERVIEW · NOT TO SCALE</div>
        </div>
        <div class="map-top-label">${icons.pin}<span>Singapore</span><span class="live-dot"></span><span id="map-mode">School overview</span></div>
        <button class="fit-button" id="fit-map" title="Show all filtered schools" aria-label="Show all filtered schools">⌖</button>
        <div class="detail-card" id="detail-card" hidden></div>
        <div class="map-status" id="map-status" role="status" hidden></div>
      </section>
    </section>
    <footer class="page-footer"><p>Made for the journey ahead.</p><p>Cut-offs transcribed from your image · Year unspecified · <button id="source-note">About this data ${icons.arrow}</button></p></footer>
  </main>
  <dialog id="settings"><form method="dialog"><button class="dialog-close" aria-label="Close settings">×</button></form><div class="eyebrow">GOOGLE MAPS</div><h2>Put your schools on the map.</h2><p>Enter a browser API key with the <strong>Maps JavaScript API</strong> enabled and billing configured. Restrict it to your website’s HTTP referrers in Google Cloud.</p><form id="key-form"><label for="api-key">Google Maps API key</label><input id="api-key" type="password" autocomplete="off" placeholder="Enter your API key" required /><p class="key-note">Stored only in this browser’s local storage. Browser API keys are visible to website visitors; use referrer and API restrictions.</p><button class="primary-button" type="submit">Connect map ${icons.arrow}</button><button class="text-button" id="remove-key" type="button">Remove saved key</button></form><p class="key-note">You can also configure VITE_GOOGLE_MAPS_API_KEY in .env.local before starting the app.</p></dialog>
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
  if (!visible.some(s => s.id === state.selected)) { state.selected = null; document.querySelector('#detail-card').hidden = true; infoWindow?.close(); }
  renderSchematic(visible);
  if (map) renderMarkers(visible);
}
function renderSchematic(visible) {
  document.querySelector('#schematic-pins').innerHTML = visible.map(school => {
    const left = 14 + ((school.lng - 103.70) / 0.25) * 73;
    const top = 58 - ((school.lat - 1.30) / 0.08) * 27;
    return `<button class="schematic-pin ${school.ip ? 'ip-pin' : 'g3-pin'} ${state.selected === school.id ? 'selected' : ''}" style="left:${left}%;top:${top}%" data-school="${school.id}" aria-label="${escapeHtml(school.short)}">${school.id}</button>`;
  }).join('');
}
function selectSchool(id) {
  const school = schools.find(s => s.id === id);
  if (!school) return;
  state.selected = id;
  render();
  const card = document.querySelector('#detail-card');
  card.hidden = false;
  card.innerHTML = `<button class="detail-close" aria-label="Close school details">×</button><div class="eyebrow">${school.gender.toUpperCase()} · SCHOOL ${String(id).padStart(2, '0')}</div><h2>${escapeHtml(school.name)}</h2><p class="address">${icons.pin}${escapeHtml(school.address)}</p><div class="detail-scores"><div><span>IP CUT-OFF</span><strong>${scoreHtml(cutoff(school, 'ip', state.affiliated))}</strong></div><div><span>G3 CUT-OFF</span><strong>${scoreHtml(cutoff(school, 'g3', state.affiliated))}</strong></div>${school.affiliatedIp || school.affiliatedG3 ? `<div><span>AFFILIATED ${school.affiliatedIp ? 'IP' : 'G3'}</span><strong>${scoreHtml(school.affiliatedIp || school.affiliatedG3)}</strong></div>` : ''}</div><p class="detail-note">${state.affiliated && (school.affiliatedIp || school.affiliatedG3) ? 'Affiliated entry selected. ' : ''}Approximate campus location.${school.locationNote ? ` ${escapeHtml(school.locationNote)}` : ''}</p><a class="directions" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(school.short + ', ' + school.address)}" target="_blank" rel="noopener noreferrer">Get directions <span>${icons.arrow}</span></a>`;
  card.querySelector('.detail-close').addEventListener('click', () => { state.selected = null; card.hidden = true; infoWindow?.close(); render(); });
  if (map) {
    map.panTo({ lat: school.lat, lng: school.lng });
    map.setZoom(14);
    const marker = markers.find(item => item.id === id)?.marker;
    if (marker) {
      infoWindow.setContent(`<div class="map-info"><strong>${escapeHtml(school.short)}</strong><p>IP: ${scoreHtml(cutoff(school, 'ip', state.affiliated))} &nbsp; G3: ${scoreHtml(cutoff(school, 'g3', state.affiliated))}</p><small>Approximate campus location</small></div>`);
      infoWindow.open({ map, anchor: marker });
    }
  }
}
function renderMarkers(visible) {
  markers.forEach(({ marker }) => marker.setMap(null));
  markers = visible.map(school => {
    const marker = new google.maps.Marker({ map, position: { lat: school.lat, lng: school.lng }, title: school.short, label: { text: String(school.id), color: '#ffffff', fontSize: '11px', fontWeight: '600' }, icon: { path: google.maps.SymbolPath.CIRCLE, scale: state.selected === school.id ? 17 : 13, fillColor: school.ip ? '#244f42' : '#bc7150', fillOpacity: 1, strokeColor: '#ffffff', strokeWeight: 2 } });
    marker.addListener('click', () => selectSchool(school.id));
    return { id: school.id, marker };
  });
}
function fitMap() {
  if (!map) return;
  const visible = getVisible();
  if (!visible.length) return;
  const bounds = new google.maps.LatLngBounds();
  visible.forEach(s => bounds.extend({ lat: s.lat, lng: s.lng }));
  map.fitBounds(bounds, 65);
  google.maps.event.addListenerOnce(map, 'idle', () => { if (map.getZoom() > 15) map.setZoom(15); });
}
function showMapError(message) {
  const status = document.querySelector('#map-status');
  status.hidden = false;
  status.textContent = message;
  document.querySelector('#map-placeholder').hidden = false;
  document.querySelector('#map-mode').textContent = 'School overview';
}
window.gm_authFailure = () => showMapError('Google Maps could not authorize this key. Check billing, API access and HTTP referrer restrictions in Google Cloud.');
async function connectMap(key) {
  if (mapLoading) return;
  if (map) { showMapError('Reload the page to apply a different map key.'); return; }
  mapLoading = true;
  document.querySelector('#map-status').hidden = false;
  document.querySelector('#map-status').textContent = 'Connecting to Google Maps…';
  try {
    if (!window.google?.maps) {
      await new Promise((resolve, reject) => {
        window.initSchoolMap = resolve;
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&loading=async&callback=initSchoolMap&v=weekly`;
        script.async = true;
        const timer = setTimeout(() => { script.remove(); reject(new Error('timeout')); }, 20000);
        script.onerror = () => { clearTimeout(timer); script.remove(); reject(new Error('network')); };
        window.initSchoolMap = () => { clearTimeout(timer); resolve(); };
        document.head.append(script);
      });
    }
    map = new google.maps.Map(document.querySelector('#map'), { center: { lat: 1.34, lng: 103.83 }, zoom: 11, mapTypeControl: false, streetViewControl: true, fullscreenControl: false, clickableIcons: false, styles: [{ featureType: 'poi', stylers: [{ visibility: 'off' }] }, { featureType: 'water', stylers: [{ color: '#d5e8e5' }] }, { featureType: 'landscape', stylers: [{ color: '#f2f2e9' }] }] });
    infoWindow = new google.maps.InfoWindow();
    document.querySelector('#map-placeholder').hidden = true;
    document.querySelector('#map-status').hidden = true;
    document.querySelector('#map-mode').textContent = 'Google Maps';
    renderMarkers(getVisible());
    fitMap();
  } catch {
    showMapError('Could not load Google Maps. Check your connection and API key, then try again in Map settings.');
  } finally { mapLoading = false; }
}

const settings = document.querySelector('#settings');
function readSavedKey() { try { return localStorage.getItem('school-atlas-maps-key') || ''; } catch { return ''; } }
function openSettings() { document.querySelector('#api-key').value = readSavedKey(); settings.showModal(); }
document.querySelector('#open-settings').addEventListener('click', openSettings);
document.querySelector('#connect-map').addEventListener('click', openSettings);
document.querySelector('#source-note').addEventListener('click', () => document.querySelector('#about').showModal());
document.querySelector('#key-form').addEventListener('submit', event => {
  event.preventDefault();
  const key = document.querySelector('#api-key').value.trim();
  if (!key) return;
  try { localStorage.setItem('school-atlas-maps-key', key); } catch { /* The current connection still works without storage. */ }
  settings.close();
  if (window.google?.maps) window.location.reload(); else connectMap(key);
});
document.querySelector('#remove-key').addEventListener('click', () => { try { localStorage.removeItem('school-atlas-maps-key'); } catch { /* Storage may be disabled. */ } document.querySelector('#api-key').value = ''; settings.close(); window.location.reload(); });
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
  if (row) selectSchool(Number(row.dataset.school));
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
const initialKey = readSavedKey() || import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
if (initialKey) connectMap(initialKey);
