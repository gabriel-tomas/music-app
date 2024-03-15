import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import * as authActions from '../../store/modules/auth/actions.js';

import LoadingAllScreen from '../../components/LoadingAllScreen';

import { getUserData } from '../../services/backend/user/show';

import AccountPath from '../../components/AccountPath';

import Form from './Form';

export default function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userIsLoggedIn = useSelector((state) => state.auth.token);

  const [isLoading, setIsLoading] = useState(false);
  const [usernameAndEmail, setUsernameAndEmail] = useState('');

  const requestUserData = async () => {
    setIsLoading(true);
    try {
      const response = await getUserData();
      console.log(response);
      setUsernameAndEmail(response.user);
      setIsLoading(false);
    } catch (err) {
      const responseData = get(err.response, 'data', '');
      const status = get(err.response, 'status', 0);
      setIsLoading(false);

      if (status === 401) {
        dispatch(authActions.authFail());
        responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
      }

      if (status === 500) {
        responseData.errorsMsg.forEach((errorMsg) => toast.error(errorMsg));
      }
    }
  };

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

    requestUserData();
  }, [userIsLoggedIn]);

  return (
    userIsLoggedIn && (
      <>
        <AccountPath paths={['Conta', 'Meus Dados', 'Editar Meus Dados']} />
        {usernameAndEmail && (
          <Form
            userName={usernameAndEmail.username}
            userEmail={usernameAndEmail.email}
          />
        )}
        <LoadingAllScreen isLoading={isLoading} />
      </>
    )
  );
}
