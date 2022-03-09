!import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../components/Context";
import EditCreateTemplate from "../components/Edit_create_template";

export default function Createuser(props) {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [userNotCreated, setuserNotCreated] = useState(true);
  const context = useContext(Context);

  // Updating the API
  const handleSubmit = async () => {
    const { data } = await axios.post(
      "https://61238a96124d8800175682cd.mockapi.io/users",
      {
        name: name,
        email: email,
        company: company,
        city: city, 
        state: state,
        country: country,      }
    );
    const dummy_data = [...context.data];
    dummy_data.push(data);
    context.setData(dummy_data);
    setuserNotCreated(false);
  };
  return (
    <>
      {userNotCreated ? (
        <>
          <div className="d-flex justify-content-center">
            <h2>Create</h2>
          </div>
          <EditCreateTemplate
            setName={setName}
            setEmail={setEmail}
            setCompany={setCompany}
            setCity={setCity}
            setState={setState}
            setCountry={setCountry}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <>
          <div className="mt-4 d-flex justify-content-center">
            <h3>User Created Successfully ! </h3>
          </div>
        </>
      )}
    </>
  );
}
