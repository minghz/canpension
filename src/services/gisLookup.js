import dataSingle from '../verifiers/single-2020-11-04T03:49:23.009Z.json'
import dataCouple from '../verifiers/coupleWithOas-2020-11-05T02:20:04.663Z.json'
import dataCoupleSolitary from '../verifiers/coupleWithSolitaryOas-2020-11-07T06:36:23.647Z.json'

export const single = (annualIncome, receivableOas, standardIncome) => {
  const UPPER_INCOME_LIMIT = 1862400
  const UPPER_DECREASE_RATE = 24
  const DATA = dataSingle
 
  return calculateGis(
    DATA,
    annualIncome,
    UPPER_INCOME_LIMIT,
    UPPER_DECREASE_RATE,
    standardIncome,
    receivableOas)
}

export const couple = (annualIncome, receivableOas, standardIncome) => {
  const UPPER_INCOME_LIMIT = 2457600
  const UPPER_DECREASE_RATE = 48
  const DATA = dataCouple

  return calculateGis(
    DATA,
    annualIncome,
    UPPER_INCOME_LIMIT,
    UPPER_DECREASE_RATE,
    standardIncome,
    receivableOas)
}

export const coupleSolitary = (annualIncome, receivableOas, standardIncome) => {
  const UPPER_INCOME_LIMIT = 4464000
  const UPPER_DECREASE_RATE = 48
  const DATA = dataCoupleSolitary

  return calculateGis(
    DATA,
    annualIncome,
    UPPER_INCOME_LIMIT,
    UPPER_DECREASE_RATE,
    standardIncome,
    receivableOas)
}

const calculateGis = (
  data,
  annualIncome,
  upperIncomeLimit,
  upperDecreaseRate,
  standardIncome,
  receivableOas
) => {
  const reducibleAmount = reducible(data, annualIncome, upperIncomeLimit, upperDecreaseRate)

  return receivable(standardIncome, receivableOas, reducibleAmount)
}

const receivable = (standardIncome, receivableOas, reducibleAmount) => {
  // the upper limit of how much GIS can be received
  const gisLimit = standardIncome - receivableOas

  const receivable = gisLimit - reducibleAmount

  return receivable > 0 ? receivable : 0;
}

const reducible = (data, annualIncome, upperIncomeLimit, upperDecreaseRate) => {
  const MAX_GIS = data[0].gis * 100

  let incomeDolars = annualIncome/100
  for(let i = 0; i < data.length; i++) {
    let set = data[i];

    if(incomeDolars >= set.range[0] && incomeDolars <= set.range[1]) {
      return Math.round(MAX_GIS - set.gis*100);
    }
  }

  // the annual income falls beyond what the table provides
  // determined by upperDecreaseRate per dollar increas
  const additionalReducible = (annualIncome - upperIncomeLimit) / upperDecreaseRate

  return Math.round(MAX_GIS + additionalReducible)
}
