import PropTypes from 'prop-types';
/* import { useSelector } from 'react-redux'; */
import { WrapperLoading } from './styled';

export default function Loading({ isLoading, smallComponent }) {
  /* const isLoading = useSelector((state) => state.loading.isLoading); */

  return isLoading ? (
    <WrapperLoading
      className={`loader ${smallComponent && 'small-component'}`}
    ></WrapperLoading>
  ) : null;
}

Loading.defaultProps = {
  isLoading: false,
  smallComponent: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  smallComponent: PropTypes.bool,
};
