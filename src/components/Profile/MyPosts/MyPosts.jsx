import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControl";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const maxLength10 = maxLengthCreator(10)

const AddNewPostForm =(props)=>{
return(
  <form onSubmit={props.handleSubmit}>
    <Field component={Textarea} name={"newPostText"} validate={[required, maxLength10]} placeholder={"Post message"}/>
    <button>Add post</button>
  </form>
)
}

const AddPostFormRedux = reduxForm({form: "ProfileAddPostForm"})(AddNewPostForm)


const MyPosts = React.memo(props => {

  // shouldComponentUpdate(nextProps, nextState){
  //   return nextProps !== this.props || nextState !== this.state;
  // }

  
    let postsElements = [...props.posts].reverse().map((p) => {
      return <Post message={p.message} key={p.id} like={p.likesCount} />;
    });
  
    let onAddPost = (values)=>{
      props.addPost(values.newPostText)
    }
  
    return (
      <div className={s.postsblock}>
        <div className={s.postsblockHeader}>
          <h3 className={s.myPostH3}>My posts</h3>
        </div>
        <div className={s.postsblockTextAdd}>
          <AddPostFormRedux onSubmit={onAddPost}/>
          {/* <textarea
            className={s.myPostTextArea}
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
          <button onClick={onAddPost} className={s.buttonStyle}>add post</button> */}
        </div>
        <div className={s.blockPostsElments}>
          {postsElements}
        </div>
      </div>
    );
  
});

export default MyPosts;

// class MyPosts extends PureComponent {

//   // shouldComponentUpdate(nextProps, nextState){
//   //   return nextProps !== this.props || nextState !== this.state;
//   // }

//   render(){
//     let postsElements = this.props.posts.map((p) => {
//       return <Post message={p.message} key={p.id} like={p.likesCount} />;
//     });
  
//     let onAddPost = (values)=>{
//       this.props.addPost(values.newPostText)
//     }
  
//     return (
//       <div className={s.postsblock}>
//         <div className={s.postsblockHeader}>
//           <h3 className={s.myPostH3}>My posts</h3>
//         </div>
//         <div className={s.postsblockTextAdd}>
//           <AddPostFormRedux onSubmit={onAddPost}/>
//           {/* <textarea
//             className={s.myPostTextArea}
//             onChange={onPostChange}
//             ref={newPostElement}
//             value={props.newPostText}
//           ></textarea>
//           <button onClick={onAddPost} className={s.buttonStyle}>add post</button> */}
//         </div>
//         <div className={s.blockPostsElments}>
//           {postsElements}
//         </div>
//       </div>
//     );
//   }
  
// };
