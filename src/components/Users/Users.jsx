import axios from "axios";
import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/photoUsers/user.png";

let Users = (props) => {
  let getUsers = () =>{
    if(props.users.length === 0){
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items);
      });
    
     }
  }

    
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small: userPhoto} alt="don't load" className={s.ava}/>
            </div>
            <div>
                
             {u.followed ? (
                <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;


// props.setUsers([
//   { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxS9mLOcvLmWZziaZeB1G0DVbCJpxV_SpUQ&usqp=CAU', followed: false, fullName: "Bob?", status: "I'm a bosss", location:  {city: "Minsk", country: "Belarus"}},
//   { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxS9mLOcvLmWZziaZeB1G0DVbCJpxV_SpUQ&usqp=CAU', followed: true, fullName: "Stiv", status: "I'm a engineer", location:  {city: "Moskow", country: "Russia"}},
//   { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxS9mLOcvLmWZziaZeB1G0DVbCJpxV_SpUQ&usqp=CAU', followed: false, fullName: "Ron", status: "I'm a server", location:  {city: "Kiev", country: "Ukraine"}}
   
// ])