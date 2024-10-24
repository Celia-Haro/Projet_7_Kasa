import logements from '/src/assets/data/logements.json'
// import { Link } from "react-router-dom"
import styles from '/src/pages/home/home.module.scss'
import picture1 from '/src/assets/images/pictures/image1.png'
import RentalCard from '/src/components/rentalCard/RentalCard'

export default function Home() {
    return (
        <>
            <div className={styles.banner}>
                <img src={picture1} alt="je suis une image" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className={styles.cardContainer}>
                {logements.map((logement) => (
                    <RentalCard key={logement.id} logement={logement} />
                ))
                }

            </div>
        </>
    )
}

