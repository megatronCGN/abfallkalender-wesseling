const dateFns = require('date-fns');
const localeDe = require('date-fns/locale/de');

class queryDates {
  constructor(date) {
    this.date = date;
    this.heute = this.date;
    this.morgen = new Date(this.heute);
    this.morgen.setDate(this.morgen.getDate() + 1);
    this.format = dateFns.format;
    this.locale = localeDe;
  }

  formatDate(date, format = 'd. MMMM yyyy') {
    return this.format(date, format, { locale: this.locale });
  }

  getDay(date = this.date) {
    return parseInt(String(date.getDate()).padStart(2, '0'), 10);
  }

  tagHeute() {
    return this.getDay(this.heute) - 1;
  }

  tagMorgen() {
    return this.getDay(this.morgen) - 1;
  }

  dieserMonat() {
    return String(this.heute.getMonth()).padStart(2, '0');
  }
}

module.exports = {
  queryDates,
};
