import PropTypes from 'prop-types';
import { ImageGalleryItem, StyledModalImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images }) => {
  return (
    <ImageGalleryItem>
      {images.map(
        ({ id, webformatURL, largeImageURL, hideDownload, hideZoom }) => {
          return (
            <StyledModalImage
              className="modal"
              key={id}
              small={webformatURL}
              large={largeImageURL}
              hideDownload
              hideZoom
            />
          );
        }
      )}
    </ImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
