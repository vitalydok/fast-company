import React, { useState } from "react";
import api from "../api/";

const Users = () => {
  let [users, setUsers] = useState(api.users.fetchAll());
  console.log(api.users.fetchAll());
  console.log("users", users);
  const handleTagChange = (id) => {
    const newArr = [...users];
    const index = users.findIndex((el) => el._id === id);
    newArr.splice(index, 1);
    setUsers(newArr);
  };

  const renderPhrase = (number) => {
    let numberString = number.toString();
    let lastNumber = numberString.toString().slice(-1);
    // console.log("to string", numberString, typeof numberString);
    let phrase = "";
    if (lastNumber == "2" || lastNumber == "3" || lastNumber == "4") {
      phrase = "человека тусанут с тобой сегодня";
      return (
        <span className="badge  m-4 bg-primary">
          <h2>
            {number} {phrase}
          </h2>
        </span>
      );
    } else if (number === 0) {
      phrase = "никто с тобой не тусанет";
      return (
        <span className="badge  m-4 bg-danger">
          <h2>{phrase}</h2>
        </span>
      );
    } else {
      phrase = "человек тусанет c тобой сегодня";
      return (
        <span className="badge  m-4 bg-primary">
          <h2>
            {number} {phrase}
          </h2>
        </span>
      );
    }
  };
  let res = users.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>
          {item.qualities.map((q) => (
            <span className={"badge mx-2 bg-" + q.color}>{q.name}</span>
          ))}
        </td>
        <td>{item.profession.name}</td>
        <td>{item.completedMeetings}</td>
        <td>{item.rate}/5</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleTagChange(item._id)}
          >
            delete
          </button>
        </td>
      </tr>
    );
  });
  // console.log("res", res);
  return (
    <>
      {renderPhrase(res.length)}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{res}</tbody>
      </table>
    </>
  );
};

export default Users;
