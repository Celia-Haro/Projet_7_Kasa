import styles from '/src/pages/home/home.module.scss'
import picture2 from '/src/assets/images/pictures/image2.png'
import aboutList from '/src/assets/data/aboutList.js'
import Collapse from '../../components/collapse/Collapse'


function About() {
    return (
        <>
            <div className={styles.banner}>
                <img src={picture2} alt="je suis une image" />
            </div>
            {aboutList.map((item) => (
                <Collapse key={item.title} item={item} />
            ))
            }
        </>
    )
}

export default About