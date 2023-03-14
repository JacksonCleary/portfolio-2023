import * as React from 'react';
import { state as globalState, State as GlobalStateModel } from '../state';

type MaskProviderState = GlobalStateModel['mask'];

type Action = {
  type: 'placeholder';
  data: {};
};

type Dispatch = (action: Action) => void;
type State = MaskProviderState;
type MaskProviderProps = { children: React.ReactNode };

const MaskContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function maskReducer(state: State, action: Action) {
  const newState = { ...state };
  switch (action.type) {
  }
  return newState;
}

function MaskProvider({ children }: MaskProviderProps) {
  const [state, dispatch] = React.useReducer(maskReducer, globalState.mask);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return <MaskContext.Provider value={value}>{children}</MaskContext.Provider>;
}

function useMask() {
  const context = React.useContext(MaskContext);
  if (context === undefined) {
    throw new Error('useMask must be used within a MaskProvider');
  }
  return context;
}

export { MaskProvider, useMask, MaskContext };
