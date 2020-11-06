import data from '../verifiers/coupleWithOas-2020-11-05T02:20:04.663Z.json'

export function receivableGis(annualIncome) {
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
