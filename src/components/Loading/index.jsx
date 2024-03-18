import PropTypes from 'prop-types';
/* import { useSelector } from 'react-redux'; */
import { WrapperLoading } from './styled';

export default function Loading({
  isLoading,
  smallComponent,
  middleComponent,
}) {
  /* const isLoading = useSelector((state) => state.loading.isLoading); */

  return isLoading ? (
    <WrapperLoading
      className={`loader ${smallComponent ? 'small-component' : ''} ${middleComponent ? 'middle-component' : ''}`}
    ></WrapperLoading>
  ) : null;
}

Loading.defaultProps = {
  isLoading: false,
  smallComponent: false,
  middleComponent: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  smallComponent: PropTypes.bool,
  middleComponent: PropTypes.bool,
};
