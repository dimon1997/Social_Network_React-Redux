import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
//import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";



class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return <div>
      {this.props.isFetching ? <Preloader /> : null}
<Users totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}
    onPageChanged={this.onPageChanged}
    users={this.props.users}
    unfollow={this.props.unfollow}
    follow={this.props.follow}
    followingInProgres={this.props.followingInProgres}
    />  
    </div>
    
  }
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgres: state.usersPage.followingInProgres
  };
};


export default compose(
  //withAuthRedirect,
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers}),
)(UsersContainer);

// let withRedirect = withAuthRedirect(UsersContainer);
// export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers}) (withRedirect);

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


