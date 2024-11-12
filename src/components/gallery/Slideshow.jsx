import PropTypes from 'prop-types';
import { useState } from "react";
import styles from './slideshow.module.scss'


export default function Slideshow({ pictures }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <div className={styles.slideshowContainer}>
            <img className={styles.slide} src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            <img className={`${styles.arrow} ${styles.previous}`} onClick={goToPrevious} src="/src/assets/icons/arrow-back.svg" alt="Go to previous picture" />
            <img className={`${styles.arrow} ${styles.next}`} onClick={goToNext} src="/src/assets/icons/arrow-forward.svg" alt="Go to next picture" />
            <div className={styles.slideIndex} >{currentIndex + 1}/{pictures.length}</div>
        </div>
    )
}

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

