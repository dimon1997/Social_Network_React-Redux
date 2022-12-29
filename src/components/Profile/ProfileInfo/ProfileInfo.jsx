import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profileHeader}>
        <img
          src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg?w=2000"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.discriptionPhoto}>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        </div>
        <div className={s.discriptionInfo}>
          <div>
            <h2>Dmytro Lavrynchuk</h2>
            <p>Informations about me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
