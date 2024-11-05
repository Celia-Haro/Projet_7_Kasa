import styles from './banner.module.scss'
import PropTypes from 'prop-types';

export default function Banner({ picture, title, shadow }) {
    return (
        <div className={styles.banner}>
            <img className={shadow ? styles['banner-shadow'] : ''} src={picture} alt="je suis une image" />
            {title && <h1>{title}</h1>}
        </div>
    )
}

Banner.propTypes = {
    picture: PropTypes.string.isRequired,
    title: PropTypes.node,
    shadow: PropTypes.bool
};
