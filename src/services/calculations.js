export function receivableOas(yearsInCanada, maxOas) {
  if(yearsInCanada < 10) { return 0 }
  if (yearsInCanada < 40) { return (yearsInCanada/40) * maxOas }

  return maxOas 
}

export function receivableGis(annualIncome, maxGis) {
  if(!isGisQualified(annualIncome)) { return 0 }

  return maxGis - annualIncome/12/2
}

export function isGisQualified(annualIncome) {
  return annualIncome < 1862400 ? true : false
}
