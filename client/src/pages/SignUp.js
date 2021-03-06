import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import DemoPageWrap from "../components/DemoPageWrap";
import Form from "../components/Form";
import Return from "../components/Return";
import { BiLeftArrow } from "react-icons/bi";

function SignUp(props) {
  const [values, setvalues] = useState({
    email: "",
    password1: "",
    password2: "",
    username: "",
  });
  const [error, seterror] = useState("");

  const addvalues = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    seterror("");
    e.preventDefault();
    axios
      .post("/signup", values)
      .then((res) => {
        console.log(res.data, "sucessful");
        props.history.push("/");
      })
      .catch((err) => {
        seterror(err.response.data.message);
      });
  };

  return (
    <div>
      <Return>
        <Link to="/">
          <BiLeftArrow />
        </Link>
      </Return>
      <DemoPageWrap>
        <h2>Sign Up to enjoy awesome features</h2>
        <Form onSubmit={submitData} noValidate>
          <div>
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={addvalues}
            />
          </div>
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
              name="password1"
              value={values.password}
              onChange={addvalues}
            />
          </div>
          <div>
            <label htmlFor="password">Pasword</label>
            <input
              type="password"
              name="password2"
              value={values.password}
              onChange={addvalues}
            />
          </div>
          {error && <p>{error}</p>}
          <Button>SignUp</Button>
        </Form>
        <h6>
          Already have an account? <Link to="/login">Login</Link>
        </h6>
      </DemoPageWrap>
    </div>
  );
}

export default SignUp;
