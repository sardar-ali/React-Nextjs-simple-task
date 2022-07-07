import React from "react";

const PostContainer = ({ children }) => {
  return (
    <div
      className="card bg-white mx-auto rounded"
      style={{ maxWidth: "40rem" }}
    >
      {children}
    </div>
  );
};

export default PostContainer;
