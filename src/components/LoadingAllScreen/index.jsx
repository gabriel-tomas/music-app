import PropTypes from 'prop-types';
import { Container, Loader } from './styled';

export default function Loading({ isLoading, preventPropagation }) {
  if (!isLoading) return <></>;

  return (
    <Container onClick={preventPropagation ? preventPropagation : null}>
      <div></div>
      <Loader />
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
  preventPropagation: null,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  preventPropagation: PropTypes.bool,
};
