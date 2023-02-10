import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toogleFollowingProgress,
  requestUsers,
} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
//import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgres,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
} from "../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }
  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgres={this.props.followingInProgres}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgres: getFollowingInProgres(state),
  };
};

export default compose(
  //withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toogleFollowingProgress,
    requestUsers,
  })
)(UsersContainer);

// let withRedirect = withAuthRedirect(UsersContainer);
// export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers}) (withRedirect);

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
