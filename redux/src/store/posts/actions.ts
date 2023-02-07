export type AddPostAction = {
  type: "ADD_POST";
  payload: {
    text: string;
    username: string;
  };
};

export const addPostAction = (
  text: string,
  username: string
): AddPostAction => ({
  type: "ADD_POST",
  payload: {
    text,
    username,
  },
});

export type RemovePostAction = {
  type: "REMOVE_POST";
  payload: string;
};

export const removePostAction = (uuid: string): RemovePostAction => ({
  type: "REMOVE_POST",
  payload: uuid,
});

export type LikePostAction = {
  type: "LIKE_POST";
  payload: {
    uuid: string;
    username: string;
  };
};

export const likePostAction = (
  uuid: string,
  username: string
): LikePostAction => ({
  type: "LIKE_POST",
  payload: {
    uuid,
    username,
  },
});

export type UnlikePostAction = {
  type: "UNLIKE_POST";
  payload: {
    uuid: string;
    username: string;
  };
};

export const unlikePostAction = (
  uuid: string,
  username: string
): UnlikePostAction => ({
  type: "UNLIKE_POST",
  payload: {
    uuid,
    username,
  },
});

export type AddCommentPostAction = {
  type: "ADD_COMMENT_POST";
  payload: {
    uuid: string;
    comment: string;
  };
};

export const addCommentPostAction = (
  uuid: string,
  comment: string
): AddCommentPostAction => ({
  type: "ADD_COMMENT_POST",
  payload: {
    uuid,
    comment,
  },
});

export type Actions =
  | AddPostAction
  | RemovePostAction
  | LikePostAction
  | UnlikePostAction
  | AddCommentPostAction;
