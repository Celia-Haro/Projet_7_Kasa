import logowhite from '/src/assets/logo/logowhite.svg'
import styles from '/src/components/footer/footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <img src={logowhite} alt="Logo de Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}