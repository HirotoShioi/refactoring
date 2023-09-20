export function baseCharge(usage) {
  if (usage < 0) {
    return usd(0);
  }
  const BOTTOM = 100;
  const TOP = 200;
  const amount =
    withinBand(usage, 0, BOTTOM) * 0.03 +
    withinBand(usage, BOTTOM, TOP) * 0.05 +
    withinBand(usage, TOP, Infinity) * 0.07;
  return usd(amount);
}

function usd(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount / 100);
}

function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}
