import { useDispatch } from 'react-redux';
import { ContainerLoggedContent } from './styled';
import { toast } from 'react-toastify';

import * as authActions from '../../../store/modules/auth/actions';

export default function NotLogged() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.authFail());
    toast.info('Logout feito com sucesso');
  };

  return (
    <ContainerLoggedContent>
      <button className="logout-button" onClick={handleLogout}>
        Sair da conta
      </button>
    </ContainerLoggedContent>
  );
}
