import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize:10,
    totalUsersCount:0,
    currentPage:1,
    isFetching: false,
    followingInProgress:[]
};

const usersReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users:state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u,followed:true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u,followed:false};
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount:action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching:action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                 followingInProgress:action.isFetching 
                 ? [...state.followingInProgress, action.userId]
                 : state.followingInProgress.filter(id=>id!==action.userId)
                };
        default:
            return state;

    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type:UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type:SET_USERS,
        users
    }
}

export const setCurrentPageAC = (currentPage) => {
    return {
        type:SET_CURRENT_PAGE,
        currentPage:currentPage
    }
}
export const setTotalUsersCountAC = (totalCount) => {
    return {
        type:SET_TOTAL_USERS_COUNT,
        count:totalCount
    }
}
export const toogleIsFetchingAC = (isFetching) => {
    return {
        type:TOGGLE_IS_FETCHING,
        isFetching:isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type:TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}



export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(toogleIsFetchingAC(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toogleIsFetchingAC(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCountAC(data.totalCount));
    });
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.Follow(id).then(data => {
            if(data.resultCode === 0){
                dispatch(followAC(id));   
            }
            dispatch(toggleFollowingProgress(false, id)); 
        });
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.unFollow(id).then(data => {
            if(data.resultCode === 0){
                dispatch(unfollowAC(id));  
            }
            dispatch(toggleFollowingProgress(false, id)); 
        });
    }
}


export default usersReducer;