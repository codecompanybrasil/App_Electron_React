import styles from './TopMenu.module.css'
import { BsSearch } from 'react-icons/bs'

function TopMenu() {
    return (
        <div className={styles.menu}>
            <nav className={styles.top_menu}>
                <a href="#" className={styles.link}>Descubra</a>
                <a href="#" className={styles.link}>Novidades</a>
                <a href="#" className={styles.link}>Categorias</a>
                <a href="#" className={styles.link}>Descontos</a>
                <div className={styles.search_area}>
                    <BsSearch color="#D2D2D2" width="80px"/>
                    <input type="search" className={styles.search_input} />
                </div>
            </nav>
        </div>
    )
}

export default TopMenu;
