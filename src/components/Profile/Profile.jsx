// import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div className={s.profileInfo}>
        <ProfileInfo />
      </div>
      <div className={s.myPosts}>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
