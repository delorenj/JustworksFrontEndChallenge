import {useContext, useEffect, useRef, useState} from "react";
import {AppContext} from "./App";

const EmployeeRow = props => {
  const [amount, setAmount] = useState(0)
  const amountInput = useRef(null);
  const {amounts, setAmounts} = useContext(AppContext)
  const {user} = props;

  const onChangeAmount = event => {
    const input = amountInput.current
    setAmount(input.value);
  }

  useEffect(() => {
    setAmounts({...amounts, [user.id]: amount})
    // let newAmounts = amounts;
    // newAmounts[user.id] = amount;
    // setAmounts(newAmounts)
  }, [user, amount]);

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
