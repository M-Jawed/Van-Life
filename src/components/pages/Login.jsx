import { replace, useLocation, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { loginUser } from "../../api"
import { useAuth } from "../AuthContext"

export default function Login(){
    const [formData, setFormData] = useState({email: '', password: ''})
    const location = useLocation()
    const navigate = useNavigate()
    const message = location.state?.message || ''
    const from = location.state?.from?.pathname || '/'
    const {login} = useAuth()

    async function handleSubmit(e){
        e.preventDefault()

        if(formData.email === 'b@b.com' && formData.password === 'p123'){
            try {
                await loginUser({email: formData.email, password: formData.password})

                login({username: formData.email})
                navigate(from, {replace: true})
            } catch (err) {
                alert('Login failed', err.message)
            }
        } else {
            alert('Invalid credentials')
        }
    }

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return(
        <section className="login-section">
            <form onSubmit={handleSubmit} className="form">
                <h1>Sign in to your account</h1>
                <p>use username: b@b.com pass: p123</p>

                {message ? <p className="log-in-first"> {message} </p> : ''}

                <div className="form-inputs">
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange} />

                    <input 
                    type="password"     
                    name="password" 
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange} />

                    <button type="submit">Sign In</button>
                </div>
                <p>Don't have an account? <span>Create one now</span></p> 
            </form>
        </section>
    )
}