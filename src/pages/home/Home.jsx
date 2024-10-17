import logements from '/src/assets/data/logements.json'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div className="banner-container">
                <img src="" alt="je suis une image" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
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

