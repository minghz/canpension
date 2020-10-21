export const fmtCents = (cents) => `$ ${Math.round(cents)/100}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
