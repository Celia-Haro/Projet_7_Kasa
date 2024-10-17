import { NavLink } from "react-router-dom"
import logo from '../../assets/images/logo.svg'
import styles from './header.module.scss'

function Header() {
    return (
        <>
            <div className={styles.container}>
                <img src={logo} alt="Logo de Kasa"></img>
                <nav>
                    <NavLink to="/" >Accueil</NavLink>
                    <NavLink to="/about" >A Propos</NavLink>
                </nav>
            </div>
        </>
    )
}

export default Header