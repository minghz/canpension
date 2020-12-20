export function receivableOas(yearsInCanada, maxOas, annualIncome) {
  const CLAWBACK_THRESHOLD = 7758000 // yearly income threshold for 2019 https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments.html

  let rawOas = fractionalOas(yearsInCanada, maxOas)

  if(annualIncome < CLAWBACK_THRESHOLD) { return rawOas }

  let clawable = (annualIncome - CLAWBACK_THRESHOLD) * 0.15
  let clawedOas = rawOas - (clawable / 12)
  if(clawedOas > 0) { return clawedOas }
  else              { return 0 }
}

const fractionalOas = (yearsInCanada, maxOas) => {
  if(yearsInCanada < 10) { return 0 }
  if (yearsInCanada < 40) { return (yearsInCanada/40) * maxOas }

  return maxOas 
}
