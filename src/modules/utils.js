export function getPositionsBetween(startPosition, endPosition) {
  let startY = startPosition[1];
  let endY = endPosition[1];
  let x = startPosition[0];
  let positions = [];
  for (let y = startY; y <= endY; y++) {
    let position = [x, y];
    positions.push(position);
  }

  return positions;
}
