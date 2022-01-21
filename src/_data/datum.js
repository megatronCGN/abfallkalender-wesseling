const heute = new Date();
const morgen = new Date(heute);
morgen.setDate(morgen.getDate() + 1);

const dd = (date) => String(date.getDate()).padStart(2, '0');
const getTagHeute = (int) => int ? parseInt(dd(heute)) : tagHeute;
const getTagMorgen = (int) => int ? parseInt(dd(morgen)) : tagMorgen;
const queryTagHeute = getTagHeute(true) - 1;
const queryTagMorgen = getTagMorgen(true) - 1;
const monat = () => String(heute.getMonth()).padStart(2, '0');

module.exports = {
  heute,
  morgen,
  monat,
  queryTagHeute,
  queryTagMorgen,
};
