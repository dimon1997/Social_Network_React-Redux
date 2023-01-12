import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
  if(!props.profile){
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
          <img src={props.profile.photos.large} alt="" />
        </div>
        <div className={s.discriptionInfo}>
          <div>
            <h2>{props.profile.fullName}</h2>
            <p>Informations about me userId: {props.profile.userId}</p>
            <ProfileStatus status={"Hello my friends"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
