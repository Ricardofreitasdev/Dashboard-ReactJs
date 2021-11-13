export default function identifyId (Row, Data){
    const rowDataIndexes = Object.keys(Row.lookup);
    const transformedRowDataIndexes = rowDataIndexes.map((index) =>
      parseInt(index)
    );
    const rowIds = Data.reduce((prev, cur) => {
      if (transformedRowDataIndexes.includes(cur.dataIndex)) {
        prev.push(cur.data[0]);
        return prev;
      }
      return prev;
    }, []);
    return rowIds[0];
  };
