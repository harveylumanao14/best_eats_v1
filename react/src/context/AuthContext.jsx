import React, { createContext, useContext, useState } from 'react'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [errors, setErrors] = useState([])
    const [user, setUser] = useState("")
    const navigate = useNavigate()

    const csrf = () => axios.get('/sanctum/csrf-cookie', { withCredentials: true })

    const getUser = async () => {
        const { data } = await axios.get('/api/user')
        setUser(data)
    }

    const login = async ({ ...data }) => {
        await csrf()

        try {
            await axios.post('/login', { data })
            getUser()
            navigate("/")
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    const register = async ({ ...data }) => {
        await csrf()

        try {
            await axios.post('/register', { data })
            getUser()
            navigate("/")
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors)
            }
        }
    }

    return <AuthContext.Provider value={{ user, errors, getUser, login, register }} >
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext(){
        return useContext(AuthContext) ;
}
