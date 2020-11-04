// GIS for single person who receives an Old Age Security pension
// https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments/tab1-1.html
//
// table 1-1 -> table 1-51
//
//
// Parses the Canada gov website for the single tables and returns an array of
// objects that represent the annual income range, interval, and expected gis
//
// i.e.
// [
//   { range: [ 0, 23.99 ], interval: 24, gis: 917.29 },
//   { range: [ 24, 47.99 ], interval: 24, gis: 916.29 },
//   { range: [ 48, 71.99 ], interval: 24, gis: 915.29 },
//   { range: [ 72, 95.99 ], interval: 24, gis: 914.29 },
//   ...
// ]
// 
// Finally, it will write it into a JSON file called single.json
//

import https from 'https';
import jsdom, { JSDOM } from 'jsdom';

const tableUrl = (pageNo) => "https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments/tab1-" + pageNo + ".html";

const fetchPage = (url) => new Promise((resolve, reject) => {
  https.get(url, (resp) => {
    let data = "";
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => { data += chunk; });
    // The whole response has been received. Print out the result.
    resp.on('end', () => { resolve(data); });

  }).on("error", (err) => {
    reject("Error: " + err.message);
  });
});

const getIncomeRange = (incomeRangeStr) => {
  let low, high;
  [low, high] = incomeRangeStr.split(" - ");

  // strip money formatting characters
  low = low.replace(/\$\s?|(,*)/g, '')
  high = high.replace(/\$\s?|(,*)/g, '')

  return [parseFloat(low), parseFloat(high)]
}

const getIncomeInterval = (incomeRangeStr) => {
  let low, high;
  [low, high] = getIncomeRange(incomeRangeStr)

  return parseFloat(high)+0.01 - parseFloat(low)
}

const getLowerRange = (incomeRangeStr) => {
  let lowerRange;
  [lowerRange, _] = getIncomeRange(incomeRangeStr)

  return parseFloat(lowerRange)
}

const getGis = (row) => {
  let gisStr = row.children[1].textContent;
  gisStr = gisStr.replace(/\$\s?|(,*)/g, '')

  return parseFloat(gisStr)
}

const intervalExtractor = (row) => {
  let incomeRangeStr = row.children[0].textContent;

  return getIncomeInterval(incomeRangeStr)
}

const incomeRangeExtractor = (row) => {
  let incomeRangeStr = row.children[0].textContent;

  return getIncomeRange(incomeRangeStr)
}

const dataExtractor = (row) => {
  let incomeRangeStr = row.children[0].textContent;

  return {
    range: getIncomeRange(incomeRangeStr),
    interval: getIncomeInterval(incomeRangeStr),
    gis: getGis(row)
  }
}

/* Returns an array of things. One thing per row
 * Composable function
 *
 * data = HTML string of the page
 * extractor = function that takes in a "row" and spits out a thing
 *
 * returns [thing, thing, thing]
 */
const tableParser = (data, extractor) => {
  const { document } = (new JSDOM(data)).window;

  let rows = document.querySelector('.table tbody').children

  let intervals = [];

  for(let i = 0; i < rows.length ; i++) {
    intervals.push(extractor(rows[i]))
  }

  return intervals;
}

const main = async () => {

  let tableData = []

  for(let i = 1; i < 52; i++) {
    let pageUrl = tableUrl(i)

    let page = await fetchPage(pageUrl)

    //let data = tableParser(page, intervalExtractor)
    //let data = tableParser(page, incomeRangeExtractor)
    let data = tableParser(page, dataExtractor)

    tableData.push(data)
  }

  tableData = tableData.flat()
  
  let jsonStr = JSON.stringify(tableData, null, 2); // spacing level = 2

  const fs = require('fs');
  let filename = 'single-' + (new Date()).toISOString() + '.json';
  fs.writeFileSync(filename, jsonStr)
}

main();
