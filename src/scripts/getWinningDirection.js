/**
 * Takes an object {
 *   baz: ['foo', 'bar', 'foo'],
 *   foobar: ['foo', 'foo', 'foo']
 *  }
 * e.g. returns 'foobar'
 * @param  {[Object]} obj [description]
 * @return {[String]}     [First key that has an array with equal values]
 */
function getWinningDirection(obj) {
  let winningDirection;
  Object
    .keys(obj)
    .some((directionId) => {
      const currentRow = obj[directionId];
      const areAllItemsSimilar = (arr) => !!arr.reduce((a, b) => (a === b) ? a : NaN);
      if(areAllItemsSimilar(currentRow)) {
        winningDirection = directionId;
        return areAllItemsSimilar(currentRow);
      }
    });
  return winningDirection;
}

export default getWinningDirection;
