import styles from './about.module.scss'
import picture2 from '/src/assets/images/image2.png'
import aboutList from '/src/assets/data/aboutList.js'
import Collapse from '../../components/collapse/Collapse'


export default function About() {
    return (
        <>
            <div className={styles.banner}>
                <img src={picture2} alt="je suis une image" />
            </div>
            <div>
                {aboutList.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content} />
                ))
                }
            </div>
        </>
    )
}
