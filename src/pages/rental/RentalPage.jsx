import { useParams } from "react-router-dom";
import logementsData from '/src/assets/data/logements.json';
import Slideshow from "../../components/gallery/Slideshow";

export default function RentalPage() {

    const { id } = useParams();
    const logement = logementsData.find((logement) => logement.id === id)

    if (logement) {
        return (
            <div>
                <h2>{logement.title}</h2>
                <Slideshow key={logement.id} pictures={logement.pictures} />
            </div>
        )
    } else {
        // Gérer le cas où les données du logement ne sont pas disponibles
        return <div>Chargement en cours...</div>;
    }

}

