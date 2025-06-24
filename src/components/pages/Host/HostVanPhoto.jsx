import { useOutletContext } from "react-router-dom"

export default function HostVanPhoto(){
    const {vans} = useOutletContext()

    if(!vans || vans.length === 0){
        return <h2>Loading...</h2>
    }

    const van = vans[0]
    return (
        <section className="host-van-photos-section">
            <div className="host-van-photo">
                <img src={van.imageUrl} alt={`Image of a van with the type of ${van.type} and with the name of ${van.name}`} />
            </div>
        </section>
    )
}