import React, { SetStateAction, Dispatch, RefObject } from 'react';
import gsap, { Expo } from 'gsap';
import { StateAnimationCoordinatePair } from '../state';

// export const determinePathPointIndexBySlug = (slug = 'home'): number => {
//   let index: number;
//   switch (slug) {
//     case 'about':
//       index = 1;
//       break;
//     default:
//       index = 0;
//   }
//   return index;
// };

export interface PointObject {
  x: string;
  endX: number;
  y: string;
  endY: number;
}

export function morphingPaths(
  pathPointsArrayMulti: Array<StateAnimationCoordinatePair[]>,
  refArray: Array<RefObject<SVGPolylineElement>>
) {
  const $path1 = refArray[0];
  const $path2 = refArray[1];
  const $path3 = refArray[2];
  const $path4 = refArray[3];

  const pathPoints1 = pathPointsArrayMulti[0];
  const pathPoints2 = pathPointsArrayMulti[1];
  const pathPoints3 = pathPointsArrayMulti[2];
  const pathPoints4 = pathPointsArrayMulti[3];

  const sectionPathsArray: Array<PointObject> = [];

  if ($path1.current) {
    switchToPath($path1.current, pathPoints1, sectionPathsArray);
    setTimeout(function () {
      if ($path2.current) {
        switchToPath($path2.current, pathPoints2, sectionPathsArray);
        setTimeout(function () {
          if ($path3.current) {
            switchToPath($path3.current, pathPoints3, sectionPathsArray);
            setTimeout(function () {
              if ($path4.current) {
                switchToPath($path4.current, pathPoints4, sectionPathsArray);
              }
            }, 200);
          }
        }, 200);
      }
    }, 200);
  }
}

function switchToPath(
  $path: SVGPolylineElement,
  pathPoints: Array<StateAnimationCoordinatePair>,
  sectionPathsArray: Array<PointObject>
  //   setSectionPathArray: Dispatch<SetStateAction<Array<PointObject>>>
) {
  // reset var path1/path2
  sectionPathsArray = [];
  const actualPoints = $path.getAttribute('points');
  let actualPointsSplit;
  if (!actualPoints) {
    return;
  } else {
    actualPointsSplit = actualPoints.split(' ');
  }

  // creo un oggetto path1 / path2 che abbia i punti iniziali e finali
  for (var i = 0; i < pathPoints.length; i++) {
    const actualPoint = actualPointsSplit[i].split(',');
    const obj = {
      x: actualPoint[0],
      endX: pathPoints[i].x,
      y: actualPoint[1],
      endY: pathPoints[i].y
    };

    // path1 / path2
    sectionPathsArray.push(obj);
  }

  // animo con GSAP
  for (var i = 0; i < sectionPathsArray.length; i++) {
    const p = sectionPathsArray[i];

    console.log(p);

    gsap.to(
      p,
      //   1,
      {
        x: p.endX,
        y: p.endY,
        ease: Expo.easeInOut,
        delay: i * 0.25,
        duration: 1,
        onUpdate: function () {
          animatePath($path, sectionPathsArray);
        }
      }
    );
  }

  function animatePath($path: SVGPolylineElement, coordsArr: PointObject[]) {
    var points = '';
    for (var i = 0; i < coordsArr.length; i++) {
      var point = coordsArr[i].x + ',' + coordsArr[i].y;
      points += point + ' ';
    }
    $path.setAttribute('points', points);
  }
}