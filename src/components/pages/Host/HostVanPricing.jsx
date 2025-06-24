import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const {vans} = useOutletContext()

    if(!vans || vans.length === 0){
        return <h2>Loading...</h2>
    }

    const van = vans[0]

    return (
        <section className="host-van-pricing">
            <h1>${van.price.toFixed(2)}<span>/day</span> </h1>
        </section>
    )
}