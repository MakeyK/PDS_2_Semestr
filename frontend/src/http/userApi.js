import { $authHost, $host } from "./index";
import { jwtDecode } from 'jwt-decode';

export const registration = async (login, password) => {
    const { data } = await $host.post('mak/rout/registration', { login, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (login, password) => {
    const { data } = await $host.post('mak/rout/login', { login, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const selectAllusers = async () => {
    try {
        const { data } = await $authHost.get(`mak/route/getallusers`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return data.user_files

    } catch (e) {
        alert(e.response.data.message)
    }
}


export const getProfile = async () => {
    try {
        const { data } = await $authHost.get('cwh/select/profile', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return data

    } catch (e) {
        alert(e.response.data.message)
    }
}

export const changeProfile = async (nickname, email) => {
    try {
        const { data } = await $authHost.patch('cwh/edit/profile', { nickname, email }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        return data

    } catch (e) {
        alert(e.response.data.message)
    }
}