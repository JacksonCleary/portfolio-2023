import { StateAnimation } from './models';
import { rotateXY } from '@/util/tween';

export const animationState: StateAnimation = {
  contentReady: false,
  bodyClasses: [],
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
            { x: width + 400, y: 0 },
            { x: width + 400, y: 0 },
            { x: width + 400, y: height },
            { x: 400, y: height }
          ],
          [
            { x: width + 200, y: 0 },
            { x: width + 200, y: 0 },
            { x: width + 200, y: height },
            { x: 200, y: height }
          ],
          [
            { x: width, y: 0 },
            { x: width, y: 0 },
            { x: width, y: height },
            { x: 0, y: height }
          ],
          [
            { x: width - 200, y: 0 },
            { x: width, y: 0 },
            { x: width, y: height },
            { x: -200, y: height }
          ]
        ];
      }
    },
    portfolio: {
      get: function (width: number, height: number) {
        const middleWidth = Math.floor(width / 2);
        const middleHeight = Math.floor(height / 2);
        const sizeModifier = 150;
        const squareULCoordinates = [
          middleWidth - sizeModifier,
          middleHeight - sizeModifier
        ];
        const squareURCoordinates = [
          middleWidth + sizeModifier,
          middleHeight - sizeModifier
        ];
        const squareBRCoordinates = [
          middleWidth + sizeModifier,
          middleHeight + sizeModifier
        ];
        const squareBLCoordinates = [
          middleWidth - sizeModifier,
          middleHeight + sizeModifier
        ];

        return [
          [
            rotateXY(
              middleWidth,
              middleHeight,
              squareULCoordinates[0],
              squareULCoordinates[1],
              47
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareURCoordinates[0],
              squareURCoordinates[1],
              47
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareBRCoordinates[0],
              squareBRCoordinates[1],
              47
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareBLCoordinates[0],
              squareBLCoordinates[1],
              47
            )
          ],
          [
            rotateXY(
              middleWidth,
              middleHeight,
              squareULCoordinates[0],
              squareULCoordinates[1],
              51
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareURCoordinates[0],
              squareURCoordinates[1],
              51
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareBRCoordinates[0],
              squareBRCoordinates[1],
              51
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareBLCoordinates[0],
              squareBLCoordinates[1],
              51
            )
          ],
          [
            rotateXY(
              middleWidth,
              middleHeight,
              squareULCoordinates[0],
              squareULCoordinates[1],
              43
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareURCoordinates[0],
              squareURCoordinates[1],
              43
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareBRCoordinates[0],
              squareBRCoordinates[1],
              43
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareBLCoordinates[0],
              squareBLCoordinates[1],
              43
            )
          ],
          [
            rotateXY(
              middleWidth,
              middleHeight,
              squareULCoordinates[0],
              squareULCoordinates[1],
              39
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareURCoordinates[0],
              squareURCoordinates[1],
              39
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareBRCoordinates[0],
              squareBRCoordinates[1],
              39
            ),
            rotateXY(
              middleWidth,
              middleHeight,
              squareBLCoordinates[0],
              squareBLCoordinates[1],
              39
            )
          ]
        ];
      }
    }
  }
};
