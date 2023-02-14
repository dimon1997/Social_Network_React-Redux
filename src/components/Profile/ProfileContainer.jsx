import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  getUserProfile,
  savePhoto,
  updateStatus,
} from "../redux/profile-reducer";
import { useParams } from "react-router-dom";
//import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

function withParams(ProfileContainer) {
  return (props) => <ProfileContainer {...props} params={useParams()} />;
}

class ProfileContainer extends React.Component {
  refreshProfile(){
    let userId = this.props.params.userId; ///matchAll() ?
    if (!userId) {
      userId = this.props.authorizeduserId;
      // if(!userId){
      //   this.props.history.push("/login")
      // }
    }
    this.props.getUserProfile(userId);

    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.props.params.userId !== prevProps.params.userId){
      this.refreshProfile();
    }
    
  }
  render() {
    return (
      <Profile
        isOwner={!this.props.params.userId}
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizeduserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withParams
  // withAuthRedirect
)(ProfileContainer);
