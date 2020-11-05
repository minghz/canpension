export function receivableOas(yearsInCanada, maxOas) {
  if(yearsInCanada < 10) { return 0 }
  if (yearsInCanada < 40) { return (yearsInCanada/40) * maxOas }

  return maxOas 
}
