import PropTypes from 'prop-types';
/* import { useSelector } from 'react-redux'; */
import { WrapperLoading } from './styled';

export default function Loading({ isLoading }) {
  /* const isLoading = useSelector((state) => state.loading.isLoading); */

  return isLoading ? (
    <WrapperLoading className="loader"></WrapperLoading>
  ) : null;
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
