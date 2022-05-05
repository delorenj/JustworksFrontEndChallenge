import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import {AppContext} from "./App";

const TotalAmount = props => {
  const {amounts} = useContext(AppContext)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const result = Object.values(amounts).reduce((sum, a) => {
      return parseInt(sum) + parseInt(a)
    }, 0)
    setTotal(result);
  }, [amounts]);

  // useEffect(() => {
  //   amounts
  // }, [])
  return (
    <div>
      <h1>Total Payments: {total}</h1>
    </div>
  );
};

export default TotalAmount;
