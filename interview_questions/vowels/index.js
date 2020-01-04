function vowels(str) {
  const matches = str.toLowerCase().match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
