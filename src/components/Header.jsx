import { Link } from "react-router-dom"
import logo from '../assets/images/logo.svg'

function Header() {
    return (
        <>
            <img src={logo} alt="Logo de Kasa"></img>
            <ul>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </ul>
        </>
    )
}

export default Header