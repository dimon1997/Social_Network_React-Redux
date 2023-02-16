// import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div className={s.profileInfo}>
        <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile}/>
      </div>
      <div className={s.myPosts}>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
