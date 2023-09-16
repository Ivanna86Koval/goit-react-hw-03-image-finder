import PropTypes from 'prop-types';
import React from 'react';
import { GalleryItem } from '../ImageGalleryItem/ImageGalleryItem.js';
import { ImageList } from './ImageGallery.styled.js';

export const ImageGallery = props => {
  return (
    <>
      <ImageList>
        <GalleryItem images={props.images} />
      </ImageList>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
