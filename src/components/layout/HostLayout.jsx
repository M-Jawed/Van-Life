import HostHeader from "./HostHeader";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function HostLayout(){
    return (
        <>
        
        <HostHeader />
        <Outlet />

        </>
    )
}