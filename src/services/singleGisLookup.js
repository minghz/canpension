import data from '../verifiers/single-2020-11-04T03:49:23.009Z.json'

export function receivableGis(annualIncome, receivableOas, standardIncome) {
  // receivable OAS determines the GIS limit
  // standardIncome is generally unchanged, as people need a minumum to survive
  // receivableOas varies significantly as people live in Canada for different
  // numbers of years (i.e. they receive partial OAS)

  let incomeDolars = annualIncome/100
  let receivableCents = 0;

  for(let i = 0; i < data.length; i++) {
    let set = data[i];
    if(incomeDolars >= set.range[0] && incomeDolars <= set.range[1]) {
      //within correct range
      receivableCents = Math.round(set.gis * 100)
      break;
    }
  }

  return receivableCents;
}
