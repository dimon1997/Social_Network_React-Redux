import profileReducer, { addPostActionCreator } from "./profile-reducer";

test('length of post should be incremented', () => {
  let action = addPostActionCreator("Blablabla");
  let state = {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: "6" },
      { id: 2, message: "This is my first post", likesCount: "15" },
      { id: 3, message: "Hi, how are you?", likesCount: "6" },
      { id: 4, message: "This is my first post", likesCount: "15" },
    ]
  };
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

