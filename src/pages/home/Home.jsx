import styles from './home.module.scss'
import picture1 from '/src/assets/images/image1.png'


export default function Home() {
    return (
        <>
            <div className={styles.banner}>
                <img src={picture1} alt="je suis une image" />
                <h1>
                    <span>Chez vous, </span>
                    <span>partout et ailleurs</span>
                </h1>
            </div>
        </>
    )
}