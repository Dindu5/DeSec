import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DemoPageWrap from "../components/DemoPageWrap";
import Return from "../components/Return";
import Form from "../components/Form";
import Button from "../components/Button";
import { BiLeftArrow } from "react-icons/bi";

function Login(props) {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState("");

  const addvalues = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post("/login", values)
      .then((res) => {
        console.log(res.data, "sucessful");
        props.history.push("/");
      })
      .catch((err) => {
        seterror(err.response.data.message);
      });
  };

  return (
    <DemoPageWrap>
      <Return>
        <Link to="/">
          <BiLeftArrow />
        </Link>
      </Return>

      <h2>Login</h2>
      <Form onSubmit={submitData}>
        <div>
          <label htmlFor="emil">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={addvalues}
          />
        </div>
        <div>
          <label htmlFor="password">Pasword</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={addvalues}
          />
        </div>
        {error && <p>{error}</p>}
        <Button>Login</Button>
      </Form>
      <h6>
        Don't have an account? <Link to="/signin">Sign Up</Link>
      </h6>
    </DemoPageWrap>
  );
}

export default Login;
