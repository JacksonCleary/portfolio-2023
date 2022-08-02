import * as React from 'react';
import { state as globalState, State as GlobalStateModel } from '../state';

type BackgroundAnimationProviderState = GlobalStateModel['animation'];

type Action =
  | {
      type: 'updateDimensions';
      data: {
        width: number;
        height: number;
      };
    }
  | { type: 'init' };
type Dispatch = (action: Action) => void;
type State = BackgroundAnimationProviderState;
type BackgroundAnimationProviderProps = { children: React.ReactNode };

const BackgroundAnimationContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function backgroundAnimationReducer(state: State, action: Action) {
  const newState = { ...state };
  console.log('action', action);
  switch (action.type) {
    case 'updateDimensions': {
      return {
        ...newState,
        screenDimensions: {
          ...newState.screenDimensions,
          width: action.data.width,
          height: action.data.height
        }
      };
    }
    default: {
    }
  }
  return newState;
}

function BackgroundAnimationProvider({
  children
}: BackgroundAnimationProviderProps) {
  const [state, dispatch] = React.useReducer(
    backgroundAnimationReducer,
    globalState.animation
  );
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <BackgroundAnimationContext.Provider value={value}>
      {children}
    </BackgroundAnimationContext.Provider>
  );
}

function useBackgroundAnimation() {
  const context = React.useContext(BackgroundAnimationContext);
  if (context === undefined) {
    throw new Error(
      'useBackgroundAnimation must be used within a BackgroundAnimationProvider'
    );
  }
  return context;
}

export {
  BackgroundAnimationProvider,
  useBackgroundAnimation,
  BackgroundAnimationContext
};
