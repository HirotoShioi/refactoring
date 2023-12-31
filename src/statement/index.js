import createStatementdata from './createStatementData.js';
import { plays, invoice } from './data.js';

export { plays, invoice };

export function statement(invoice, plays) {
  return renderPlainText(createStatementdata(invoice, plays));
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;
  for (const perf of data.performances) {
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
    } seats)\n`;
  }
  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
}

export const htmlStatement = function (invoice, plays) {
  return renderHtml(createStatementdata(invoice, plays));
};

function renderHtml(data) {
  let result = `<h1>Statement for ${data.customer}</h1>\n`;
  result += '<table>\n';
  result += ' <tr><th>play</th><th>seats</th><th>cost</th></tr>\n';
  for (const perf of data.performances) {
    result += ` <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }
  result += '</table>\n';
  result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`;
  return result;
}
