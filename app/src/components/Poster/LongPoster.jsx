import styles from './LongPoster.module.css'
import TopMenu from '../Menu/TopMenu';

function LongPoster({poster, altPoster}) {
    return (
        <div className={styles.poster_area}>
            <div className={styles.poster_img}>
                <img src={poster} alt={altPoster} className={styles.long_poster} />
            </div>
        </div>
    )
}

export default LongPoster;