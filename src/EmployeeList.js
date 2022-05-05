import {useEffect, useState} from "react";
import EmployeeRow from "./EmployeeRow";

const EmployeeList = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
      });
  }, []);

  return (
    <div className="EmployeeList">
      <ul>
        {users.map((user, i) => {
          return <EmployeeRow user={user} index={i} />
        })}
      </ul>
    </div>
  );
};

export default EmployeeList;
