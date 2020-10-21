export function receivableOas(yearsInCanada, maxOas) {
  if(yearsInCanada < 10) { return 0 }
  if (yearsInCanada < 40) { return (yearsInCanada/40) * maxOas }

  return maxOas 
}

export function receivableGis(annualIncome, receivableOas, standardIncome) {
  // receivable OAS determines the GIS limit
  // standardIncome is generally unchanged, as people need a minumum to survive
  // receivableOas varies significantly as people live in Canada for different
  // numbers of years (i.e. they receive partial OAS)
  const gisLimit = standardIncome - receivableOas

  const receivable = gisLimit - annualIncome/12/2

  return receivable > 0 ? receivable : 0
}
