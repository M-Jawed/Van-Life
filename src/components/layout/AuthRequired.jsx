import {Outlet, Navigate} from 'react-router-dom'
import { useContext } from 'react'
import { useAuth } from '../AuthContext'

export default function AuthRequired(){

    const {isAuthenticated} = useAuth()

    if(!isAuthenticated){
        return <Navigate to='login' state={{message: "You must log in first"}} />
    }

    return <Outlet />
}