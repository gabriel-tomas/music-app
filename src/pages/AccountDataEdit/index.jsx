import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

/* import LoadingAllScreen from '../../components/LoadingAllScreen';

import LoggedContent from './LoggedContent'; */

import AccountPath from '../../components/AccountPath';

export default function Account() {
  const navigate = useNavigate();
  const userIsLoggedIn = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!userIsLoggedIn) {
      navigate('/account');
      return;
    }
  }, [userIsLoggedIn]);

  useEffect(() => {
    if (!userIsLoggedIn) {
      return;
    }
  }, [userIsLoggedIn]);

  return (
    userIsLoggedIn && (
      <>
        <AccountPath paths={['Conta', 'Meus Dados', 'Editar Meus Dados']} />
        <Form />
      </>
    )
  );
}
