import React, { Fragment } from "react";
import { POST } from "../types/posts.type";
import PostItem from "./PostItem";

interface Props {
  data: POST[];
  title?: string;
}
const Post = (props: Props): JSX.Element => {
  const { data: Posts, title } = props;
  const postsLength = Posts && Posts.length;
  return (
    <Fragment>
      <h1>{title}</h1>
      <h3>Posts Count: {Posts.length}</h3>
      {postsLength > 0 &&
        Posts.map((post) => {
          return <PostItem key={`post-item-${post.id}`} data={post} />;
        })}
      {postsLength === 0 && <h1> No Posts </h1>}
    </Fragment>
  );
};

Post.defaultProps = {
  title: "Default Page",
};

Post.displayName = "PostComponent";

export default Post;
