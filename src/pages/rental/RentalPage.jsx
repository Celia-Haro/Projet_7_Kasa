import { useParams } from "react-router-dom";
import logementsData from '/src/assets/data/logements.json';
import Slideshow from "../../components/gallery/Slideshow";
import styles from "./rentalPage.module.scss"
import Rate from '../../components/rating/Rate';
import Collapse from "../../components/collapse/Collapse";

export default function RentalPage() {

    const { id } = useParams();
    const logement = logementsData.find((logement) => logement.id === id)

    if (logement) {
        const {
            id,
            title,
            pictures = [],
            description,
            host: {
                name = "Nom indisponible",
                picture = ""
            } = {},
            rating = 0,
            location,
            equipments = [],
            tags = []
        } = logement;
        return (
            <div className={styles.content}>
                <Slideshow key={id} pictures={pictures} />
                <div className={styles.rentalInfo}>
                    <div className={styles.blocInfo} >
                        <div className={styles.headerContainer}>
                            <h1>{title}</h1>
                            <p>{location}</p>
                        </div>
                        <div className={styles.tagContainer}>
                            {tags.map((tag) =>
                                <div className={styles.tag} key={tag}>{tag}</div>
                            )}
                        </div>
                    </div>
                    <div className={styles.otherInfo}>
                        <div className={styles.blocHost}>
                            <p>{name}</p>
                            <img src={picture} alt={`Photo de ${name}`} />
                        </div>
                        <Rate rating={Number(rating)} />
                    </div>

                </div>
                <div className={styles.rentalDetails}>
                    <Collapse title="Description" content={description}></Collapse>
                    <Collapse title="Equipements" content={equipments}></Collapse>
                </div>


            </div>
        )
    }
}