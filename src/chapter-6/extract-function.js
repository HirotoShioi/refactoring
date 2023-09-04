export const printOwing = (invoice) => {
  printBanner();
  // record due date
  recordDueDate(invoice);
  // print details
  printDetails(invoice, calculateOutstanding(invoice));
};

const recordDueDate = (invoice) => {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );
};

const printBanner = () => {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
};

const printDetails = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};

const calculateOutstanding = (invoice) => {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
};
