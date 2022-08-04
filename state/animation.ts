import { StateAnimation } from './models';

export const animationState: StateAnimation = {
  contentReady: false,
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
            { x: width * 0.8, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: height * 0.6 },
            { x: width * 0.8, y: 0 }
          ],
          [
            { x: width * 0.8, y: height },
            { x: width * 0.8, y: height },
            { x: 0, y: height },
            { x: 0, y: height * 0.4 }
          ],
          [
            { x: width * 0.65, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: height * 0.85 },
            { x: width * 0.65, y: 0 }
          ],
          [
            { x: width * 0.65, y: height },
            { x: width * 0.65, y: height },
            { x: 0, y: height },
            { x: 0, y: height * 0.15 }
          ]
        ];
      }
    },
    work: {
      get: function (width: number, height: number) {
        return [
          [
            { x: width * 0.1, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: height * 0.9 },
            { x: width * 0.1, y: 0 }
          ],
          [
            { x: width * 0.1, y: height },
            { x: width * 0.1, y: height },
            { x: 0, y: height },
            { x: 0, y: height * 0.4 }
          ],
          [
            { x: width * 0.95, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: height * 0.12 },
            { x: width * 0.95, y: 0 }
          ],
          [
            { x: width * 0.95, y: height },
            { x: width * 0.95, y: height },
            { x: 0, y: height },
            { x: 0, y: height * 0.15 }
          ]
        ];
      }
    }
  }
};
