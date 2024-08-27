import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Darshan V",
      image:
        "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
