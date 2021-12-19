import React from "react";
import User from "./user";
import renderPhrase from "../searchStatus";
const Users = ({ users: allUsers, ...rest }) => {
  return (
    <>
      {renderPhrase(allUsers.length)}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Провфессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <User {...rest} {...user} key={user._id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
