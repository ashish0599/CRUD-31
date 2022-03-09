import React, { useContext, useState } from "react";
import "../pages/All_css.css";
import { Context } from "./Context";

export default function EditCreateTemplate(props) {
  let context = useContext(Context);
  const id = props.id;

  let dummy_data = context.data.filter((x) => x.id === id);
  dummy_data = dummy_data[0];
  
  const dummy = props.dummy;

   const [name, setName] = useState(dummy ? dummy_data.name : "");

   const [email, setEmail] = useState(dummy ? dummy_data.email : "");
   
   const [company, setCompany] = useState(dummy ? dummy_data.company : "");

   const [city, setCity] = useState(dummy ? dummy_data.city : "");
      
   const [state, setState] = useState(dummy ? dummy_data.state : "");
   
   const [country, setCountry] = useState(dummy ? dummy_data.country : "");


  const handleInput = ({ target: { value, name } }) => {
    // console.log(value, name);
    
    if (name === "name") {
      setName(value);
      props.setName(value);
    }
    
    if (name === "email") {
      setEmail(value);
      props.setEmail(value);
    }
    
    if (name === "company") {
      setCompany(value);
      props.setCompany(value);
    }

    if (name === "city") {
      setCity(value);
      props.setCity(value);
    }

    if (name === "state") {
      setState(value);
      props.setState(value);
    }

    if (name === "country") {
      setCountry(value);
      props.setCountry(value);
    }
    
  };
  
  return (
    <>
      <div className="card mx-auto createuser form_size">
        <div className="card-body ">
          <form className="form">
            <div className="d-flex flex-column">
              <label>
                <b>Name : </b>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="UserName"
                name="name"
                value={name}
                onChange={handleInput}
              />
            </div>
            <br />
            <div className="d-flex flex-column">
              <label>
                <b>Email : </b>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                onChange={handleInput}
                name="email"
                value={email}
              />
            </div>
            <br />
            <div className="d-flex flex-column">
              <label>
                <b>Company : </b>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Company"
                onChange={handleInput}
                name="company"
                value={company}
              />
            </div>
            <br />
            <div className="d-flex flex-column">
              <label>
                <b>Country : </b>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Country"
                onChange={handleInput}
                name="country"
                value={country}
              />
            </div>
            <br />
            <div className="d-flex flex-column">
              <label>
                <b>State : </b>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="State"
                onChange={handleInput}
                name="state"
                value={state}
              />
            </div>
            <br />
            <div className="d-flex flex-column">
              <label>
                <b>City : </b>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="City"
                onChange={handleInput}
                name="city"
                value={city}
              />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-info"onClick={props.handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
