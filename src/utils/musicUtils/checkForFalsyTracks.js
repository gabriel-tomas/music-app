export default (arrayTracks) => {
  const newArray = [];
  arrayTracks.forEach((track) => {
    if (track) {
      newArray.push(track);
    }
  });
  return newArray;
};
