import { ReducerAction, ReducerState } from '../types';

const AppReducer = (
  state: ReducerState,
  action: ReducerAction
): ReducerState => {
  switch (action.type) {
    case 'SET_MENU':
      return { ...state, menuOpen: action.payload.menuState };
    case 'SET_LANGUAGE':
      return { ...state, currentLanguage: action.payload.language };
    default:
      return { ...state };
  }
};

export default AppReducer;
