import React from 'react';
import { StyledModalImage } from './ImageGalleryItem.styled';

export const GalleryItem = ({ images }) => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <StyledModalImage
        key={id}
        small={webformatURL}
        large={largeImageURL}
        alt={tags}
        showRotate
      />
    );
  });
};
