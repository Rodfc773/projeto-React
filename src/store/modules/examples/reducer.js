import * as types from '../types';

const initialState = {
  buttonWasClicked: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.clickedButtonSuccess: {
      const newState = { ...state };
      newState.buttonWasClicked = !newState.buttonWasClicked;
      return newState;
    }

    case types.clickedButtonRequest: {
      console.log('Fazendo requisição');
      return NaN;
    }

    case types.clickedButtonFailure: {
      console.log('Falhou');
      return NaN;
    }

    default: {
      return state;
    }
  }
}
