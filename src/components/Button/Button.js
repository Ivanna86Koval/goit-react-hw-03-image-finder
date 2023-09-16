import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

export const Button = (props) => {
  return (
      <LoadMoreBtn type="button" onClick={(e) => props.loadMore(e)}>
        Load more
      </LoadMoreBtn>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
