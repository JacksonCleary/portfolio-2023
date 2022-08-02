export function calcPath(
  width: number,
  height: number,
  percentage: number
): string {
  const widthSeparatorDegree = 90;
  const offsetX = Math.floor((percentage / 100) * width);
  const startingX = offsetX;
  const startingY = 0;
  const endingX = startingX + 2;
  const endingY = height;
  // d="M 10 10 H 90 V 90 H 10 L 10 10"
  return `M ${startingX},${startingY} L ${
    endingX + widthSeparatorDegree - 2
  },${endingY} Z`;
}

export function calcPolyline(
  width: number,
  height: number,
  percentage: number
): string {
  const widthSeparatorDegree = 90;
  const offsetX = Math.floor((percentage / 100) * width);
  const offsetWidth = 1;
  const startingX = offsetX;
  const startingY = 0;
  const endingX = startingX + offsetWidth;
  const endingY = height;
  return `${startingX},${startingY} ${endingX},${startingY} ${
    endingX + widthSeparatorDegree
  },${endingY} ${endingX + widthSeparatorDegree - offsetWidth},${endingY}`;
}
