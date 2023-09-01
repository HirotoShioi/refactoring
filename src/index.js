import { statement, invoice, plays } from './statement.js';

async function main() {
  const result = statement(invoice[0], plays);
  console.log(result);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
