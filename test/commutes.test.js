import test from 'node:test';
import assert from 'node:assert/strict';
import { schools, referenceSchools } from '../src/schools.js';
import { commutes, commutePlan, getCommute } from '../src/commutes.js';

test('each secondary school has a dated route and the primary origin has none', () => {
  assert.equal(commutes.length, schools.length);
  assert.equal(new Set(commutes.map(c => c.schoolId)).size, schools.length);
  for (const school of schools) assert.ok(getCommute(school.id));
  assert.equal(getCommute(referenceSchools[0].id), undefined);
  assert.equal(commutePlan.departure, '2026-10-13T07:00:00+08:00');
  assert.equal(commutePlan.timeZone, 'Asia/Singapore');
});

test('totals include the interval from 7am, including any delayed start and transfers', () => {
  const departure = new Date(commutePlan.departure).getTime();
  for (const commute of commutes) {
    const start = new Date(commute.routeStart).getTime();
    const arrival = new Date(commute.arrival).getTime();
    assert.ok(start >= departure && arrival > start);
    assert.equal(commute.totalMinutes, Math.round((arrival - departure) / 60000));
    assert.ok(commute.waitMinutes >= 0);
    assert.ok(commute.steps.length > 0);
    assert.ok(commute.alternativesCompared > 0);
  }
});

test('transit legs identify services and boarding/alighting stops, with timed source links', () => {
  const epoch = String(new Date(commutePlan.departure).getTime() / 1000);
  for (const commute of commutes) {
    const source = new URL(commute.sourceUrl);
    assert.equal(source.origin, 'https://www.google.com');
    assert.ok(source.pathname.includes('!6e0!7e1!8j' + epoch + '!3e3'));
    assert.ok(commute.resolvedDestination && commute.resolvedAddress);
    for (const step of commute.steps) {
      assert.ok(['walk', 'bus', 'mrt', 'lrt'].includes(step.mode));
      assert.ok(step.minutes > 0);
      if (step.mode !== 'walk') {
        assert.ok(step.from && step.to);
        assert.ok(step.services.length > 0);
        for (const service of step.services) assert.ok(service.service && service.name);
      }
    }
  }
});

test('Hwa Chong targets the High School Section, and TJC targets its holding campus', () => {
  assert.equal(getCommute(1).resolvedDestination, 'Hwa Chong Institution (High School Section)');
  assert.equal(getCommute(13).resolvedAddress, '2 Tampines Ave 9, Singapore 529564');
});
