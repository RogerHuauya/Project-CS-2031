import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../context/booksContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import axios from "../bbuddy/axios.js";
import {UserCard} from "../components/users/UserCard.jsx";
dayjs.extend(utc);

export function UserShowPage() {
  const { getBook } = useBooks();
  const { id } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
        const response = await axios.get("public_users/");
        setUsers(response.data);
    };
    fetchUsers();
  }, [id]);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-y-5">
        {users.map((user) => (
            <UserCard key={user._id} user={user} />
        ))}
    </div>
  );
}
