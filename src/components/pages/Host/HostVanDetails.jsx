import { useParams } from "react-router-dom"
import { NavLink, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaCaretLeft } from "react-icons/fa";

export default function HostVanDetails(){
    const [vans, setVans] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVans([data.vans]))
    }, [])

    const hostVanDetails = vans.map((item, index) => {
        return (
                <div className="host-van-details" key={index}>
                    <div className="host-van-details-img">
                        <img src={item.imageUrl} alt={`Image of a van with the type of ${item.type} and with the name of ${item.name}`} />
                    </div>
                    <div className="host-van-details-info">
                        <span className={`van-type ${item.type}`}> {item.type} </span>
                        <h1 className="host-van-details-heading"> {item.name} </h1>
                        <h1> ${item.price}<span>/day</span> </h1>
                    </div>
                </div> 
        )
    })

    const isActiveStyles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        textUnderlineOffset: '4px'
    }

    return (
        <section className="host-van-details-page">
            <NavLink to='../vans' className='host-van-link'>
                <FaCaretLeft /> Back to all vans
            </NavLink>

            <div className="host-van-details-section">
                {hostVanDetails}
                <nav className="host-van-details-links">

                    <NavLink 
                        to='.' 
                        style={({isActive}) => isActive ? isActiveStyles : null}
                        end
                    >
                        Details
                    </NavLink>

                    <NavLink 
                        to='pricing' 
                        style={({isActive}) => isActive ? isActiveStyles : null}
                    >
                        Pricing
                    </NavLink>

                    <NavLink 
                        to='photos' 
                        style={({isActive}) => isActive ? isActiveStyles : null}
                    >
                        Photos
                    </NavLink>

                </nav>
                <Outlet context={{vans, setVans}} />
            </div>
        </section>
    )
}