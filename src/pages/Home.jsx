import Banner from "../components/home/Banner"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <Banner />
            <div>
                {/* 1 card / Item ( logements.json) */}
                <article> <Link to="/lodgingdetail">Je suis une carte logement</Link></article>
                <article>Je suis une carte logement</article>
                <article>Je suis une carte logement</article>
                <article>Je suis une carte logement</article>
                <article>Je suis une carte logement</article>
                <article>Je suis une carte logement</article>
            </div>
        </>

    )
}

