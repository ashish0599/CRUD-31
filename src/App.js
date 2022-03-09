import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Context } from "../src/components/Context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Createuser from "./pages/CreateUser";
import Profile from "./pages/Profile";
import Edituser from "./pages/EditUser";
import Edituserdetails from "./pages/EditUserDetails";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      "https://61238a96124d8800175682cd.mockapi.io/users"
    );
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Context.Provider value={{ data, setData }}>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/createuser" component={Createuser} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/edituser/:id" component={Edituser} />
            <Route path="/edituserdetails/:id" component={Edituserdetails} />
          </Switch>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
