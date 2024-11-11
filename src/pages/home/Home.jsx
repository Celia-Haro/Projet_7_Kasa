import Banner from '../../components/banner/Banner'
import styles from './home.module.scss'
import picture1 from '/src/assets/images/image1.png'
import logements from '/src/assets/data/logements.json'
import Card from '../../components/card/Card';


export default function Home() {

    const titleHome = (
        <>
            <span>Chez vous, </span>
            <span>partout et ailleurs</span>
        </>
    );

    return (
        <>
            <Banner picture={picture1} title={titleHome} shadow={true} />
            <div className={styles.cardContainer}>
                {logements.map((logement) => (
                    <Card key={logement.id} logement={logement} />
                ))
                }

            </div>
        </>
    )
}