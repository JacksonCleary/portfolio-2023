import React, { useEffect, useRef, useState } from 'react';
import { useBackgroundAnimation } from '../../providers';
import { StateAnimationCoordinatePair } from '../../state';
import { PageCoordinates } from '../../state';
import { calcPolyline, calcPath } from '../../util/svg';
import { morphingPaths } from '../../util/tween';
import useWindowWidth from '../../hooks/get-window-width';
import styles from './background.module.scss';

interface CoordinatesState {
  class: string;
  coordinates: Array<StateAnimationCoordinatePair[]>;
}

export const Background = (): JSX.Element => {
  const bganim = useBackgroundAnimation();
  const windowWidth = useWindowWidth();
  const pathRef1 = useRef<SVGPolylineElement>(null);
  const pathRef2 = useRef<SVGPolylineElement>(null);
  const pathRef3 = useRef<SVGPolylineElement>(null);
  const pathRef4 = useRef<SVGPolylineElement>(null);
  const introPathRef1 = useRef<SVGPathElement>(null);
  const introPathRef2 = useRef<SVGPathElement>(null);
  const introPathRef3 = useRef<SVGPathElement>(null);
  const introPathRef4 = useRef<SVGPathElement>(null);

  const introRefArray = [
    introPathRef1,
    introPathRef2,
    introPathRef3,
    introPathRef4
  ];
  const pathRefArray = [pathRef1, pathRef2, pathRef3, pathRef4];

  const [currentCoordinates, setCurrentCoordinates] =
    useState<CoordinatesState>({
      class: 'intro',
      coordinates: []
    });

  const [path1Points, setPath1Points] = useState<string>('');
  const [path2Points, setPath2Points] = useState<string>('');
  const [path3Points, setPath3Points] = useState<string>('');
  const [path4Points, setPath4Points] = useState<string>('');
  const [introPathPoints, setIntroPathPoints] = useState<Array<string>>([]);

  const [introAnimationStart, setIntroAnimationStart] =
    useState<boolean>(false);
  const [primaryAnimationStart, setPrimaryAnimationStart] =
    useState<boolean>(false);

  const [morphinTime, setMorphinTime] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      bganim.dispatch({
        type: 'updateDimensions',
        data: {
          width: windowWidth,
          height: windowHeight
        }
      });
    }
  }, []);

  useEffect(() => {
    console.log('newstate in Background', bganim.state);
    if (
      bganim.state.screenDimensions.width > 0 &&
      bganim.state.screenDimensions.height > 0 &&
      !primaryAnimationStart
    ) {
      const intro = bganim.state.coordinates.intro as PageCoordinates;
      const introCoords = intro.get(
        bganim.state.screenDimensions.width,
        bganim.state.screenDimensions.height
      );
      setCurrentCoordinates({
        class: 'intro',
        coordinates: introCoords
      });
      setIntroPathPoints([
        calcPath(
          bganim.state.screenDimensions.width,
          bganim.state.screenDimensions.height,
          20
        ),
        calcPath(
          bganim.state.screenDimensions.width,
          bganim.state.screenDimensions.height,
          40
        ),
        calcPath(
          bganim.state.screenDimensions.width,
          bganim.state.screenDimensions.height,
          60
        ),
        calcPath(
          bganim.state.screenDimensions.width,
          bganim.state.screenDimensions.height,
          80
        )
      ]);
    }
  }, [bganim.state]);

  useEffect(() => {
    if (
      introPathPoints.length > 0 &&
      introPathPoints.length === introRefArray.length
    ) {
      setIntroAnimationStart(true);
    }
  }, [introPathPoints]);

  //   useEffect(() => {
  //     console.log('introAnimationStart', introAnimationStart);
  //   }, [introAnimationStart]);

  useEffect(() => {
    console.log('primaryAnimationStart', primaryAnimationStart);
    if (primaryAnimationStart) {
      const polyLineString1 = calcPolyline(
        bganim.state.screenDimensions.width,
        bganim.state.screenDimensions.height,
        20
      );
      const polyLineString2 = calcPolyline(
        bganim.state.screenDimensions.width,
        bganim.state.screenDimensions.height,
        40
      );
      const polyLineString3 = calcPolyline(
        bganim.state.screenDimensions.width,
        bganim.state.screenDimensions.height,
        60
      );
      const polyLineString4 = calcPolyline(
        bganim.state.screenDimensions.width,
        bganim.state.screenDimensions.height,
        80
      );
      setPath1Points(polyLineString1);
      setPath2Points(polyLineString2);
      setPath3Points(polyLineString3);
      setPath4Points(polyLineString4);
    }
  }, [primaryAnimationStart]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (
        path1Points &&
        path2Points &&
        path3Points &&
        path4Points &&
        morphinTime
      ) {
        const home = bganim.state.coordinates.home as PageCoordinates;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const homeCoords = home.get(windowWidth, windowHeight);
        morphingPaths(homeCoords, pathRefArray);
        setMorphinTime(false);
        bganim.dispatch({
          type: 'updateDimensions',
          data: {
            width: windowWidth,
            height: windowHeight
          }
        });
      }
    }
  }, [path1Points, path2Points, path3Points, path4Points, morphinTime]);

  useEffect(() => {
    setMorphinTime(true);
  }, [windowWidth]);

  return (
    <div id={styles.stage}>
      <svg
        id={styles.background}
        width={bganim.state.screenDimensions.width}
        height={bganim.state.screenDimensions.height}
        className={styles[`section_${currentCoordinates.class}`]}
      >
        <defs>
          <linearGradient id={styles.fill1}>
            <stop className={styles.stop1} offset="0%"></stop>
            <stop className={styles.stop2} offset="100%"></stop>
          </linearGradient>
          <linearGradient id={styles.fill2}>
            <stop className={styles.stop1} offset="0%"></stop>
            <stop className={styles.stop2} offset="100%"></stop>
          </linearGradient>
          <linearGradient id={styles.fill3}>
            <stop className={styles.stop1} offset="0%"></stop>
            <stop className={styles.stop2} offset="100%"></stop>
          </linearGradient>
          <linearGradient id={styles.fill4}>
            <stop className={styles.stop1} offset="0%"></stop>
            <stop className={styles.stop2} offset="100%"></stop>
          </linearGradient>
        </defs>
        {introPathPoints.length > 0 && (
          <g
            className={introAnimationStart ? styles.introAnimationStart : ''}
            onAnimationEnd={() => {
              setIntroAnimationStart(false);
              setPrimaryAnimationStart(true);
            }}
          >
            {introPathPoints.map((val, index) => (
              <path
                key={`intro-path-${index}`}
                id={styles[`introPath${index + 1}`]}
                stroke={`url(#${styles[`fill${index + 1}`]})`}
                d={introPathPoints[index]}
                ref={introRefArray[index]}
              />
            ))}
          </g>
        )}
        <polygon
          id={styles.path1}
          ref={pathRef1}
          points={path1Points}
          fill={`url(#${styles.fill1})`}
        ></polygon>
        <polygon
          id={styles.path2}
          ref={pathRef2}
          points={path2Points}
          fill={`url(#${styles.fill2})`}
        ></polygon>
        <polygon
          id={styles.path3}
          ref={pathRef3}
          points={path3Points}
          fill={`url(#${styles.fill3})`}
        ></polygon>
        <polygon
          id={styles.path4}
          ref={pathRef4}
          points={path4Points}
          fill={`url(#${styles.fill4})`}
        ></polygon>
      </svg>
    </div>
  );
};
