import { useState } from 'react';

import { ContainerTop, ContainerForm, ContainerChangeType } from './styled';

export default function Form() {
  const [typeRegister, setTypeRegister] = useState(true);

  return (
    <>
      <ContainerTop>
        <h1>{typeRegister ? 'Crie sua conta' : 'Entre na sua conta'}</h1>
      </ContainerTop>
      <ContainerForm className="form font-size-base">
        {typeRegister && (
          <div className="container-input">
            <label className="label-placeholder" htmlFor="username">
              Nome de usuário
            </label>
            <input className="input-field" type="text" id="username" />
          </div>
        )}
        <div className="container-input">
          <label className="label-placeholder" htmlFor="email">
            E-mail
          </label>
          <input className="input-field" type="email" id="email" />
        </div>
        <div className="container-input">
          <label className="label-placeholder" htmlFor="password">
            Senha
          </label>
          <input className="input-field" type="password" id="password" />
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
