import { Outlet } from "react-router-dom";
import {createBrowserRouter, Navigate} from 'react-router-dom';
import { useStateContext } from "../context/ContextProvider";

export function GuestLayout(){

    const {token} = useStateContext()
    if(token){
        return <Navigate to={"/"} />
    }

    return(
        <div>
            <Outlet/>
        </div>
    )
}