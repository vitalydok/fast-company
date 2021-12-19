import React, { useState } from "react";
import User from "./components/users";

import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handlechangeBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
    console.log(id);
  };
  return (
    <div>
      <User
        onDelete={handleDelete}
        onChangeBookMark={handlechangeBookMark}
        users={users}
      />
    </div>
  );
}

export default App;
