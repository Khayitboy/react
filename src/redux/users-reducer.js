const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, photoUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fabout.fb.com%2Fmedia-gallery%2Fexecutives%2Fmark-zuckerberg%2F&psig=AOvVaw00iSRuuRU-sD8V9CXUu44Q&ust=1603907019787000&source=images&cd=vfe&ved=2ahUKEwie3c2yqdXsAhUCzCoKHcAbBN8Qr4kDegUIARC2AQ', followed:false, fullName: "Dmitry", status: 'I am a boss', location:{city:'Minsk', country:'Belarus'} },
        { id: 2, photoUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fabout.fb.com%2Fmedia-gallery%2Fexecutives%2Fmark-zuckerberg%2F&psig=AOvVaw00iSRuuRU-sD8V9CXUu44Q&ust=1603907019787000&source=images&cd=vfe&ved=2ahUKEwie3c2yqdXsAhUCzCoKHcAbBN8Qr4kDegUIARC2AQ', followed:true, fullName: "Sasha", status: 'I am a boss', location:{city:'Moscow', country:'Russia'} },
        { id: 3, photoUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fabout.fb.com%2Fmedia-gallery%2Fexecutives%2Fmark-zuckerberg%2F&psig=AOvVaw00iSRuuRU-sD8V9CXUu44Q&ust=1603907019787000&source=images&cd=vfe&ved=2ahUKEwie3c2yqdXsAhUCzCoKHcAbBN8Qr4kDegUIARC2AQ', followed:true, fullName: "Khayitboy", status: 'I am a boss', location:{city:'Tashkent', country:'Uzbekistan'} }
    ]
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
            return {...state, users:[...state.users, action.users]};
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

export default usersReducer;