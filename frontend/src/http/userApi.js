import { $authHost, $host } from "./index";
import { jwtDecode } from 'jwt-decode';

export const registration = async (login, password) => {
    const { data } = await $host.post('mak/rout/reg', { login, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const reg = async (login, password) => {
    const { data } = await $host.post('mak/rout/createuser', { login, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const logins = async (login, password) => {
    const { data } = await $host.post('mak/rout/login', { login, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const getAll = async () => {
    try {
        const { data } = await $host.get(`mak/rout/getallusers`)
        console.log(data)
        const { data1 } = await $host.get(`mak/rout/getallpassengers`)
        console.log(data1)
        const { data3 } = await $host.get(`mak/rout/getallschedules`)
        console.log(data3)
        const { data4 } = await $host.get(`mak/rout/getalltrains`)
        console.log(data4)
        const { data5 } = await $host.get(`mak/rout/getalltickets`)
        console.log(data5)
        const { data6 } = await $host.get(`mak/rout/getallvans`)
        console.log(data6)
        const { data7 } = await $host.get(`mak/rout/getallstations`)
        console.log(data7)

        return data.users
    } catch (error) {
        alert(error.response.data.message)
    }}

    export const insertPassengers = async (first_name, last_name) => {
        try {
            // console.log('axios', first_name, last_name)
            const { data } = await $authHost.post('mak/rout/createpassenger', {first_name, last_name })
            return data
        } catch (e) {
            alert(e.response.data.message)
        }
    }



    export const selectAllusers = async () => {
        try {
            const { data } = await $authHost.get(`mak/rout/getallusers`, {
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