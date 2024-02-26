import { useSelector } from 'react-redux';
import { WrapperLoading } from './styled';

export default function Loading() {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return isLoading ? (
    <WrapperLoading className="loader"></WrapperLoading>
  ) : null;
}
