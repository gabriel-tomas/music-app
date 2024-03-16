import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { isEmail } from 'validator';

import ConfirmEditUserData from '../ConfirmEditUserData';

import { ContainerWrapperForm, ContainerTop, ContainerForm } from './styled';

import * as userActions from '../../../store/modules/user/actions';

export default function Form({ userName, userEmail }) {
  const dispatch = useDispatch();

  const [editForm, setEditForm] = useState(false);
  const [inputsErrors, setInputsErrors] = useState({
    username: [],
    email: [],
    password: [],
  });
  const [openBoxConfirm, setOpenBoxConfirm] = useState(false);
  const [username, setUsername] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState('**********');

  const handleInputUserNameChange = (e) => {
    if (!editForm) return;
    setUsername(e.target.value);

    const errors = { ...inputsErrors };
    errors.username = [];

    if (e.target.value.length < 3 || e.target.value.length > 24) {
      errors.username.push('O Nome deve conter entre 3 e 24 caracteres');
    }

    setInputsErrors(errors);
  };

  const handleInputEmailChange = (e) => {
    if (!editForm) return;
    setEmail(e.target.value);

    const errors = { ...inputsErrors };
    errors.email = [];

    if (!isEmail(e.target.value)) {
      errors.email.push('E-mail inválido');
    }

    setInputsErrors(errors);
  };

  const handleInputPasswordChange = (e) => {
    if (!editForm) return;
    setPassword(e.target.value);

    const errors = { ...inputsErrors };
    errors.password = [];

    if (e.target.value.length < 8 || e.target.value.length > 32) {
      errors.password.push('A Senha deve conter entre 8 e 32 caracteres');
    }

    setInputsErrors(errors);
  };

  const validAll = () => {
    const errors = { ...inputsErrors };
    errors.username = [];
    errors.email = [];
    errors.password = [];

    if (username.length < 3 || username.length > 24) {
      errors.username.push('O Nome deve conter entre 3 e 24 caracteres');
    }

    if (!isEmail(email)) {
      errors.email.push('E-mail inválido');
    }

    if (password.length < 8 || password.length > 32) {
      errors.password.push('A Senha deve conter entre 8 e 32 caracteres');
    }

    setInputsErrors(errors);

    if (
      errors.username.length === 0 &&
      errors.email.length === 0 &&
      errors.password.length === 0
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    if (!editForm) return;
    e.preventDefault();
    const everythingWasSent = validAll();

    if (
      everythingWasSent &&
      inputsErrors.username.length === 0 &&
      inputsErrors.email.length === 0 &&
      inputsErrors.password.length === 0
    ) {
      dispatch(
        userActions.userUpdateRequest({
          username,
          email,
          password,
        }),
      );
    }
  };

  const handleSubmitCheck = (e) => {
    if (!editForm) return;
    e.preventDefault();
    const everythingWasSent = validAll();

    if (
      everythingWasSent &&
      inputsErrors.username.length === 0 &&
      inputsErrors.email.length === 0 &&
      inputsErrors.password.length === 0
    ) {
      setOpenBoxConfirm(true);
    }
  };

  const handleEditForm = (e) => {
    e.preventDefault();
    setEditForm(true);
    setPassword('');
  };

  const handleCancelEditForm = () => {
    setEditForm(false);
    setUsername(userName);
    setEmail(userEmail);
    setPassword('**********');
  };

  return (
    <ContainerWrapperForm>
      <ContainerTop>
        <h1>Editar meus dados</h1>
      </ContainerTop>
      <ContainerForm
        className="form font-size-base"
        onSubmit={handleSubmitCheck}
      >
        <div className={`container-input ${!editForm ? 'blocked' : ''}`}>
          <label className="label-placeholder" htmlFor="username">
            Nome de usuário
          </label>
          <input
            className="input-field"
            type="text"
            id="username"
            value={username}
            onChange={handleInputUserNameChange}
            disabled={!editForm}
          />
          <ul className="container-errors">
            {inputsErrors.username.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
        <div className={`container-input ${!editForm ? 'blocked' : ''}`}>
          <label className="label-placeholder" htmlFor="email">
            E-mail
          </label>
          <input
            className="input-field"
            type="email"
            id="email"
            value={email}
            onChange={handleInputEmailChange}
            disabled={!editForm}
          />
          <ul className="container-errors">
            {inputsErrors.email.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
        <div className={`container-input ${!editForm ? 'blocked' : ''}`}>
          <label className="label-placeholder" htmlFor="password">
            Senha
          </label>
          <input
            className="input-field"
            type="password"
            id="password"
            value={password}
            onChange={handleInputPasswordChange}
            disabled={!editForm}
          />
          <ul className="container-errors">
            {inputsErrors.password.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
        <div className="container-submit">
          {editForm && (
            <button
              className="cancel-submit"
              type="button"
              onClick={handleCancelEditForm}
            >
              Cancelar
            </button>
          )}
          <button
            className={`submit-form ${!editForm && 'submit-type'}`}
            type={editForm ? 'submit' : 'button'}
            onClick={!editForm ? handleEditForm : null}
          >
            {editForm ? 'Salvar' : 'Editar'}
          </button>
        </div>
      </ContainerForm>
      <ConfirmEditUserData
        open={openBoxConfirm}
        handleClose={() => setOpenBoxConfirm(false)}
        handleSubmit={handleSubmit}
      />
    </ContainerWrapperForm>
  );
}

Form.propTypes = {
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
};
