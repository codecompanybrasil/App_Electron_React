import styles from './Header.module.css'
import logo from '../../images/kraken_logo.png'
import { BsFillPersonFill } from 'react-icons/bs'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo_div}>
                <img src={logo} className={styles.logo} alt="Kraken Logo" />
                <span className={styles.kraken} >Kraken</span>
            </div>
            <nav className={styles.nav}>
                <a href="#" className={styles.link} >Loja</a>
                <a href="#" className={styles.link} >Comunidade</a>
                <a href="#" className={styles.link} >Chat</a>
                <a href="#" className={styles.link} >Suporte</a>
            </nav>
            <div className={styles.account_area}>
                <BsFillPersonFill color="#D2D2D2" size="40" />
                <div className={styles.account_name}>
                    <span className={styles.account_name_strong}>PHGodoyCosta</span>
                    <span>R$30,00</span>
                </div>
            </div>
        </header>
    )
}

export default Header;