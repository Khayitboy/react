import axios from 'axios';
import { profileType } from '../types/types';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "10284823-4087-4b27-9f53-f347637049d1"
    },
    baseURL : 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage=1,pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    Follow(id: number){
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        }) 
    },
    unFollow(id: number){
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        }) 
    }
}

export const profileAPI = {
    getProfile(userId: number){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string){
        return instance.put(`profile/status`,{status: status});
    },
    savePhoto(photoFile: any){
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        });
    },
    saveProfile(profile: profileType){
        return instance.put(`profile`, profile);
    }
}

export enum resultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum resultCodeForCaptcha {
    captchaIsRequired = 10
}

type meResponseType = {
    data: {id: number, email: string, login: string}
    resultCode: resultCodesEnum
    messages: Array<string>
}

type loginResponseType = {
    data: {userId: number}
    resultCode: resultCodesEnum | resultCodeForCaptcha
    messages: Array<string>
}

export const authAPI = {
    me(){
        return instance.get<meResponseType>(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = "null"){
        return instance.post<loginResponseType>(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}



export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}