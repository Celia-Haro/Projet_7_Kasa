import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from './errorPage.module.scss'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

export default function ErrorPage() {
    const error = useRouteError()
    return (
        <div className={styles.appContainer}>
            <Header />
            <div className={styles.contentContainer}>

                <h1> {error.status}</h1>
                <p>
                    <span>Oups ! La page que </span>
                    <span>vous avez demandé n&apos;existe pas.</span>
                </p>
                <Link to="./">Retourner sur la page d&apos;accueil</Link>


            </div>
            <Footer />
        </div>
    )

}