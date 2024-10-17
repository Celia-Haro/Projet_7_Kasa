import Banner from "../components/home/Banner"
import logements from '../assets/data/logements.json'
import { Link } from "react-router-dom"


// const logements = [{ id: 1, name: 'Pomme', color: 'rouge' }, { id: 2, name: 'Banane', color: 'jaune' }, { id: 3, name: 'Orange', color: 'orange' }];
export default function Home() {
    return (
        <>
            <Banner />
            <div>
                {/* 1 card / Item ( logements.json) */}
                <article> <Link to="/lodgingdetail">Je suis une carte logement!</Link></article>
                {logements.map((logement) => (
                    <article key={logement.id}>{logement.title}</article>
                ))
                }
            </div>
        </>

    )
}

