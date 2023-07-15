import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { authUser } from "../../App";
import UserProfile from "../user/UserProfile";
import AdminPage from "./admin/AdminPage";
import ReactLoading from "react-loading";

function Role() {
  const userId = localStorage.getItem("userId");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    blogs: [],
    role: "",
  });
  useEffect(() => {
    setLoading(true);
    authUser
      .get(`/users/${userId}`)
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => console.log(err));

      return () => {
        setLoading(false); // This worked for me
        setUser({
          name: "",
          email: "",
          phone: "",
          blogs: [],
          role: "",
        })
      };
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            paddingTop: "15%",
            paddingLeft: "45%",
          }}
        >
          <ReactLoading
            type="bars"
            color="#28a745"
            height={"15%"}
            width={"15%"}
          />
        </div>
      )
      : user.role == "admin"
      ? (<><Route to="adminpage" exact component={AdminPage}/> </>) 
      : (<><Route to="userprofile" exact component={UserProfile}/> </>)}
    </>
  );
}

export default Role;
