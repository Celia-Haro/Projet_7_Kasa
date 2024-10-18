import styles from './rentalCard.module.scss'

export default function RentalCard() {
    return (
        <div className={styles.card}>
            <img src="" alt="Ca doit correspondre au cover de chaque rental cover" />
            <h3>Titre de la location</h3>
        </div>
    )
}