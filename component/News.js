import React, { useEffect, useState } from "react";
import { TOKEN } from "../common/constant";
import { getNews } from "../utils/api";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostContainer from "./PostContainer";

function News() {
  const [newsList, setNewsList] = useState([]);
  const [likeCount, setLikeCount] = useState(0);

  //get all news
  const getNewsList = async () => {
    try {
      const token = localStorage.getItem(TOKEN);
      const response = await getNews(token);
      if (response.status === 200) {
        const results = response?.data?.results;
        setNewsList(results);
      }
    } catch (error) {
      console.log("error ::", error);
    }
  };

  useEffect(() => {
    getNewsList();
  }, []);

  return (
    <>
      {newsList &&
        newsList.map((news) => (
          <>
            <PostContainer>
              <PostHeader
                image={news.profile.profile_picture}
                firstName={news.profile.first_name}
                lastName={news.profile.last_name}
              />
              {news.media &&
                news?.media.map((post) => (
                  <>
                    <PostContent
                      id={post.id}
                      post_image={post.post_image}
                      likeCount={likeCount}
                    />
                    <PostFooter
                      postId={post.id}
                      profileId={news.profile.id}
                      setLikeCount={setLikeCount}
                      likeCount={likeCount}
                    />
                    <hr />
                  </>
                ))}
            </PostContainer>
          </>
        ))}
    </>
  );
}

export default News;
