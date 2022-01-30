import { format } from 'date-fns';
import { de } from 'date-fns/locale';

export class queryDates {
  constructor(date) {
    this.date = date || new Date();
    this.heute = this.date;
    this.morgen = new Date(this.heute);
    this.morgen.setDate(this.morgen.getDate() + 1);
    this.format = format;
    this.locale = de;
  }

  formatDate(date, dateFormat = 'd. MMMM yyyy') {
    return this.format(date, dateFormat, { locale: this.locale });
  }

  newDateFromDayAndMonth(day, month) {
    return new Date(this.date.getFullYear(), month, day);
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
    return this.date.getMonth();
  }
}
