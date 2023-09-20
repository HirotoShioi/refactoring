export function findMiscreant(people) {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
  return '';
}

export function alertForMiscreant(people) {
  if (findMiscreant(people) !== '') {
    setOffAlarms();
  }
}

function setOffAlarms() {
  console.log('setOffAlarms');
}
