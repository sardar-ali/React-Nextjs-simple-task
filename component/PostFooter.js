import React from "react";
import { createPostReaction } from "../utils/api";
import { TOKEN } from "../common/constant";

const PostFooter = ({ postId, profileId, likeCount, setLikeCount }) => {
  //handle reaction like,love etc
  const handleReaction = async (postId, profileId, type) => {
    try {
      const token = localStorage.getItem(TOKEN);
      let data = {
        post: postId,
        profile: profileId,
        type: type,
      };
      const response = await createPostReaction(data, token);
      if (response.success === true) {
        console.log("response.success ::", response.success);
      }
    } catch (error) {
      console.log("error ::", error);
    }
  };

  return (
    <>
      <div
        className="card-footer bg-white"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span
          className="text-left"
          onClick={() => handleReaction(postId, profileId, "like")}
          style={{ cursor: "pointer" }}
        >
          like
        </span>
        <span className=" text-center">comment</span>
        <span className=" text-right">share</span>
      </div>
    </>
  );
};
export default PostFooter;
