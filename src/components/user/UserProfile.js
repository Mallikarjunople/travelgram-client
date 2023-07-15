import React, { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import Modal from "react-modal";
import { authUser } from "../../App";
import PostList from "./PostList";

Modal.setAppElement("#root");

function UserProfile() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    blogs: [],
    role: "",
  });

  //Modal Handlers
  const modalOpener = () => {
    setModalIsOpen(true);
  };
  const onRequestClose = () => {
    setModalIsOpen(false);
  };

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const saveChanges = (e) => {
    e.preventDefault();
    // console.log(user);
    authUser
      .patch(`/users/${userId}`, [
        { propName: "name", value: user.name },
        { propName: "email", value: user.email },
        { propName: "phone", value: user.phone },
      ])
      .then((response) => {
        console.log(response);
        alert("User Information Updated Successfully");
      })
      .catch((error) => {
        console.log(error);
      });

    setModalIsOpen(false);
  };
  useEffect(() => {
    //REQUEST FOR USER INFORMATION

    authUser
      .get(`/users/${userId}`)
      .then((res) => {
        // console.log(res.data.user);
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="main-body">
          {/* <!-- Breadcrumb --> */}
          <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                User Profile
              </li>
            </ol>
          </nav>

          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h3>{user.name}</h3>
                      <p className="text-secondary mb-1">
                        Full Stack Developer
                      </p>
                      <p className="text-muted font-size-sm">
                        Pune , Maharashtra
                      </p>
                      {/* <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary">
                        Message
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-instagram mr-2 icon-inline text-danger"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </h6>
                    <span className="text-secondary">instagram.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-facebook mr-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </h6>
                    <span className="text-secondary">facebook.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <Modal isOpen={modalIsOpen}>
              <div className="modal-body">
                <form onSubmit={saveChanges}>
                  <div className="form-group">
                    <label for="editname" className="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editname"
                      name="name"
                      value={user.name}
                      onChange={inputEvent}
                    />
                  </div>
                  <div className="form-group">
                    <label for="editemail" className="col-form-label">
                      Email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editemail"
                      name="email"
                      value={user.email}
                      onChange={inputEvent}
                    />
                  </div>
                  <div className="form-group">
                    <label for="editphone" className="col-form-label">
                      Phone:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="editphone"
                      name="phone"
                      value={user.phone}
                      onChange={inputEvent}
                    />
                  </div>
                  <div className="form-group">
                    <label for="editabout" className="col-form-label">
                      About:
                    </label>
                    <textarea
                      className="form-control"
                      id="editabout"
                    ></textarea>
                  </div>
                </form>
              </div>
              <button
                className="btn btn-danger mx-1"
                onClick={() => setModalIsOpen(false)}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary mx-1"
                onClick={saveChanges}
              >
                Save changes
              </button>
            </Modal>

            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body userpersonalinfo">
                  <div className="row">
                    <div className="col-lg-10 col-9">
                      <h4>Personal Information</h4>
                    </div>
                    <div className="col-lg-2 col-3">
                      <button className="btn btn-primary" onClick={modalOpener}>
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="mb-0 my-3">Full Name</div>
                    </div>
                    <div className="col-sm-9 my-3 text-secondary">
                      {user.name}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 my-3">
                      <div className="mb-0">Email</div>
                    </div>
                    <div className="col-sm-9 my-3 text-secondary">
                      {user.email}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 my-3">
                      <div className="mb-0">Phone</div>
                    </div>
                    <div className="col-sm-9 my-3 text-secondary">
                      {user.phone}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 my-3">
                      <div className="mb-0">About me</div>
                    </div>
                    <div className="col-sm-9 my-3 text-secondary">
                      I'm an experienced software engineer who constantly seeks
                      out innovative solutions to everyday problems. In my seven
                      years in this industry, I've honed my analytical thinking
                      and collaboration skills, and I love working with a team.
                      I've also had the opportunity to serve as the software
                      engineer lead for three projects with First Technology
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="card mb-3">
              <div className="card-body w-auto">
                <div className="row">
                  <div className="col-lg-10 col-md-9 col-8">
                    <h3>My posts</h3>
                  </div>
                  <div className="col-lg-2 col-md-3 col-4 justify-content-end">
                    <button
                      className="btn btn-primary mx-1 "
                      onClick={() => (window.location = "/createpost")}
                    >
                      Add post
                    </button>
                  </div>
                </div>
                {user.blogs.map((blogid) => (
                  <PostList blogid={blogid} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
