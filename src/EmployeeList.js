import {useContext, useEffect, useState} from "react";
import EmployeeRow from "./EmployeeRow";
import {AppContext} from "./App";

const EmployeeList = () => {
  const {users, setUsers} = useContext(AppContext)

  useEffect(() => {
    if (typeof setUsers === 'undefined') return;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
      });
  }, []);

  return (
    <div className="EmployeeList">
      <ul>
        {users && users.map(user => {
          return <EmployeeRow user={user} />
        })}
      </ul>
    </div>
  );
};

export default EmployeeList;
