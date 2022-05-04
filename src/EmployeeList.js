import { useEffect, useState } from "react";

export default function EmployeeList() {
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
          return <li id="user-#{i}">{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
