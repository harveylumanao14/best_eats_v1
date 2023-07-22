import React, { useState, useEffect } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const Users = () => {
    const [newEmail, setEmail] = useState("")
    const [newPassword, setPassword] = useState("")

    const [users, setUsers] = useState([])
    const usersRef = collection(db, 'users')

    const createUser = async () => {
        await addDoc(usersRef,
            {
                email: newEmail,
                password: newPassword
            })
    }

    const updateUser = async (id, field) => {
        const userDoc = doc(db, 'users', id)
        await updateDoc(userDoc,
            {
                email: field,
            })
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, 'users', id)
        await deleteDoc(userDoc)
    }

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersRef)
            setUsers(
                data.docs.map((doc) =>
                (
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                )
                ))
        }

        getUsers()
    }, [])

    return (
        <div>
            <div className='flex flex-col py-2'>
                <input
                    type="email"
                    placeholder='Email'
                    className='w-full py-4 bg-transparent border-b border-black outline-none focus:outline-none'
                    onChange={(event) => { setEmail(event.target.value) }}
                />
            </div>
            <div className='flex flex-col py-2'>
                <input
                    type="password"
                    placeholder='Password'
                    className='w-full py-4 bg-transparent border-b border-black outline-none focus:outline-none'
                    onChange={(event) => { setPassword(event.target.value) }}
                />

            </div>
            <div className='flex flex-col py-2'>
                <input
                    type="password"
                    placeholder='Confirm Password'
                    className='w-full py-4 bg-transparent border-b border-black outline-none focus:outline-none' />
            </div>

            <div className='w-full flex flex-col py-4'>
                <button onClick={createUser} className='w-full my-1 text-[#060606]  font-semibold bg-white border-1 border-black rounded-full p-4 text-center flex items-center justify-center'>
                    Register
                </button>
            </div>
            {users.map((user, index) => {
                return (
                    <div key={index}>
                        <h1>Email: {user.email}</h1>
                        <h1>Password: {user.password}</h1>
                    </div>
                )

            })
            }
        </div>
    )
}

export default Users