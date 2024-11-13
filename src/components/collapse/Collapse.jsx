import styles from './collapse.module.scss'
import arrow from '/src/assets/icons/arrow.svg'
import PropTypes from 'prop-types';

export default function Collapse({ title, content }) {

    return (
        <div className={styles.collapse}>
            <details key={title} >
                <summary >
                    {title}
                    <img src={arrow} alt="" />
                </summary>
                <p >{content}</p>
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
