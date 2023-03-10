import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks = (props) => {

  
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status)

  useEffect(()=>{
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      { !editMode &&
        <div>
          <p>Status: <span onDoubleClick={activateEditMode}>
            {props.status || "-----"}
          </span>
          </p>
        </div>
      }
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            defaultValue={status}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
