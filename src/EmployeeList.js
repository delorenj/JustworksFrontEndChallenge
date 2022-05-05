import { useEffect, useState } from "react";

export default function EmployeeList() {
  let [users, setUsers] = useState([]);

  /**
   * To get a list of employees, make a GET request to:
   * "https://jsonplaceholder.typicode.com/users"
   *
   * hint (remove this?):
   * fetch("https://jsonplaceholder.typicode.com/users")
   *
   * Or put full example?
   *     fetch("https://jsonplaceholder.typicode.com/users")
   *       .then((response) => response.json())
   *       .then((response) => {
   *         setUsers(response);
   *       });
   */

  return (
    <div className="EmployeeList">
    {/*  List employees here ! */}
    </div>
  );
}
