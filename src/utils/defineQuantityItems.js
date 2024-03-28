export default () => {
  if (window.innerWidth >= 2048) {
    return 16;
  } else if (window.innerWidth >= 1768) {
    return 14;
  } else if (window.innerWidth >= 1534) {
    return 12;
  } else if (window.innerWidth >= 1270) {
    return 10;
  } else if (window.innerWidth >= 906) {
    return 8;
  }
  return 6;
};
