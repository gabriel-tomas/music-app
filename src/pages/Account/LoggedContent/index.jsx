import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LuUser2 } from 'react-icons/lu';
import { IoInformationOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';

import * as authActions from '../../../store/modules/auth/actions';

import { ContainerOptions, ContainerLoggedContent } from './styled';

export default function NotLogged() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.authFail());
    toast.info('Logout feito com sucesso');
  };

  return (
    <ContainerLoggedContent>
      <ContainerOptions>
        <Link className="option" to="/account/data">
          <div className="left-container">
            <LuUser2 />
            <span>Meus dados</span>
          </div>
          <MdKeyboardArrowRight className="arrow-right" />
        </Link>
        <button className="option">
          <div className="left-container">
            <IoInformationOutline />
            <span>Informação</span>
          </div>
          <MdKeyboardArrowRight className="arrow-right" />
        </button>
      </ContainerOptions>
      <button className="logout-button" onClick={handleLogout}>
        Sair da conta
      </button>
    </ContainerLoggedContent>
  );
}
