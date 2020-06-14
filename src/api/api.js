import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

const set = {withCredentials: true, headers: {'API-KEY': '79d0b5ff-d44c-4805-98f4-b6b4db11789b'}}


export const usersAPI = {
    getUsers(pageSize = 3, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`, set)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`, set)
            .then(response => {
                return response.data
            })
    },
    authMe() {
        return instance.get(`auth/me`, set)
            .then(response => {
                return response
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`, null, set)
            .then(response => {
                return response
            })
    },
    unfollow(id) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, set)
            .then(response => {
                return response
            })
    }
}
