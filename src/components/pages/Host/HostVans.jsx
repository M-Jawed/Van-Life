import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVan(){
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                return <h1>Sorry could not reload the vans: {err}</h1>
            })
    }, [])

    if(loading) {
        return <h1 className="loading-state">Loading...</h1>
    }

    const listedVans = vans.slice(0, 3).map((item, index) => {
        return (
            <div className="listed-van" key={index}>
                 <div className="listed-vans-img-div">
                    <img src={item.imageUrl} alt={`Image of a van with type of ${item.type} and with the name of ${item.name}`} />
            </div>
            <div className="listed-vans-info-div">
                <div className="listed-vans-info">
                    <h1> {item.name} </h1>
                    <p> ${item.price}/day </p>
                </div>
                <div className="listed-vans-link">
                     <Link to={`${item.id}`}>View</Link>
                </div> 
            </div>
            </div>
        )
    })

    return (
        <section className="host-vans">
            <h1 className="host-vans-heading">Your listed vans</h1>
            {listedVans ? listedVans : <h1>Loading...</h1>}
        </section>
    )
}