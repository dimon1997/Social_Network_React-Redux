import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";



class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toogleIsFetching(true);
    // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
    //     this.props.toogleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //   });
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);

    // this.props.getUsers(this.props.currentPage, this.props.pageSize)
    // this.props.setCurrentPage(pageNumber);
    // this.props.toogleIsFetching(true);
    // userAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
    //     this.props.toogleIsFetching(false);
    //     this.props.setUsers(data.items);
    //   });
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

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage:(pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount:(totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toogleIsFetching: (isFetching) => {
//       dispatch(toogleIsFetchingAC(isFetching))
//     }

//   };
// };



export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers}) (UsersContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


