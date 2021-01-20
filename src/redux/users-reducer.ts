import { usersAPI } from "../api/api";
import { UserType } from "../types/types";
import { AppStateType } from "./redux-store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
};

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
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
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

type ActionsTypes = followActionType | unfollowActionType | setUsersActionType | setCurrentPageActionType |
setTotalUsersCountActionType | toogleIsFetchingActionType | toggleFollowingProgressActionType;

type followActionType = {
  type: typeof FOLLOW
  userId: number
}

export const followAC = (userId: number): followActionType => {
  return {
    type: FOLLOW,
    userId,
  };
};

type unfollowActionType = {
  type: typeof UNFOLLOW
  userId: number
}

export const unfollowAC = (userId: number): unfollowActionType => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

type setUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): setUsersActionType => {
  return {
    type: SET_USERS,
    users,
  };
};
type setCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};

type setTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}

export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountActionType => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalCount,
  };
};

type toogleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

export const toogleIsFetchingAC = (isFetching: boolean): toogleIsFetchingActionType => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};

type toggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

// type getStateType = () => AppStateType;
// type dispatchType = Dispatch<ActionsTypes>;
type thunkType =  ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
export const getUsers = (page: number, pageSize: number): thunkType => {
  return async (dispatch, getState) => {
    dispatch(toogleIsFetchingAC(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toogleIsFetchingAC(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCountAC(data.totalCount));
  };
};

export const follow = (id: number): thunkType => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    let data = await usersAPI.Follow(id);
    if (data.resultCode === 0) {
      dispatch(followAC(id));
    }
    dispatch(toggleFollowingProgress(false, id));
  };
};

export const unfollow = (id: number): thunkType => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    let data = await usersAPI.unFollow(id);
    if (data.resultCode === 0) {
      dispatch(unfollowAC(id));
    }
    dispatch(toggleFollowingProgress(false, id));
  };
};

export default usersReducer;
