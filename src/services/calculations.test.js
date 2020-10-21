import * as single from './calculations'

// Receivable OAS amounts - Varies depending on stay in Canada
// This is a simple ratio calculation
// Linear relationship between years lived in Canada and receivable OAS
test('lived in Canada 40 years', () => {
  const oas = single.receivableOas(40, 1000)
  expect(oas).toBe(1000);
});

test('lived in Canada > 40 years', () => {
  const oas = single.receivableOas(55, 1000)
  expect(oas).toBe(1000);
});

test('lived in Canada less than 10 years - unqualified', () => {
  const oas = single.receivableOas(9, 1000)
  expect(oas).toBe(0);
});

test('lived in Canada 20 years', () => {
  const oas = single.receivableOas(20, 1000)
  expect(oas).toBe(500);
});

test('lived in Canada 10 years', () => {
  const oas = single.receivableOas(10, 1000)
  expect(oas).toBe(250);
});

test('lived in Canada 10 years', () => {
  const oas = single.receivableOas(34, 1000)
  expect(oas).toBe(850);
});


// Receivable GIS amounts - Varies according to annual income
// The more income, the less GIS
//
// For Singles, GIS reduces by half for every dollar in income
// Running some examples in this table:
// https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments/tab1-51.html#above
test('no income', () => {
  const gis = single.receivableGis(0, 91729)
  expect(gis).toBe(91729);
});

test('too much income - hits limit', () => {
  const gis = single.receivableGis(1862400, 91729)
  expect(gis).toBe(0);
});

test('valid income - $1,032.00', () => {
  const gis = single.receivableGis(103200, 91729)
  expect(gis).toBe(87429);
});

test('valid income - $1,440.00', () => {
  const gis = single.receivableGis(144000, 91729)
  expect(gis).toBe(85729);
});

test('valid income - $1,920.00', () => {
  const gis = single.receivableGis(192000, 91729)
  expect(gis).toBe(83729);
});

// NOTE ON THE ABOVE!!! ^
// I think there is a mistake in this page:
// https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments/tab1-5.html
// The range $2,040.00 - $2,047.99 only differs by 8 dollars, while all other ranges differ by 24.
// They must have had a typo
// This is throwing off all other numbers in the chart

test('qualified for GIS', () => {
  const qual = single.isGisQualified(1234)
  expect(qual).toBe(true);
});

test('not qualified for GIS', () => {
  const qual = single.isGisQualified(1862400)
  expect(qual).toBe(false);
});
