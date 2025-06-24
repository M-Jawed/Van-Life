import { NavLink } from "react-router-dom"
import { useAuth } from "../AuthContext"

export default function Header(){
    const isActiveStyle = {
        textDecoration: '2px solid underline',
        textUnderlineOffset: '4px'
    }

    const {isAuthenticated, logout} = useAuth()
    return (
        <header className="homepage-header">
            <nav>
                <NavLink to='/' 
                    className='home-link'
                    style={({isActive}) => isActive ? isActiveStyle : null}
                >
                            #VANLIFE
                </NavLink>
                <ul>
                    <li>
                        <NavLink to='host' className={({isActive}) => isActive ? 'is-active' : null}>
                            Host
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='about' className={({isActive}) => isActive ? 'is-active': null}>
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='vans' className={({isActive}) => isActive ? 'is-active' : null}>
                            Vans
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='login' className={'login-link'}>
                            <button className='login-link-btn' onClick={logout}> {isAuthenticated ? 'Log out' : 'Log in'} </button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}