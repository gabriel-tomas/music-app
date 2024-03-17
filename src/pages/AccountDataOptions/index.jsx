import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { LiaUserEditSolid } from 'react-icons/lia';
import { GoTrash } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';

import AccountPath from '../../components/AccountPath';

import DeleteAccountConfirm from './DeleteAccountConfirm';

import * as deleteAccountActions from '../../store/modules/deleteAccount/actions';

import { ContainerOptions } from './styled';

export default function AccountDataOptions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userIsLoggedIn = useSelector((state) => state.auth.token);

  const [openBoxDeleteConfirm, setOpenBoxDeleteConfirm] = useState(false);

  useEffect(() => {
    if (!userIsLoggedIn) {
      navigate('/account');
      return;
    }
  }, [userIsLoggedIn]);

  const handleSubmit = () => {
    dispatch(deleteAccountActions.userDeleteAccountRequest());
  };

  return (
    userIsLoggedIn && (
      <>
        <AccountPath paths={['Conta', 'Meus Dados']} />
        <ContainerOptions>
          <Link className="option" to="/account/data/edit">
            <div className="left-container">
              <LiaUserEditSolid />
              <span>Editar meus dados</span>
            </div>
            <MdKeyboardArrowRight className="arrow-right" />
          </Link>
          <button
            className="option delete"
            onClick={() => setOpenBoxDeleteConfirm(true)}
          >
            <div className="left-container">
              <GoTrash className="trash-can" />
              <span>Deletar conta</span>
            </div>
            <MdKeyboardArrowRight className="arrow-right" />
          </button>
        </ContainerOptions>
        <DeleteAccountConfirm
          open={openBoxDeleteConfirm}
          handleClose={() => setOpenBoxDeleteConfirm(false)}
          handleSubmit={handleSubmit}
        />
      </>
    )
  );
}
