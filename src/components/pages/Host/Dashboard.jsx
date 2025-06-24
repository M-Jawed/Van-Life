import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Dashboard(){
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

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
                        <Link to={`vans/${item.id}`}>View</Link>
                    </div> 
                </div>
            </div>
        )
    })

    return (
        <section className="host-dashboard">
            <div className="host-dashboard-div">
                <div className="host-dashboard-welcome">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h1 className="host-dashboard-income">$2,260</h1>
                </div>
                <div className="host-dashboard-details">
                    <Link to='income'>Details</Link>
                </div>
            </div>

            <div className="host-dashboard-review">
                <div className="host-dashboard-review-div">
                    <h1>Review score</h1>
                    <h1 className="h-star"> <FaStar  className="star-host" /> 5.0<span>/5</span> </h1>
                </div>
                <div className="host-dashboard-review-link">
                    <Link to='reviews'>Details</Link>
                </div>
            </div>

            <div className="host-listed-vans">
                <div className="listed-vans-heading">
                    <h1>Your listed vans</h1>
                    <Link to='vans'>View all</Link>
                </div>
                <div className="vans-div">
                    {listedVans}
                </div>
            </div>
        </section>
    )
}