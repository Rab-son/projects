import { Outlet } from "react-router-dom";
import {createBrowserRouter, Navigate} from 'react-router-dom';
import { useStateContext } from "../contexts/ContextProvider";

export function DefaultLayout(){
    const {user, token} =  useStateContext()

    if(!token){
        return <Navigate to="/login" />
    }

    return(
        <div>
            Default
            <Outlet/>
        </div>
    )
}