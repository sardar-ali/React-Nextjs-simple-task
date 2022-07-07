import React from "react";
import { FaEllipsisH } from "react-icons/fa";

const PostHeader = ({ image, firstName, lastName }) => {
  return (
    <div className="card-header text-left bg-white">
      <div className="row">
        <div className="col-lg-8">
          <img
            className="rounded-circle"
            src={image}
            alt="image"
            style={{ width: "3rem", height: "3rem" }}
          />
          <span className="pl-2">
            {firstName} {lastName}
          </span>
        </div>
        <div
          className="bg-light rounded-circle"
          style={{
            width: " 2.5rem",
            textAlign: "center",
            paddingTop: "0.4rem",
            height: "2.5rem",
            marginLeft: "9rem",
          }}
        >
          <span className="">
            <FaEllipsisH />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
