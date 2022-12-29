import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "6" },
        { id: 2, message: "This is my first post", likesCount: "15" },
        { id: 3, message: "Hi, how are you?", likesCount: "6" },
        { id: 4, message: "This is my first post", likesCount: "15" },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Ben" },
        { id: 3, name: "Tom" },
        { id: 4, name: "Sara" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Good" },
      ],
      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("State rerender");
  },
  _getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._callSubscriber(this._state);
  },
};

export default store;

// _addPost() {
//   let newPost = {
//     id: 5,
//     message: this._state.profilePage.newPostText,
//     likesCount: 0,
//   };
//   this._state.profilePage.posts.push(newPost);
//   this._state.profilePage.newPostText = "";
//   this._callSubscriber(this._state);
// },
// _updateNewPostText(newText) {
//   this._state.profilePage.newPostText = newText;
//   this._callSubscriber(this._state);
// },
//
// dispatch(action) {
//   if (action.type === 'ADD-POST') {
//     this._addPost();
//   } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//     this._updateNewPostText(action.newText);
//   }
// },
