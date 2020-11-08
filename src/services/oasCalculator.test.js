import { receivableOas } from './oasCalculator'

// Receivable OAS amounts - Varies depending on stay in Canada
// This is a simple ratio calculation
// Linear relationship between years lived in Canada and receivable OAS
test('lived in Canada 40 years', () => {
  const oas = receivableOas(40, 1000, 0)
  expect(oas).toBe(1000);
});

test('lived in Canada > 40 years', () => {
  const oas = receivableOas(55, 1000, 0)
  expect(oas).toBe(1000);
});

test('lived in Canada less than 10 years - unqualified', () => {
  const oas = receivableOas(9, 1000, 0)
  expect(oas).toBe(0);
});

test('lived in Canada 20 years', () => {
  const oas = receivableOas(20, 1000, 0)
  expect(oas).toBe(500);
});

test('lived in Canada 10 years', () => {
  const oas = receivableOas(10, 1000, 0)
  expect(oas).toBe(250);
});

test('lived in Canada 10 years', () => {
  const oas = receivableOas(34, 1000, 0)
  expect(oas).toBe(850);
});

const MAX_ANNUAL_INCOME = 12814900

test('annual income surpases upper limit', () => {
  const oas = receivableOas(34, 1000, MAX_ANNUAL_INCOME + 1)
  expect(oas).toBe(0);
});
