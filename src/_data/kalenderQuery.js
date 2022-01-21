const data = require('./kalenderData');
const datum = require('./datum');

module.exports = () => {
  function abfuhrDesAktuellenMonats() {
    const abfuhren = Object.keys(data.data).filter((abfuhr) => abfuhr.indexOf(data.monatMap[datum.monat()]) > -1);

    // Edge Case: Nur Januar werden Weihnachtsbäume abgeholt
    if (datum.monat === '00') abfuhren.push('Weihnachtsbäume');

    return abfuhren;
  }

  function abfuhrbezirkeAbfuhrAnTag(abfuhr, tag, seperator = '+') {
    // Vorsicht: Der numerische Tag heute gibt die Abfuhr von Morgen zurück: off by one
    return data.data[abfuhr][tag] ? data.data[abfuhr][tag].split(seperator) : null;
  }

  return {
    abfuhrDesAktuellenMonats,
    abfuhrbezirkeAbfuhrAnTag,
  };
};
