const data = require('./kalenderData');

module.exports = () => {
  function abfuhrDesAktuellenMonats(monat) {
    const abfuhren = Object.keys(data.data).filter((abfuhr) => abfuhr.indexOf(data.monatMap[monat]) > -1);

    // Edge Case: Nur Januar werden Weihnachtsbäume abgeholt
    if (monat === '00') abfuhren.push('Weihnachtsbäume');

    return abfuhren;
  }

  function abfuhrbezirkeAbfuhrAnTag(abfuhr, tag, seperator = '+') {
    // Vorsicht: Der numerische Tag heute gibt die Abfuhr von Morgen zurück: off by one
    return data.data[abfuhr][tag] ? data.data[abfuhr][tag].split(seperator).join(' und ') : null;
  }

  return {
    abfuhrDesAktuellenMonats,
    abfuhrbezirkeAbfuhrAnTag,
  };
};
