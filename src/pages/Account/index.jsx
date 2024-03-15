import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

import LoadingAllScreen from '../../components/LoadingAllScreen';
import AccountPath from '../../components/AccountPath';

import LoggedContent from './LoggedContent';

export default function Account() {
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
