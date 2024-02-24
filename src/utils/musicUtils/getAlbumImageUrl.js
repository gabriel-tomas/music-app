export default function GetAlbumImageUrl(arrayImages, size) {
  if (arrayImages.length === 0) return '';
  let imageUrl;
  imageUrl = arrayImages.find((item) => item.width === size);
  if (!imageUrl) {
    imageUrl = arrayImages.find((item) => item.height === size);
  }
  if (!imageUrl) {
    imageUrl = arrayImages[0];
  }
  return imageUrl.url;
}
