import { userAPI } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  page: 1,
  isFetching: true,
  followingInProgres: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users};
    case SET_CURRENT_PAGE:
      return { ...state, page: action.page };
      case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
      case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
      case TOOGLE_IS_FOLLOWING_PROGRESS:
      return { ...state, followingInProgres: action.isFetching 
        ? [...state.followingInProgres, action.userId]
        : [state.followingInProgres.filter(id => id !== action.userId)]
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page
  };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
  };
};
export const toogleIsFetching = (isFetching) => {
  return {
    type: TOOGLE_IS_FETCHING,
    isFetching
  };
};
export const toogleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
  };
};


export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toogleIsFetching(true));
    dispatch(setCurrentPage(page));
    userAPI.requestUsers(page, pageSize).then((data) => {
      dispatch(toogleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      });
  }
  
} 
export const follow = (userId) => {
  return(dispatch) => {
    dispatch(toogleFollowingProgress(true, userId));
                    userAPI.follow(userId)                    
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          dispatch(followSuccess(userId));
                        }
                        dispatch(toogleFollowingProgress(false, userId));
                      });
  }
  
  
}
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toogleFollowingProgress(true, userId));
    userAPI.unfollow(userId)                    
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId));
        }
        dispatch(toogleFollowingProgress(false, userId));
      });
  }
  
  
} 

export default usersReducer;
