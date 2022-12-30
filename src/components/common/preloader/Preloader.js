import React from "react";
import preloader from "../../../assets/preloader/preloader.svg"

let Preloader = () => {
  return (
    <div>
      <img src={preloader} alt="don't load" />
    </div>
  );
};

export default Preloader;