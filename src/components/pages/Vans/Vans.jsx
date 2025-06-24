import { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom";

export default function Vans(){
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get('type')

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
                setLoading(false)
            })
            .catch(err => {
                console.error('Failed to fetch vans:', err)
                setLoading(false)
            }) 
    }, [])

    if(loading){
        return <h2 className="loading-state">Loading...</h2>
    }

    const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vansList = filteredVans.map((van, index) => {
        return (
            <Link to={van.id} key={index} className="van-link" state={{search: searchParams.toString()}}>
                <div className="van-div">
                    <div className="van-image-div">
                        <img src={van.imageUrl} alt={`An image of a van by the name of ${van.name}`} />
                    </div>
                    <div className="van-text-div">
                        <h1> {van.name} </h1>
                        <h1 className="van-price"> ${van.price} <span>/day </span> </h1>
                    </div>
                    <span className={`van-type ${van.type}`}> {van.type.charAt(0).toUpperCase() + van.type.slice(1)} </span>
                </div>
            </Link>
        )
    })
    return (
        <section className="vans-page">
            <h1>Explore our vans</h1>
            <div className="vans-filter">
                <Link to='?type=simple' className="filtered-links">Simple</Link>
                <Link to='?type=rugged' className="filtered-links">Rugged</Link>
                <Link to='?type=luxury' className="filtered-links">Luxury</Link>
                {typeFilter ? <Link to='.' className="clear-filter">Clear Filters</Link> : null}
            </div>
            <div className="vans-list">
                {vansList}
            </div>
        </section>
    )
}