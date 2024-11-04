// import { NavLink } from "react-router-dom"
import logo from '/src/assets/logo/logo.svg'
import styles from '/src/components/header/header.module.scss'

function Header() {
    return (
        <header className={styles.container}>
            <img src={logo} alt="Logo de Kasa"></img>
            <nav>
                {/* <NavLink to="/" >Accueil</NavLink>
                <NavLink to="/about" >A Propos</NavLink> */}
            </nav>
        </header>
    )
}

export default Header