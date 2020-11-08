export function receivableOas(yearsInCanada, maxOas, annualIncome) {
  const MAX_ANNUAL_INCOME = 12814900
  if(annualIncome > MAX_ANNUAL_INCOME) { return 0 }

  if(yearsInCanada < 10) { return 0 }
  if (yearsInCanada < 40) { return (yearsInCanada/40) * maxOas }

  return maxOas 
}
