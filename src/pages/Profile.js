import React, { useContext, useEffect, useState } from "react";
import { Context } from "../components/Context";

export default function Profile({ match }) {
  const context = useContext(Context);
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const tempUser = context.data.filter((user) => user.id === match.params.id);
    console.log(tempUser[0]);
    setUser(tempUser[0]);
  };
  useEffect(() => {
    getUser();
  });

  return (
    <>
      <div className="mt-4">
        <div className="border border-secondary mx-auto form_size p-4">
          <div className="d-flex flex-column align-items-center">
            <h2>Profile</h2>
            <img className="rounded" src={user.avatar} alt="" />
          </div>
          <div className="mt-4">
            <p>
              <b>Name : </b>
              {user.name}
            </p>
            <p>
              <b>Email : </b>
              {user.email}
            </p>
            <p>
              <b>Company : </b>
              {user.company}
            </p>
            <p>
              <b>City : </b>
              {user.city}
            </p>
            <p>
              <b>State : </b>
              {user.state}
            </p>
            <p>
              <b>Country : </b>
              {user.country}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
