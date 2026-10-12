import test from 'node:test';
import assert from 'node:assert/strict';
import { schools, cutoff, filterSchools } from '../src/schools.js';

test('transcribes all 23 visible schools with unique IDs and Singapore coordinates', () => {
  assert.equal(schools.length, 23);
  assert.equal(new Set(schools.map(s => s.id)).size, 23);
  for (const school of schools) {
    assert.ok(school.lat > 1.2 && school.lat < 1.5);
    assert.ok(school.lng > 103.6 && school.lng < 104.1);
  }
  assert.equal(schools[0].ip, '6ᴹ');
  assert.equal(schools[22].g3, '11');
});
test('keeps affiliated rows distinct, including missing affiliated IP', () => {
  const acsi = schools[4];
  assert.equal(cutoff(acsi, 'ip'), '7');
  assert.equal(cutoff(acsi, 'g3'), '8');
  assert.equal(cutoff(acsi, 'ip', true), null);
  assert.equal(cutoff(acsi, 'g3', true), '13');
  assert.equal(cutoff(schools[1], 'ip', true), '8ᴹ');
  assert.equal(cutoff(schools[1], 'g3', true), null);
});
test('searches names and addresses with case-insensitive matching', () => {
  assert.equal(filterSchools({ query: 'RAFFLES' }).length, 2);
  assert.equal(filterSchools({ query: '  Clementi  ' })[0].short, 'Nan Hua High School');
  assert.equal(filterSchools({ query: 'nonexistent' }).length, 0);
});
test('combines pathway, gender and numeric cutoff filters while retaining M annotations', () => {
  const visible = filterSchools({ pathway: 'ip', gender: 'Girls', maxScore: '6' });
  assert.deepEqual(visible.map(s => s.id), [2, 3, 9]);
  assert.equal(filterSchools({ pathway: 'g3', maxScore: '8' }).length, 6);
  assert.equal(filterSchools({ pathway: 'g3', maxScore: '8', affiliated: true }).length, 0);
  assert.ok(filterSchools({ pathway: 'g3', maxScore: '10' }).some(s => s.g3 === '10ᴹ'));
});

test('Yew Tee Primary is a separate reference location without secondary-school scores', async () => {
  const { referenceSchools } = await import('../src/schools.js');
  assert.equal(referenceSchools.length, 1);
  const primary = referenceSchools[0];
  assert.equal(primary.name, 'Yew Tee Primary School');
  assert.equal(primary.level, 'Primary');
  assert.equal(primary.address, '10 Choa Chu Kang Street 64, Singapore 689100');
  assert.equal(primary.ip, undefined);
  assert.equal(primary.g3, undefined);
  assert.ok(!schools.some(school => school.id === primary.id));
  assert.ok(primary.lat > 1.2 && primary.lat < 1.5);
  assert.ok(primary.lng > 103.6 && primary.lng < 104.1);
});
