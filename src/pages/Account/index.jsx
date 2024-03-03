import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';

import * as checkLoginActions from '../../store/modules/checkLogin/actions';

export default function Account() {
  const dispatch = useDispatch();

  dispatch(checkLoginActions.checkLoginRequest());

  return <Form />;
}
