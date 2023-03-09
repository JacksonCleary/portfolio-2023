export interface StateAnimationCoordinatePair {
  x: number;
  y: number;
}

export type StateAnimationCoordinates = Record<string, PageCoordinates>;

export interface PageCoordinates {
  get: (width: number, height: number) => Array<StateAnimationCoordinatePair[]>;
}

export interface ScreenDimensions {
  width: number;
  height: number;
  init?: (width: number, height: number) => ScreenDimensions;
}
export interface StateAnimation {
  contentReady: boolean;
  bodyClasses: string[];
  screenDimensions: ScreenDimensions;
  coordinates: StateAnimationCoordinates;
}
