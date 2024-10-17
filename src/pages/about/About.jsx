import styles from '/src/pages/home/home.module.scss'
import picture2 from '/src/assets/images/pictures/image2.png'

function About() {
    return (
        <>
            <div className={styles.banner}>
                <img src={picture2} alt="je suis une image" />
            </div>
        </>
    )
}

export default About