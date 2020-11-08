import { single as receivableGis } from './gisLookup'

// Receivable GIS amounts - Varies according to annual income
// The more income, the less GIS
//
// Running some examples in this table:
// https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments/tab1-51.html#above
//
// For Singles, GIS reduces by half for every dollar in income
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

test('income exceed GIS qualification limit', () => {
  const gis = receivableGis(UPPER_INCOME_LIMIT + 2400, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(0);
});

// Testing partial OAS amounts
// This means that the standard UPPER_INCOME_LIMIT does not apply
const PARTIAL_OAS = Math.round(MAX_OAS * 20 / 40)

test('partial OAS with no income', () => {
  const gis = receivableGis(0, PARTIAL_OAS, STANDARD_INCOME)
  expect(gis).toBe(STANDARD_INCOME - PARTIAL_OAS);
});

test('partial OAS with income - $1,920.00', () => {
  const gis = receivableGis(192000, PARTIAL_OAS, STANDARD_INCOME)
  expect(gis).toBe(114436);
});

test('partial OAS with income - $10,800.00', () => {
  const gis = receivableGis(1080000, PARTIAL_OAS, STANDARD_INCOME)
  expect(gis).toBe(63228);
});

test('partial OAS with income at standard UPPER_INCOME_LIMIT', () => {
  const gis = receivableGis(UPPER_INCOME_LIMIT, PARTIAL_OAS, STANDARD_INCOME)
  expect(gis).toBe(30707);
});

test('partial OAS with income exceeding standard UPPER_INCOME_LIMIT', () => {
  const gis = receivableGis(UPPER_INCOME_LIMIT + 4800, PARTIAL_OAS, STANDARD_INCOME)
  expect(gis).toBe(30507);
});

// Note how with partial OAS, the upper income limit is ~$3k higher
test('partial OAS with income rendering zero receivable GIS', () => {
  const gis = receivableGis(2600000, PARTIAL_OAS, STANDARD_INCOME)
  expect(gis).toBe(0);
})
