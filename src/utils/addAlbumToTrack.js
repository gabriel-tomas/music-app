export default (object) => {
  if (!object) return;
  if (typeof object !== 'object') return;
  console.log(object);
  const { tracks, ...rest } = object;
  const itemsTracks = tracks.items.map((item) => {
    item.album = rest;
    return item;
  });
  object.tracks.items = itemsTracks;
  return object;
};
