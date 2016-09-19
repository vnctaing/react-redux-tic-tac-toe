const getColumns = (state) => {
  const getColumn = (nth) => [0,1,2].map((i) => state.rows[i][nth]);
  const initialValue = {};
  const columns = [0,1,2].reduce((acc,curr) => {
    acc[curr] = getColumn(curr);
    return acc;
  }, initialValue)
  return columns;
}

export default getColumns;
