import styled from 'styled-components';
import ModalImage from 'react-modal-image';

export const StyledModalImage = styled(ModalImage)`
  width: 100%;
  heigth: 100%;
  transition: width 250ms cubic-bezier(0.61, 0, 0.51, 1);
  border-radius: 20px;
  margin-top: 30px;
`;

export const ImageGalleryItems = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;
