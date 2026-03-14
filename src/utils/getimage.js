export const getImageUrl = imageParameter => {
  return new URL(`../assets/images/${imageParameter}`, import.meta.url);
}

export const getIconImageUrl = iconParameter => {
  return new URL(`../assets/icons/${iconParameter}`, import.meta.url);
}

export const getThumbnailImageUrl = thumbnailParameter => {
  return new URL(`../assets/thumbnails/${thumbnailParameter}`, import.meta.url);
}