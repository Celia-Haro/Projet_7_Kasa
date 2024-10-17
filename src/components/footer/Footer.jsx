// import logowhite from '../assets/images/logowhite.svg'
// import styles from './components/footer/footer.module.scss'

function Footer() {
    return (
        <div className={styles.container}>
            <img src={logowhite} alt="Logo de Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
