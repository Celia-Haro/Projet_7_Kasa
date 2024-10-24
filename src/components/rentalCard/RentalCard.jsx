import styles from './rentalCard.module.scss'

export default function RentalCard({ logement }) {
    return (
        <div className={styles.card}>
            <img src={logement.cover} alt={`Cover de ${logement.title}`} />
            <h3>{logement.title}</h3>
        </div >

    )
}