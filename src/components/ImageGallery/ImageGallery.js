import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ props }) => {
  return (
    <ImageList>
      <ImageGalleryItem images={props.images} />
    </ImageList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
