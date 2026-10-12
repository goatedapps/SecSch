// Transcribed from the user-provided screenshot. The screenshot does not state
// an admission year. M is retained verbatim; its meaning is not inferred.
// Coordinates are approximate campus locations, not surveyed entrance points.
export const schools = [
  { name: 'Hwa Chong Institution (Secondary)', short: 'Hwa Chong Institution', ip: '6ᴹ', g3: null, address: '661 Bukit Timah Road, Singapore', lat: 1.3257, lng: 103.8052, gender: 'Boys' },
  { name: 'Nanyang Girls’ High', short: 'Nanyang Girls’ High', ip: '6ᴹ', g3: null, affiliatedIp: '8ᴹ', address: '2 Linden Drive, Singapore', lat: 1.3307, lng: 103.8024, gender: 'Girls' },
  { name: 'Raffles Girls’ (Secondary)', short: 'Raffles Girls’ School', ip: '6', g3: null, address: '2 Braddell Rise, Singapore', lat: 1.3421, lng: 103.8443, gender: 'Girls' },
  { name: 'Raffles Institution (Secondary)', short: 'Raffles Institution', ip: '6', g3: null, address: '1 Raffles Institution Lane, Singapore', lat: 1.3475, lng: 103.8457, gender: 'Boys' },
  { name: 'Anglo-Chinese (Independent) (Secondary)', short: 'Anglo-Chinese (Independent)', ip: '7', g3: '8', affiliatedG3: '13', address: '121 Dover Road, Singapore', lat: 1.3039, lng: 103.7813, gender: 'Boys' },
  { name: 'CHIJ St. Nicholas Girls’ (Secondary)', short: 'CHIJ St. Nicholas Girls’', ip: '7ᴹ', g3: '8ᴹ', affiliatedG3: '14', address: '501 Ang Mo Kio Street 13, Singapore', lat: 1.3735, lng: 103.8342, gender: 'Girls' },
  { name: 'Catholic High (Secondary)', short: 'Catholic High School', ip: '7ᴹ', g3: '8ᴹ', affiliatedG3: '12', address: '9 Bishan Street 22, Singapore', lat: 1.3547, lng: 103.8446, gender: 'Boys' },
  { name: 'Dunman High (Secondary)', short: 'Dunman High School', ip: '8ᴹ', g3: null, address: '10 Tanjong Rhu Road, Singapore', lat: 1.2995, lng: 103.8828, gender: 'Co-ed' },
  { name: 'Methodist Girls’ (Secondary)', short: 'Methodist Girls’ School', ip: '6', g3: '8', affiliatedG3: '17', address: '11 Blackmore Drive, Singapore', lat: 1.3491, lng: 103.7858, gender: 'Girls' },
  { name: 'National Junior College (Secondary)', short: 'National Junior College', ip: '8', g3: null, address: '37 Hillcrest Road, Singapore', lat: 1.3303, lng: 103.8045, gender: 'Co-ed' },
  { name: 'Singapore Chinese Girls’', short: 'Singapore Chinese Girls’ School', ip: '7', g3: '8', affiliatedG3: '17', address: '190 Dunearn Road, Singapore', lat: 1.3208, lng: 103.8278, gender: 'Girls' },
  { name: 'St. Joseph’s Institution (Secondary)', short: 'St. Joseph’s Institution', ip: '7', g3: '8', affiliatedG3: '12', address: '38 Malcolm Road, Singapore', lat: 1.3276, lng: 103.8271, gender: 'Boys' },
  { name: 'Temasek Junior College (Secondary)', short: 'Temasek Junior College', ip: '8', g3: null, address: '2 Tampines Avenue 9, Singapore', lat: 1.3611, lng: 103.9444, gender: 'Co-ed', locationNote: 'Tampines holding campus. Confirm the campus for your admission year.' },
  { name: 'Anglo-Chinese (Barker Road)', short: 'Anglo-Chinese (Barker Road)', ip: null, g3: '9', affiliatedG3: '21', address: '60 Barker Road, Singapore', lat: 1.3211, lng: 103.8357, gender: 'Boys' },
  { name: 'Cedar Girls’', short: 'Cedar Girls’ Secondary', ip: '9', g3: '9', address: '1 Cedar Avenue, Singapore', lat: 1.3347, lng: 103.8721, gender: 'Girls' },
  { name: 'River Valley High (Secondary)', short: 'River Valley High School', ip: '9ᴹ', g3: null, address: '6 Boon Lay Avenue, Singapore', lat: 1.3445, lng: 103.7099, gender: 'Co-ed' },
  { name: 'St. Andrew’s', short: 'St. Andrew’s Secondary', ip: null, g3: '9', affiliatedG3: '22', address: '15 Francis Thomas Drive, Singapore', lat: 1.3313, lng: 103.8651, gender: 'Boys' },
  { name: 'Victoria', short: 'Victoria School', ip: '8', g3: '9', address: '2 Siglap Link, Singapore', lat: 1.3086, lng: 103.9297, gender: 'Boys' },
  { name: 'CHIJ Secondary (Toa Payoh)', short: 'CHIJ Secondary (Toa Payoh)', ip: null, g3: '10', affiliatedG3: '20', address: '626 Lorong 1 Toa Payoh, Singapore', lat: 1.3326, lng: 103.8418, gender: 'Girls' },
  { name: 'Chung Cheng High (Main)', short: 'Chung Cheng High (Main)', ip: null, g3: '10ᴹ', address: '50 Goodman Road, Singapore', lat: 1.3058, lng: 103.8897, gender: 'Co-ed' },
  { name: 'Nan Hua High', short: 'Nan Hua High School', ip: null, g3: '10ᴹ', address: '41 Clementi Avenue 1, Singapore', lat: 1.3086, lng: 103.7949, gender: 'Co-ed' },
  { name: 'Paya Lebar Methodist Girls’ (Secondary)', short: 'Paya Lebar Methodist Girls’', ip: null, g3: '10', affiliatedG3: '20', address: '296 Lorong Ah Soo, Singapore', lat: 1.3508, lng: 103.8845, gender: 'Girls' },
  { name: 'Anderson', short: 'Anderson Secondary', ip: null, g3: '11', address: '10 Ang Mo Kio Street 53, Singapore', lat: 1.3742, lng: 103.8515, gender: 'Co-ed' },
].map((school, i) => ({ id: i + 1, ...school }));

export function cutoff(school, pathway, affiliated = false) {
  if (affiliated && (school.affiliatedIp || school.affiliatedG3)) {
    return pathway === 'ip' ? school.affiliatedIp ?? null : school.affiliatedG3 ?? null;
  }
  return school[pathway];
}

export function filterSchools({ query = '', pathway = 'all', gender = 'all', maxScore = '', affiliated = false } = {}) {
  const search = query.trim().toLowerCase();
  return schools.filter(school => {
    if (search && !`${school.name} ${school.short} ${school.address}`.toLowerCase().includes(search)) return false;
    if (gender !== 'all' && school.gender !== gender) return false;
    const scores = (pathway === 'all' ? ['ip', 'g3'] : [pathway]).map(p => cutoff(school, p, affiliated));
    if (pathway !== 'all' && !scores.some(Boolean)) return false;
    if (maxScore !== '' && !scores.some(score => score && Number.parseInt(score, 10) <= Number(maxScore))) return false;
    return true;
  });
}

// Extra reference location requested by the user; not part of the screenshot.
// Campus address and approximate center: OpenStreetMap relation 11221427.
// https://www.openstreetmap.org/relation/11221427 (checked 2026-10-12).
export const referenceSchools = [{
  id: 'yew-tee-primary',
  name: 'Yew Tee Primary School',
  short: 'Yew Tee Primary School',
  level: 'Primary',
  address: '10 Choa Chu Kang Street 64, Singapore 689100',
  lat: 1.3967,
  lng: 103.7510,
}];
