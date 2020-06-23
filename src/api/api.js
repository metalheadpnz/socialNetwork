import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '79d0b5ff-d44c-4805-98f4-b6b4db11789b'
    }
});

export const usersAPI = {

    getUsers(pageSize = 3, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },

    login (email, password, rememberMe=false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout(){
        return instance.delete(`auth/login`)
    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}
