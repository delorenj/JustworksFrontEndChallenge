import {useContext, useEffect, useMemo, useRef, useState} from "react";
import {AppContext} from "./App";

const TotalAmount = props => {
  const appContext = useContext(AppContext)
  const { amounts } = appContext

  const total = useMemo(() => {
    amounts.values.reduce((sum, a) => {
      return sum + a
    }, 0)
  }, [amounts]);

  useEffect(() => {
    amounts
  }, [])
  return (
    <div>
      <h1>Total Payments: {total}</h1>
    </div>
  );
};

export default TotalAmount;
