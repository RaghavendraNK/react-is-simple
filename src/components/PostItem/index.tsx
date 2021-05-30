import React from "react";
import { POST } from "../../types/posts.type";

interface Props {
  data: POST;
}

const PostItem = (props: Props): JSX.Element => {
  const { title, body } = props.data;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostItem;
