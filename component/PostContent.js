import React from "react";
import { BiLike } from "react-icons/bi";

function PostContent({ post_image, likeCount }) {
  return (
    <>
      <div className="card-body">
        <img
          src={post_image}
          alt="image"
          style={{ width: "37rem", height: "20rem" }}
        />
        {likeCount > 0 && (
          <span style={{ marginTop: "0.5rem", marginButtom: "0rem" }}>
            <BiLike /> <apan>{likeCount}</apan>
          </span>
        )}
      </div>
    </>
  );
}

export default PostContent;
