// @flow

const getDiagonals = (state: Object) => {
  const { rows } = state;
  const firstDiagonal = () => [0,1,2].map((i) => rows[i][i]);
  const secondDiagonal = () => [0,1,2].map((i) => rows[(Object.keys(rows).length -1) - i][i]);
  return {
    0: firstDiagonal(),
    1: secondDiagonal(),
  }
};

export default getDiagonals;
