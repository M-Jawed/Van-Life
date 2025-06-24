import { useOutletContext } from "react-router-dom"

export default function HostVanInfo(){
    const {vans} = useOutletContext()

    if(!vans || vans.length === 0){
        return <h2>Loading...</h2>
    }
    
    const van = vans[0]

    return (
        <section className="host-van-info-section">
            <h1>Name: <span>{van.name}</span> </h1>
            <h1>Category: <span> {van.type.charAt(0).toUpperCase() + van.type.slice(1)} </span> </h1>
            <h1>Description: <span> {van.description} </span> </h1>
            <h1>Visibility: <span>Public</span>  </h1>
        </section>
    )
}