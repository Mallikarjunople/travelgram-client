import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
//check whole code ...needs a lot of changes
const UserSignup = () => {
  const [user, setState] = useState({
    fullName: "",
    password: "",
    email: "",
    phone: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setState((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.fullName && user.password && user.phone) {
      // console.log(user); //data sent by form
      axios
        .post("/auth/signup", {
          name: user.fullName,
          email: user.email,
          password: user.password,
          phone: user.phone,
        })
        .then((response) => {
          // console.log(response.data);
          alert("Signed up successfully !!");
          if (response.status === 201) window.location = "/userlogin"; //add the location for stats 200
        })
        .catch((error) => {
          console.log(error);
        });
    } else alert("please fill in all the details");
  };

  return (
    <>
      <div className="usersignupbody">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-img-left d-none d-md-flex"></div>
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form
                    className="form-signin"
                    onSubmit={onSubmit}
                    autoComplete="off"
                  >
                    <div className="form-label-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        pattern="[a-zA-Z]+ [a-zA-Z]+"
                        name="fullName"
                        title="Enter Full name (first & last name) eg John Doe"
                        onChange={inputEvent}
                        value={user.fullName}
                        autoFocus
                      />
                    </div>
                    <div className="form-label-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your EmailID"
                        name="email"
                        onChange={inputEvent}
                        value={user.email}
                      />
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Phone no."
                        pattern="(7|8|9)\d{9}"
                        name="phone"
                        title="Enter a valid 10-digit no"
                        onChange={inputEvent}
                        value={user.phone}
                      />
                    </div>
                    <div className="form-label-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Your password"
                        name="password"
                        onChange={inputEvent}
                        value={user.password}
                      />
                    </div>

                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Register
                    </button>
                    <NavLink
                      className="d-block text-center mt-2 small"
                      to="/userlogin"
                    >
                      Sign In
                    </NavLink>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
