import { useParams, Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaCaretLeft } from "react-icons/fa";

export default function VanDetails(){
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const location = useLocation()

    const prevFilter = location.state?.search || '' 

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                setVans([data.vans])
                setLoading(false)
            })
    }, [])
    
    if(loading){
        return <h2 className="loading-state">Loading...</h2>
    }

    const vanDetail = vans.map((van, index) => {
        return (
            <div className="van-detail" key={index}>
                <div className="van-detail-img-div">
                    <img src={van.imageUrl} alt={`Image of a van named ${van.name}`} />
                </div>
                <div className="van-detail-info">
                    <span className={`van-type ${van.type}`}> {van.type} </span>
                    <h1>{van.name}</h1>
                    <h2> ${van.price}<span>/day</span> </h2>
                    <p> {van.description} </p>
                    <button> Rent this van </button>
                </div>
            </div>
        )
    })

    return (
        <section className="van-detail-page">
            <div className="back-to-vans">
                <Link to={`..?${prevFilter}`}><p> <FaCaretLeft /> Back to all Vans</p></Link>
            </div>
            {vanDetail ? vanDetail : <h2>Loading...</h2>}
        </section>
    )
}