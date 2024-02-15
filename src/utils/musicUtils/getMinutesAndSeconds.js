export default (milliseconds) => {
  const minutes = Math.floor(milliseconds / 1000 / 60);
  const seconds = Math.floor(milliseconds / 1000) % 60;

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
