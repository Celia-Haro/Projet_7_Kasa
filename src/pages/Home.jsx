import Banner from "../components/Banner"
import logements from '../assets/data/logements.json'
import { Link } from "react-router-dom"

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

