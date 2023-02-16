import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
//import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/photoUsers/user.png"
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if(!profile){
    return <Preloader />
  }

  const onMainPhotoSelected = (e) =>{
   if(e.target.files.length){
    savePhoto(e.target.files[0])
   } 
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(()=>{
      setEditMode(false);
    })
    
   //console.log(formData)
    
  };

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
          <img src={profile.photos.large || userPhoto} alt="" />
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected}></input>}
        </div>
        <div className={s.discriptionInfo}>
          {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode}) =>{
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <h2>{profile.fullName}</h2>
      </div>
      {/* <div>
        <b>Informations about me userId: {profile.userId}</b>
      </div> */}
      <div>
        <b>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</b>
      </div>
      <div>
        {profile.lookingForAJob && (
          <b>My professional skills: {profile.lookingForAJobDescription}</b>
        )}
      </div>
      <div>
        <b>About me: {profile.aboutMe}</b>
      </div>

      <div>
        Contacts:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  ); 
}

const Contact =({contactTitle, contactValue}) =>{
return <div className={s.contact}><p>{contactTitle} : {contactValue}</p></div>
}

export default ProfileInfo;
