import "./styles.css";
import EmployeeList from "./EmployeeList";
import {createContext, useState} from "react";
import TotalAmount from "./TotalAmount";

export const AppContext = createContext();

export default function App() {
  const [amounts, setAmounts] = useState({});
  const [users, setUsers] = useState([]);
  return (
    <AppContext.Provider value={{
      amounts,
      setAmounts,
      users,
      setUsers
    }}>
      <div className="App">
        <h1>Justmocks Pay Center </h1>
        <EmployeeList />
        <TotalAmount />
      </div>
    </AppContext.Provider>
  );
}
