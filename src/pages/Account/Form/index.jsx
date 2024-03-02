import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { isEmail } from 'validator';

import * as registerActions from '../../../store/modules/register/actions';
import * as loginActions from '../../../store/modules/login/actions';

import { ContainerTop, ContainerForm, ContainerChangeType } from './styled';

export default function Form() {
  const dispatch = useDispatch();

  const [typeRegister, setTypeRegister] = useState(true);
  const [inputsErrors, setInputsErrors] = useState({
    username: [],
    email: [],
    password: [],
  });
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setInputsErrors({
      username: [],
      email: [],
      password: [],
    });
    setUsername('');
    setEmail('');
    setPassword('');
  }, [typeRegister]);

  const handleInputUserNameChange = (e) => {
    setUsername(e.target.value);

    const errors = { ...inputsErrors };
    errors.username = [];

    if (e.target.value.length < 3 || e.target.value.length > 24) {
      errors.username.push('O Nome deve conter entre 3 e 24 caracteres');
    }

    setInputsErrors(errors);
  };

  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);

    const errors = { ...inputsErrors };
    errors.email = [];

    if (!isEmail(e.target.value)) {
      errors.email.push('E-mail inválido');
    }

    setInputsErrors(errors);
  };

  const handleInputPasswordChange = (e) => {
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

    if (typeRegister) {
      if (username.length < 3 || username.length > 24) {
        errors.username.push('O Nome deve conter entre 3 e 24 caracteres');
      }
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
    e.preventDefault();
    const everythingWasSent = validAll();

    if (
      everythingWasSent &&
      inputsErrors.username.length === 0 &&
      inputsErrors.email.length === 0 &&
      inputsErrors.password.length === 0
    ) {
      typeRegister
        ? dispatch(
            registerActions.registerRequest({ username, email, password }),
          )
        : dispatch(loginActions.loginRequest({ email, password }));
    }
  };

  return (
    <>
      <ContainerTop>
        <h1>{typeRegister ? 'Crie sua conta' : 'Entre na sua conta'}</h1>
      </ContainerTop>
      <ContainerForm className="form font-size-base" onSubmit={handleSubmit}>
        {typeRegister && (
          <div className="container-input">
            <label className="label-placeholder" htmlFor="username">
              Nome de usuário
            </label>
            <input
              className="input-field"
              type="text"
              id="username"
              value={username}
              onChange={handleInputUserNameChange}
            />
            <ul className="container-errors">
              {inputsErrors.username.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="container-input">
          <label className="label-placeholder" htmlFor="email">
            E-mail
          </label>
          <input
            className="input-field"
            type="email"
            id="email"
            value={email}
            onChange={handleInputEmailChange}
          />
          <ul className="container-errors">
            {inputsErrors.email.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
        <div className="container-input">
          <label className="label-placeholder" htmlFor="password">
            Senha
          </label>
          <input
            className="input-field"
            type="password"
            id="password"
            value={password}
            onChange={handleInputPasswordChange}
          />
          <ul className="container-errors">
            {inputsErrors.password.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
        <div className="container-submit">
          <button className="submit-form" type="submit">
            {typeRegister ? 'Registrar-se' : 'Entrar'}
          </button>
        </div>
      </ContainerForm>
      <ContainerChangeType>
        <div className="container-change-type">
          <span>
            {typeRegister ? 'Já possui uma conta?' : 'Não possui uma conta?'}
          </span>
          <button
            className="btn-change"
            type="button"
            onClick={() => setTypeRegister(!typeRegister)}
          >
            {typeRegister ? 'Faça login aqui' : 'Inscreva-se'}
          </button>
        </div>
      </ContainerChangeType>
    </>
  );
}
