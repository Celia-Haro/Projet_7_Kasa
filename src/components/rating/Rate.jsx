import starGrey from '/src/assets/icons/star-grey.svg';
import starPrimary from '/src/assets/icons/star-primary.svg';
import styles from './rating.module.scss'
import PropTypes from 'prop-types';


export default function Rate({ rating }) {
    const rateRange = [1, 2, 3, 4, 5];

    return (
        <div className={styles.rating}>
            {rateRange.map((rangeElem) => (
                <img
                    key={rangeElem.toString()}
                    src={rating >= rangeElem ? starPrimary : starGrey}
                    alt={rating >= rangeElem ? "Full Star" : "Empty Star"}
                />
            ))}
        </div>
    );
}

Rate.propTypes = {
    rating: PropTypes.number,
};