import { receivableGis } from './coupleWithOasGisLookup'

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
  const gis = receivableGis(UPPER_INCOME_LIMIT + 100, MAX_OAS, STANDARD_INCOME)
  expect(gis).toBe(0);
});
