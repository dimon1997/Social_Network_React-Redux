// import React from "react";
import { connect } from "react-redux";
// import StoreContext from "../../../StoreContext";
import {
  addPostActionCreator,
  // updateNewPostTextActionCreator,
} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
    //  updateNewPostText: (text) => {
    //    dispatch(updateNewPostTextActionCreator(text));
    //  },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
