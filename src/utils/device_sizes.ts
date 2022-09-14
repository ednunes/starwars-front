const device_size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${device_size.mobileS})`,
  mobileM: `(min-width: ${device_size.mobileM})`,
  mobileL: `(min-width: ${device_size.mobileL})`,
  tablet: `(min-width: ${device_size.tablet})`,
  laptop: `(min-width: ${device_size.laptop})`,
  laptopL: `(min-width: ${device_size.laptopL})`,
  desktop: `(min-width: ${device_size.desktop})`,
  desktopL: `(min-width: ${device_size.desktop})`,
};
