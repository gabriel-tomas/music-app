import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Form from './Form';

import * as authActions from '../../store/modules/auth/actions';

import LoadingAllScreen from '../../components/LoadingAllScreen';
import AccountPath from '../../components/AccountPath';

import LoggedContent from './LoggedContent';

export default function Account() {
  const dispatch = useDispatch();

  const userIsLoggedIn = useSelector((state) => state.auth.token);

  const isLoadingAuth = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    if (isLoadingAuth) {
      document.body.classList.add('back-blocker');
    } else {
      document.body.classList.remove('back-blocker');
      document.body.removeAttribute('class');
    }
  }, [isLoadingAuth]);

  useEffect(() => {
    if (isLoadingAuth) {
      dispatch(authActions.authFail());
    }
  }, []);

  return !userIsLoggedIn ? (
    <>
      <Form /> <LoadingAllScreen isLoading={isLoadingAuth} />
    </>
  ) : (
    <>
      <AccountPath paths={['Conta']} />
      <LoggedContent />
    </>
  );
}
