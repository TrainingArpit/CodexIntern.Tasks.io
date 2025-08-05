import React from "react";
import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <div className=" pt-5 grid grid-cols-4 justify-items-center gap-5 ">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}

export default UserList;
