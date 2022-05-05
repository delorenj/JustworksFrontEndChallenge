import {useContext, useEffect, useRef, useState} from "react";
import {AppContext} from "./App";

const EmployeeRow = props => {
  const [amount, setAmount] = useState(0)
  const amountInput = useRef();
  const {amounts} = useContext(AppContext)

  const onChangeAmount = event => {
    setAmount(amountInput.current)
  }

  useEffect(() => {
    amounts[props.user.id] = 0
  }, []);

  return (
    <li className="EmployeeRow">
      <div>
        {user.name} -- [{user.email}]
        <input
          type="text"
          name="amount"
          ref={amountInput}
          id={`amount-${user.id}}`}
          value={amount}
          onChange={onChangeAmount}
        />
      </div>
    </li>
  );
};

export default EmployeeRow;
