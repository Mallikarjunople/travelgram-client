import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/pages/Home";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Tlogs from "./components/tlogs/Tlogs";
import About from "./components/pages/About";
import Citypage from "./components/pages/Citypage";
import Tlogpost from "./components/pages/Tlogpost";

import ThemePage from "./components/pages/ThemePage";
import Landing from "./components/Landing";
import PopularCities from "./components/auth/admin/PopularCities";
import UserSignup from "./components/auth/user/UserSignup";
import UserLogin from "./components/auth/user/UserLogin";
import CreatePost from "./components/user/CreatePost";
import EditPost from "./components/user/EditPost";
import UserProfile from "./components/user/UserProfile";
import ViewUserBlog from "./components/user/ViewUserBlog";
import PageNotFound from "./components/pages/PageNotFound";
import AdminPage from "./components/auth/admin/AdminPage";
import Role from "./components/auth/Role";
import ViewBlog from "./components/auth/admin/ViewBlog";
import RequestSection from "./components/auth/admin/RequestSection";
import AddCity from "./components/auth/admin/AddCity";
import Feedback from "./components/pages/Feedback";
import AdminFeedback from "./components/auth/admin/AdminFeedback";
import Feed from "./components/auth/admin/Feed";
import ViewFeedback from "./components/auth/admin/ViewFeedback";

export const baseUrl = "https://travelgram-server.onrender.com/";
const token = localStorage.getItem("token");
export const authUser = axios.create({
  baseURL: "https://travelgram-server.onrender.com/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

function App() {
  axios.defaults.baseURL = "https://travelgram-server.onrender.com/";

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          {/* Authentication routes */}
          <Route path="/" exact component={Home} />
          <Route path="/role/:action" component={Role} />
          <Route path="/usersignup" exact component={UserSignup} />
          <Route path="/userlogin" exact component={UserLogin} />

          {/* Admin routes */}
          <Route path="/adminpage" exact component={AdminPage} />
          <Route path="/role/viewblog/:getId" component={ViewBlog} />
          <Route path="/role/adminfeedback" exact component={AdminFeedback} />
          <Route path="/role/viewfeedback/:id" component={ViewFeedback} />
          <Route path="/role/requestsection" exact component={RequestSection} />
          <Route path="/addcity" component={AddCity} />
          <Route path="/PopularCities" exact component={PopularCities} />
    
          <Route path="/feed" exact component={Feed} />
          <Route path="/landing" exact component={Landing} />

          {/* Users Routes */}
          <Route path="/tlogs" exact component={Tlogs} />
          <Route path="/tlogpost/:id" component={Tlogpost} />
          <Route path="/viewuserblog/:getId" exact component={ViewUserBlog} />
          <Route path="/about" exact component={About} />
          <Route path="/citypage" exact component={Citypage} />
          <Route path="/citypage/:city" component={Citypage} />

          <Route path="/createpost" exact component={CreatePost} />
          <Route path="/editpost" exact component={EditPost} />
          <Route path="/userprofile" exact component={UserProfile} />
          <Route path="/feedback" exact component={Feedback} />

          <Route path="/tag/:tags" exact component={ThemePage} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
