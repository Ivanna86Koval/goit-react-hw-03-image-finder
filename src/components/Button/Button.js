import PropTypes from 'prop-types';
import { LoadMoreBtn, StyledDivWrap } from './Button.styled';

export const Button = props => {
  return (
    <StyledDivWrap>
      <LoadMoreBtn type="button" onClick={e => props.loadMore(e)}>
        Load more
      </LoadMoreBtn>
    </StyledDivWrap>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
