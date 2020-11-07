import data from '../verifiers/coupleWithOas-2020-11-05T02:20:04.663Z.json'

export function receivableGis(annualIncome, receivableOas, standardIncome) {

  // the upper limit of how much GIS can be received
  const gisLimit = standardIncome - receivableOas

  const receivable = gisLimit - reducible(annualIncome)

  return receivable > 0 ? receivable : 0;
}

// The reducible amount is simply the index of the range-ordered table.
// This is because every row of the table has GIS amount reduced by 1
function reducible(annualIncome) {
  const MAX_GIS = data[0].gis * 100
  const UPPER_INCOME_LIMIT = 2457600

  let incomeDolars = annualIncome/100
  for(let i = 0; i < data.length; i++) {
    let set = data[i];

    if(incomeDolars >= set.range[0] && incomeDolars <= set.range[1]) {
      return Math.round(MAX_GIS - set.gis*100);
    }
  }

  // the annual income falls beyond what the table provides
  // assume standard 24 interval per dollar decrease
  // 100/4800
  const additionalReducible = (annualIncome - UPPER_INCOME_LIMIT) / 48

  return Math.round(MAX_GIS + additionalReducible)
}
