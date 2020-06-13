import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
});

export let usersAPI = {
    getUsers(pageSize = 3, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response
            })
    },
    follow(id) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, null,
            {withCredentials: true, headers: {'API-KEY': '79d0b5ff-d44c-4805-98f4-b6b4db11789b'}})
            .then(response => {
                return response
            })
    },
    unfollow(id) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {'API-KEY': '79d0b5ff-d44c-4805-98f4-b6b4db11789b'}
        })
            .then(response => {
                return response
            })
    }
}