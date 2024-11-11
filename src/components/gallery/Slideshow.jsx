import PropTypes from 'prop-types';
import { useState } from "react";


export default function Slideshow({ pictures }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <div className="carousel">
            <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />

            <button onClick={goToPrevious}>Précédent</button>
            <button onClick={goToNext}>Suivant</button>

            <div className="image-index">{currentIndex + 1} / {pictures.length}</div>
        </div>
    )
}

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

