// import React from "react";
import { connect } from "react-redux";
// import StoreContext from "../../../StoreContext";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
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
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().profilePage;
//         let addPost = () => {
//           // props.addPost();
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           // let text = newPostElement.current.value;
//           // props.updateNewPostText(text);
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.posts}
//             newPostText={state.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

export default MyPostsContainer;
