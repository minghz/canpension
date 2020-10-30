// GIS for single person who receives an Old Age Security pension
// https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security/payments/tab1-1.html
//
// table 1-1 -> table 1-51
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

const getInterval = (incomeRangeStr) => {
  let low, high;
  [low, high] = incomeRangeStr.split(" - ");

  // strip money formatting characters
  low = low.replace(/\$\s?|(,*)/g, '')
  high = high.replace(/\$\s?|(,*)/g, '')

  return parseFloat(high)+0.01 - parseFloat(low)
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

const intervalExtractor = (row) => {
  let incomeRange = row.children[0].textContent;
  return getInterval(incomeRange)
}

const main = async () => {

  for(let i = 1; i < 52; i++) {
    let pageUrl = tableUrl(i)
    let page = await fetchPage(pageUrl)

    let data = tableParser(page, intervalExtractor)

    console.log(data)
  }

}

main();
