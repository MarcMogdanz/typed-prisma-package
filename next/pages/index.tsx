import type { NextPage } from "next";
import { useState } from "react";
import useSWR from "swr";
import { User } from "./api/user";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const [name, setName] = useState("");

  const createUser = async () => {
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name }),
    }).then((res) => res.json());
  };

  const { data, error } = useSWR("/api/users", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <h1>Users</h1>
      <ul>
        {data.map((user: User) => (
          <li key={user.id}>
            {user.name} ({user.id})
          </li>
        ))}
      </ul>
      <h1>Add user</h1>
      <label>Name:</label>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <button type="submit" onClick={() => createUser()}>
        Create
      </button>
    </>
  );
};

export default Home;
