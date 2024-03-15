import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { LiaUserEditSolid } from 'react-icons/lia';
import { GoTrash } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { ContainerOptions } from './styled';

export default function AccountDataOptions() {
  const navigate = useNavigate();
  const userIsLoggedIn = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!userIsLoggedIn) {
      navigate('/account');
      return;
    }
  }, [userIsLoggedIn]);

  return (
    <ContainerOptions>
      <Link className="option" to="/account/data/edit">
        <div className="left-container">
          <LiaUserEditSolid />
          <span>Editar meus dados</span>
        </div>
        <MdKeyboardArrowRight className="arrow-right" />
      </Link>
      <button className="option delete">
        <div className="left-container">
          <GoTrash className="trash-can" />
          <span>Deletar conta</span>
        </div>
        <MdKeyboardArrowRight className="arrow-right" />
      </button>
    </ContainerOptions>
  );
}
