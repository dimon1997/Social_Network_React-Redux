import React from "react";
import axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUsersProfile } from "../redux/profile-reducer";
import {useParams} from "react-router-dom";

function withParams(ProfileContainer){
  return props => <ProfileContainer {...props} params={useParams()}/>
}


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId
    if(!userId){
       userId = 2;
     }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUsersProfile(response.data);
      });
  }
  render() {
    return(
      <Profile {...this.props} profile={this.props.profile} />
    )
     
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});
let WithUrlDataContainerComponent = withParams(ProfileContainer)

export default connect(mapStateToProps, { setUsersProfile })(WithUrlDataContainerComponent);

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// export default connect(mapStateToProps, { setUsersProfile })(WithUrlDataContainerComponent);
