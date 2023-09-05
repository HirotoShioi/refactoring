export function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePriceData(product, quantity);
  return applyShipping(priceData, shippingMethod);
}

const calculatePriceData = (product, quantity) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  return { basePrice, quantity, discount };
};
const applyShipping = (priceData, shippingMethod) => {
  const { quantity, discount, basePrice } = priceData;
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  return basePrice - discount + shippingCost;
};
