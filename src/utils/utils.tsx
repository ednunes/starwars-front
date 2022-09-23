import { ItemLink, ItemLinkContainer, Text } from '~/components/StyledComponents/styles';

export const getFormattedDate = (date: string, regional = 'en-US') => {
  const newDate = new Date(date);
  return `${newDate.toLocaleDateString(regional)}`;
};

export const getFormattedDateTime = (date: string, regional = 'en-US') => {
  const newDate = new Date(date);
  return `${newDate.toLocaleDateString(regional)} - ${newDate.toLocaleTimeString(regional)}`;
};

export const convertNumberToRomanNumeral = (number = '') => {
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

export const convertToKm = (value: number): number => {
  return `${value / 1000} Km`;
};

export const formatUrl = (resource: string, url = '') => {
  const id = url.match(/\d+/);
  const url_formated = `/${resource}/${id}`;

  return url_formated;
};

export const formatHeight = (height: string) => {
  const new_height = Number.parseInt(height);
  return typeof new_height === 'number' && isFinite(new_height) ? `${new_height / 100} m` : height;
};

export const formatNumber = (number: string) => {
  const new_number = Number.parseInt(number);

  return typeof new_number === 'number' && isFinite(new_number)
    ? new Intl.NumberFormat('de-DE').format(new_number)
    : 'Unknown';
};

export const formatList = (list: Array<any> = [], default_value = 'N/A') => {
  if (list.length === 0) {
    return default_value;
  }
  return list.join(', ');
};

export function getLink(link = { url: '', name: '' }, resource: string, label: string) {
  const id = link.url.match(/\d+/);
  return (
    <Text key={resource}>
      <span>{label}</span>:
      <strong>
        <ItemLink to={`/${resource}/${id}`}> {link.name}</ItemLink>
      </strong>
    </Text>
  );
}

export function getList(list: Array<any> = [], resource: string, item_key = 'name') {
  if (list.length === 0) {
    return (
      <Text>
        <strong>N/A</strong>
      </Text>
    );
  }

  return list.map((item) => {
    const id = item.url.match(/\d+/);
    return (
      <ItemLinkContainer key={`${resource}_${id}`}>
        <ItemLink to={`/${resource}/${id}`}>{item[item_key]}</ItemLink>
      </ItemLinkContainer>
    );
  });
}

export function getInformations(infos: any, data: any) {
  return infos.map((info: any) => (
    <Text key={info.value}>
      <span>{info.label}</span>: <strong>{data[info.value]}</strong>
    </Text>
  ));
}
