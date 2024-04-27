export default (arrayTracks) => {
  const newArray = [];
  if (Array.isArray(arrayTracks)) {
    arrayTracks.forEach((track) => {
      if (track) {
        newArray.push(track);
      }
    });
  }
  return newArray;
};
