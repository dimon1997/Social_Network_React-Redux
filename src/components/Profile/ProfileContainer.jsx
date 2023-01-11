import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../redux/profile-reducer";
import {useParams} from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

function withParams(ProfileContainer){
  return props => <ProfileContainer {...props} params={useParams()}/>
}


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId
    if(!userId){
       userId = 2;
     }
     this.props.getUserProfile(userId);
  }
  render() {
    

    return(
      <Profile {...this.props} profile={this.props.profile} />
    )
     
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withParams,
  withAuthRedirect
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


// let WithUrlDataContainerComponent = withParams(AuthRedirectComponent)

// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// export default connect(mapStateToProps, { setUsersProfile })(WithUrlDataContainerComponent);
