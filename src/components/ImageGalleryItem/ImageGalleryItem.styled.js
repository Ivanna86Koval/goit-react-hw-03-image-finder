import styled from 'styled-components';
import ModalImage from 'react-modal-image';

export const StyledModalImage = styled(ModalImage)`
 width: 100%;
  height: 230px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;}
`;

export const ImageGalleryItems = styled.ul`
 border-radius: 8px;
`;
