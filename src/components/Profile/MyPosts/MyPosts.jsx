import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => {
    return <Post message={p.message} key={p.id} like={p.likesCount} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
  };

  return (
    <div className={s.postsblock}>
      <div className={s.postsblockHeader}>
        <h3 className={s.myPostH3}>My posts</h3>
      </div>
      <div className={s.postsblockTextAdd}>
        <textarea
          className={s.myPostTextArea}
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
        <button onClick={onAddPost} className={s.buttonStyle}>add post</button>
      </div>
      <div className={s.blockPostsElments}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
