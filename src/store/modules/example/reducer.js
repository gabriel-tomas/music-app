import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Requisição feita com sucesso');
      const newState = { ...state };
      newState.botaoClicado = newState.botaoClicado ? false : true;
      return newState;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Fazendo requisição');
      return state;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Falha na requisição');
      return state;
    }

    default: {
      return state;
    }
  }
};
