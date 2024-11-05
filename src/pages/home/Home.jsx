import Banner from '../../components/banner/Banner'
import styles from './home.module.scss'
import picture1 from '/src/assets/images/image1.png'


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
                {/* {logements.map((logement) => (
                    <RentalCard key={logement.id} logement={logement} />
                ))
                } */}

            </div>
        </>
    )
}