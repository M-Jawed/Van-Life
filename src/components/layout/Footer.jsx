import { FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return (
        <footer>
            <div className="footer-div">
                <p>© 2025 #VanLife</p>
                <p>All rights reserved</p>
            </div>
            <div className="contact-div">
                <p>Contact me on:</p>
                <ul>
                    <li> <a href="https://www.linkedin.com/in/jawed-alizada" target="_blank"> <FaLinkedin /> </a> </li>
                </ul>
            </div>
        </footer>
    )
}