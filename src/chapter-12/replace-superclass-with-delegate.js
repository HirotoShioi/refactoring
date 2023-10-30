class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  hasTag(arg) {
    return this._tags.includes(arg);
  }
}

class Scroll {
  constructor(id, title, tags, dateLastCleaned) {
    this._id = id;
    this._catalogItem = new CatalogItem(null, title, tags);
    this._lastCleaned = dateLastCleaned;
  }

  get id() {
    return this.id;
  }
  get title() {
    return this._catalogItem.title;
  }
  hasTag(a) {
    return this._catalogItem.hasTag(a);
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag('revered') ? 700 : 1500;
    console.log({
      targetDate,
      threshold,
      daysSinceLastCleaning: this.daysSinceLastCleaning(targetDate),
    });
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return Math.floor((targetDate - this._lastCleaned) / (1000 * 60 * 60 * 24));
  }
}

export const createCatalogItem = (id, title, tags) =>
  new CatalogItem(id, title, tags);

export const createScroll = (id, title, tags, dateLastCleaned) =>
  new Scroll(id, title, tags, dateLastCleaned);
