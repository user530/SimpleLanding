import React, { useContext, useReducer } from 'react';
import { AppContextType, AppLanguages, ReducerState } from '../types';
import Reducer from './reducer';

const defaultValue: ReducerState = {
  menuOpen: false,
  currentLanguage: 'En',
};

const AppContext = React.createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(Reducer, defaultValue);

  const setMenu = (menuOpen: boolean) =>
    dispatch({ type: 'SET_MENU', payload: { menuState: menuOpen } });

  const setLanguage = (language: AppLanguages) =>
    dispatch({ type: 'SET_LANGUAGE', payload: { language: language } });

  return (
    <AppContext.Provider value={{ ...state, setMenu, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
