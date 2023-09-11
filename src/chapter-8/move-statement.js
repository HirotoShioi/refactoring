export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

export function photoDiv(p) {
  return ['<div>', emitPhotoData(p), '</div>'].join('\n');
}

function emitPhotoData(p) {
  const result = [];
  result.push(`<p>title: ${p.title}</p>`);
  result.push(`<p>location: ${p.location}</p>`);
  result.push(`<p>date: ${p.date.toDateString()}</p>`);
  return result.join('\n');
}
