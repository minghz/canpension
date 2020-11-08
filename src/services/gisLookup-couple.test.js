import { couple as receivableGis } from './gisLookup'

// Receivable GIS amounts - Varies according to annual income
// The more income, the less GIS
//
// For Couples that are both receiving OAS
// Running some examples in this table:
// https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments/tab2-1.html

const MAX_OAS = 61414
const STANDARD_INCOME = 116632
const UPPER_INCOME_LIMIT = 2457600

test('no income - receives default GIS', () => {
  let gis = receivableGis(0, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(55218);
});

test('valid income - $816.00', () => {
  let gis = receivableGis(81600, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(53518);
});

test('valid income - $4,368.00', () => {
  const gis = receivableGis(436800, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(45818);
});

test('valid income - $7,344.00', () => {
  const gis = receivableGis(734400, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(36518);
});

test('valid income - $11,280.00', () => {
  const gis = receivableGis(1128000, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(27692);
});

test('valid income - $14,880.00', () => {
  const gis = receivableGis(1488000, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(20192);
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
  expect(gis).toBe(84225);
});

test('partial OAS with valid income - $7,344.00', () => {
  const gis = receivableGis(734400, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(36518);
});

test('partial OAS with income exceeding standard UPPER_INCOME_LIMIT', () => {
  const gis = receivableGis(UPPER_INCOME_LIMIT + 4800, PARTIAL_OAS, STANDARD_INCOME)
  expect(gis).toBe(30607); // is MAX_OAS*20/40
});

// Note how with partial OAS, the upper income limit is ~$14k higher
test('partial OAS with income rendering zero receivable GIS', () => {
  const gis = receivableGis(3932000, PARTIAL_OAS, STANDARD_INCOME)
  expect(gis).toBe(0);
})
