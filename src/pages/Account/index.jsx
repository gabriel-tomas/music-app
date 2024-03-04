import { useSelector } from 'react-redux';
import Form from './Form';

import LoggedContent from './LoggedContent';

export default function Account() {
  const userIsLoggedIn = useSelector((state) => state.auth.token);

  return !userIsLoggedIn ? <Form /> : <LoggedContent />;
}
