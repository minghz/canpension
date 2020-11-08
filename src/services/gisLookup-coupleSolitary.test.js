import { coupleSolitary as receivableGis } from './gisLookup'

// Receivable GIS amounts - Varies according to annual income
// The more income, the less GIS
//
// For Couples that are both receiving OAS
// Running some examples in this table:
// https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments/tab2-1.html

const MAX_OAS = 61414
const STANDARD_INCOME = 153143
const UPPER_INCOME_LIMIT = 4464000

test('no income - receives default GIS', () => {
  let gis = receivableGis(0, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(STANDARD_INCOME - MAX_OAS);
});

test('valid income - $4,384.00', () => {
  let gis = receivableGis(438400, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(91329);
});

test('valid income - $14,880.00', () => {
  const gis = receivableGis(1488000, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(64829);
});

test('valid income - $24,624.00', () => {
  const gis = receivableGis(2462400, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(41621);
});

test('valid income - $33,600.00', () => {
  const gis = receivableGis(3360000, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(22921);
});

test('valid income - $41,520.00', () => {
  const gis = receivableGis(4152000, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(6421);
});

test('income at GIS qualification limit', () => {
  const gis = receivableGis(UPPER_INCOME_LIMIT, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(0);
});

test('income exceed GIS qualification limit ', () => {
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

test('partial OAS with income - $816.00', () => {
  const gis = receivableGis(81600, PARTIAL_OAS, STANDARD_INCOME)
  expect(gis).toBe(122436);
});

test('partial OAS with valid income - $7,344.00', () => {
  const gis = receivableGis(734400, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(88329);
});

test('partial OAS with income exceeding standard UPPER_INCOME_LIMIT', () => {
  const gis = receivableGis(UPPER_INCOME_LIMIT + 4800, PARTIAL_OAS, STANDARD_INCOME)
  expect(gis).toBe(30607); // is MAX_OAS*20/40
});

// Note how with partial OAS, the upper income limit is ~$14k higher
test('partial OAS with income rendering zero receivable GIS', () => {
  const gis = receivableGis(59400000, PARTIAL_OAS, STANDARD_INCOME)
  expect(gis).toBe(0);
})
