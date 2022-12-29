const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: "6" },
    { id: 2, message: "This is my first post", likesCount: "15" },
    { id: 3, message: "Hi, how are you?", likesCount: "6" },
    { id: 4, message: "This is my first post", likesCount: "15" },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;

// const profileReducer = (state = initialState, action) => {
//   let stateCopy = {
//     ...state,
//     posts: [...state.posts],
//   };

//   switch (action.type) {
//     case ADD_POST: {
//       let newPost = {
//         id: 5,
//         message: state.newPostText,
//         likesCount: 0,
//       };
//       stateCopy.posts.push(newPost);
//       stateCopy.newPostText = "";
//       return stateCopy;
//     }

//     case UPDATE_NEW_POST_TEXT: {
//       stateCopy.newPostText = action.newText;
//       return stateCopy;
//     }

//     default:
//       return state;
//   }
// };
