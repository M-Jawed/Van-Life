import { NavLink } from "react-router-dom"

export default function HostHeader(){

    const isActiveStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        textUnderlineOffset: '4px'
    }

    return (
        <header className="host-header">
            <nav className="host-nav">
                <ul>
                    <li> <NavLink 
                        to='.'
                        style={({isActive}) => isActive ? isActiveStyle : null} 
                        end
                        > Dashboard </NavLink> </li>
                    <li> 
                        <NavLink 
                            to='income'
                            style={({isActive}) => isActive ? isActiveStyle : null}
                            > Income </NavLink> </li>
                    <li> <NavLink 
                        to='vans'
                        style={({isActive}) => isActive ? isActiveStyle : null}
                        > Vans </NavLink> </li>
                    <li> <NavLink 
                        to='reviews'
                        style={({isActive}) => isActive ? isActiveStyle : null}
                        > Reviews </NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}