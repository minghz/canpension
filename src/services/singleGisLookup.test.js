import { receivableGis } from './singleGisLookup'

// Receivable GIS amounts - Varies according to annual income
// The more income, the less GIS
//
// For Singles, GIS reduces by half for every dollar in income
// Running some examples in this table:
// https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments/tab1-51.html#above
//
// REFERENCE: https://retirehappy.ca/receiving-partial-oas-pension-affects-gis-amounts/
//
// NOTE - as of Nov 2020
// https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments/tab1-5.html
// The range $2,040.00 - $2,047.99 only differs by 8 dollars, while all other ranges differ by 24.
// The parsed lookup tables should contain the source of truth
// (Perhaps need to be updated every year or so)

const MAX_OAS = 61414
const STANDARD_INCOME = 153143
const UPPER_INCOME_LIMIT = 1862400

test('no income - receives default GIS', () => {
  let gis = receivableGis(0, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(91729);
});

test('valid income - $1,032.00', () => {
  let gis = receivableGis(103200, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(87429);
});

test('valid income - $1,440.00', () => {
  const gis = receivableGis(144000, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(85729);
});

test('valid income - $1,920.00', () => {
  const gis = receivableGis(192000, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(83729);
});

test('valid income - $4,304.00', () => {
  const gis = receivableGis(430400, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(69029);
});

test('valid income - $8,112.00', () => {
  const gis = receivableGis(811200, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(45229);
});

test('valid income - $10,800.00', () => {
  const gis = receivableGis(1080000, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(32521);
});

test('valid income - $18,576.00', () => {
  const gis = receivableGis(1857600, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(121);
});

test('income at GIS qualification limit', () => {
  const gis = receivableGis(UPPER_INCOME_LIMIT, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(0);
});

test('income exceed GIS qualification limit ', () => {
  const gis = receivableGis(UPPER_INCOME_LIMIT + 100, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(0);
});
