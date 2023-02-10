import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
//import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile){
    return <Preloader />
  }

  return (
    <div>
      {/* <div className={s.profileHeader}>
        <img
          src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg?w=2000"
          alt=""
        />
      </div> */}
      <div className={s.descriptionBlock}>
        <div className={s.discriptionPhoto}>
          <img src={profile.photos.large} alt="" />
        </div>
        <div className={s.discriptionInfo}>
          <div>
            <h2>{profile.fullName}</h2>
            <p>Informations about me userId: {profile.userId}</p>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
