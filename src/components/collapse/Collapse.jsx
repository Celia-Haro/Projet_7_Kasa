import styles from './collapse.module.scss'

export default function Collapse({ item }) {
    return (
        <div className={styles.collapse}>
            <details key={item.title}>
                <summary>{item.title}</summary>
                {item.content}
            </details>
        </div>
    )
}