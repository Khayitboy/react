import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'; 

export type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
    if(action.type === SET_INITIALIZED){
        return {
            ...state,
            initialized:true
        }
    }
    return state;
}

type initializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}

export const initializedSuccess = (): initializedSuccessActionType => {
    return {
        type:SET_INITIALIZED
    }
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;