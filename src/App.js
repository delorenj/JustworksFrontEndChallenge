import "./styles.css";
import EmployeeList from "./EmployeeList";
import {createContext} from "react";
import TotalAmount from "./TotalAmount";

export const AppContext = createContext({
  amounts: [],
});

export default function App() {

  return (
    <AppContext.Provider value={{
      amounts: {}
    }}>
      <div className="App">
        <h1>Justmocks Pay Center </h1>
        <EmployeeList />
        <TotalAmount />
      </div>
    </AppContext.Provider>
  );
}
