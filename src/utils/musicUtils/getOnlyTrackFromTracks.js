export default (arrayTracks) => {
  let finalArray = [];
  try {
    arrayTracks.forEach((track) => {
      finalArray.push(track.track);
    });
  } catch (err) {
    finalArray = null;
  }
  return finalArray || arrayTracks;
};
