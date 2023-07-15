import React, { useState, useEffect } from "react";

import { authUser } from "../../../App";

import BlogRequest from "../admin/BlogRequest";

function RequestSection() {
  const [blogRequests, setBlogRequests] = useState([]);

  useEffect(() => {
    authUser
      .get("/admin/blogreq")
      .then((res) => {
        console.log(res.data.blogs);
        setBlogRequests(res.data.blogs);
      })
      .catch((err) => console.log(err));

      return () => {
        setBlogRequests([]); // This worked for me
      };
  }, []);

  return (
    <>
      <h2 className="mt-4 ml-5">Blog requests</h2>
      <div>
        {blogRequests.map((item) => (
          <div key={item._id}>
            <BlogRequest id={item._id} />
          </div>
        ))}
      </div>
    </>
  );
}

export default RequestSection;
