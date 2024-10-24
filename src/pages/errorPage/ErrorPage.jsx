import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from './errorPage.module.scss'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

export default function ErrorPage() {
    const error = useRouteError()
    return (
        <div className="errorPage">
            <Header />
            <div className={styles.errorContainer}>
                <h1> {error.status}</h1>
                <p>Oups ! La page que vous avez demandé n'existe pas.</p>
                <Link to="./">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )

}