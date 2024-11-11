import styles from './card.module.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function Card({ logement }) {
    return (
        <Link to={`/rentalpage/${logement.id}`} className={styles.card}>
            <img src={logement.cover} alt={`Cover de ${logement.title}`} />
            <h3>{logement.title}</h3>
        </Link >
    )
};

Card.propTypes = {
    logement: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired
    }).isRequired
};
