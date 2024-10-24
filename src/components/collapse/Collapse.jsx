import styles from './collapse.module.scss'
import arrow from '/src/assets/images/icons/arrow.svg'

export default function Collapse({ item }) {

    const handleClick = (e) => {
        console.log('je clique !', e)
    }

    return (
        <div className={styles.collapse}>
            <details key={item.title}>
                <summary onClick={handleClick}>{item.title} <img src={arrow} alt="" /></summary>
                <p>{item.content}</p>
            </details>
        </div>
    )
}