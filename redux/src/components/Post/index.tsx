import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Post as PostType } from "../../store/posts";
import {
  addCommentPostAction,
  likePostAction,
  removePostAction,
  unlikePostAction,
} from "../../store/posts/actions";
import { getUsername } from "../../store/user/selectors";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { CommentContainer, LikeContainer, TextPost } from "./styled-components";

interface PostProps {
  post: PostType;
  uuid: string;
}

const Post = ({ post, uuid }: PostProps) => {
  const dispatch = useDispatch();
  const username = useSelector(getUsername);
  const [text, setText] = useState("");

  const renderCommentComponent = () => (
    <CommentContainer>
      <Input
        value={text}
        placeholder="Comment"
        onChange={(textInput) => setText(textInput)}
      />
      <Button
        text="✔️"
        onClick={() => {
          dispatch(addCommentPostAction(uuid, text));
          setText("");
        }}
      />
    </CommentContainer>
  );

  const renderLikeButton = () => {
    const userAlreadyLiked = post.likes.find((u) => u === username);
    return (
      <Button
        text={userAlreadyLiked ? "👎🏻" : "👍🏻"}
        onClick={() => {
          userAlreadyLiked
            ? dispatch(unlikePostAction(uuid, username))
            : dispatch(likePostAction(uuid, username));
        }}
      />
    );
  };

  return (
    <>
      <LikeContainer>
        <TextPost>
          {post.text} - {post.likes.length} 👍🏻
        </TextPost>
        {username && renderLikeButton()}
        {username && username === post.username && (
          <Button
            text="🗑"
            onClick={() => {
              dispatch(removePostAction(uuid));
            }}
          />
        )}
      </LikeContainer>
      <ul>
        {post.comments.map((text) => (
          <li>{text}</li>
        ))}
      </ul>
      {username && renderCommentComponent()}
    </>
  );
};

export default Post;