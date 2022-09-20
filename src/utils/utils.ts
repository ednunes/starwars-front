export const formatDate = (date: string) => {
  return date.split('-').reverse().join('/');
};

export const convertNumberToRomanNumeral = (number: number) => {
  const ROMAN_NUMERAL_CODES = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
  ];

  let romanNumeral = '';
  const digits = number.toString().split('').reverse();
  digits.forEach((digit) => {
    romanNumeral = ROMAN_NUMERAL_CODES[parseInt(digit)] + romanNumeral;
  });
  return romanNumeral;
};

export const formatUrl = (resource, url) => {
  url = url.substring(0, url.length - 1);
  const url_formated = `${resource}/${url.substring(url.lastIndexOf('/') + 1)}`;

  return url_formated;
};

export const formatHeight = (height) => {
  return `${height / 100} m`;
};

export const formatList = (list, default_value) => {
  if (list.length === 0) {
    return default_value;
  }
  return list.join(', ');
};
