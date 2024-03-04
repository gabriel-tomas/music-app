import { useSelector } from 'react-redux';
import Form from './Form';

export default function Account() {
  const userIsLoggedIn = useSelector((state) => state.auth.token);

  return !userIsLoggedIn ? <Form /> : <h1>[Content when user is logged in]</h1>;
}
