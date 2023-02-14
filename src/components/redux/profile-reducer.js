import { profileAPI, userAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";
let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: "6" },
    { id: 2, message: "This is my first post", likesCount: "15" },
    { id: 3, message: "Hi, how are you?", likesCount: "6" },
    { id: 4, message: "This is my first post", likesCount: "15" },
  ],
  // newPostText: "",
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        // newPostText: "",
      };
    // case UPDATE_NEW_POST_TEXT:
    //   return {
    //     ...state,
    //     newPostText: action.newText,
    //   };
    case SET_USER_PROFILE:
      return{
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return{
        ...state,
        status: action.status
      }
      case SET_PHOTO_SUCCESS:
      return{
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText
  };
};
// export const updateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text,
//   };
// };
export const setUsersProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  };
};
export const savePhotoSuccess = (photos) => {
  return {
    type: SET_PHOTO_SUCCESS,
    photos
  };
};


export const getUserProfile = (userId) => async (dispatch) =>{
 let response = await userAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) =>{
 let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) =>{
 let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0){
      dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) =>{
  let response = await profileAPI.savePhoto(file)
     if(response.data.resultCode === 0){
       dispatch(savePhotoSuccess(response.data.data.photos));
     }
 }



export default profileReducer;
