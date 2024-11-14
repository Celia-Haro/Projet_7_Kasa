import styles from './collapse.module.scss'
import arrow from '/src/assets/icons/arrow.svg'
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);

    };

    return (
        <div className={styles.collapse}>
            <details key={title} open={isOpen}>
                <summary onClick={toggleOpen}>
                    {title}
                    <img src={arrow} alt="" />
                </summary>
                {Array.isArray(content) ? (
                    <div className={`${styles.blocDetail} ${isOpen ? styles.blocDetailOpen : ''}`} >
                        {content.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                ) : (
                    <p className={styles.blocDetail}>{content}</p>
                )}
            </details>
        </div>
    )
}


Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
};
