import { StateAnimation } from './models';

export const animationState: StateAnimation = {
  screenDimensions: {
    width: 0,
    height: 0,
    init: function (width: number, height: number) {
      this.width = width;
      this.height = height;
      delete this.init; // We don't want init in our result object
      return this;
    }
  },
  coordinates: {
    intro: {
      get: function (width: number, height: number) {
        return [
          [
            { x: 0, y: 0 },
            { x: width * 0.2, y: 0 },
            { x: width * 0.7, y: height },
            { x: 0, y: height }
          ],
          [
            { x: -width * 0.2, y: height * 0.2 },
            { x: 0, y: 0 },
            { x: width, y: height },
            { x: 0, y: height }
          ]
        ];
      }
    },
    home: {
      get: function (width: number, height: number) {
        return [
          [
            { x: width * 0.75, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: height * 0.65 },
            { x: width * 0.75, y: 0 }
          ],
          [
            { x: width * 0.75, y: height },
            { x: width * 0.75, y: height },
            { x: 0, y: height },
            { x: 0, y: height * 0.35 }
          ],
          [
            { x: width * 0.65, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: height * 0.75 },
            { x: width * 0.65, y: 0 }
          ],
          [
            { x: width * 0.65, y: height },
            { x: width * 0.65, y: height },
            { x: 0, y: height },
            { x: 0, y: height * 0.25 }
          ]
        ];
      }
    }
  }
};
