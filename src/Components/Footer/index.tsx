import styles from "./styles.module.css"
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return(
        <>
            <footer className={styles.footer}>
                <p>Site by Dev <strong>Ícaro Carvalho</strong></p>
                <div>
                    <a href=""><FaLinkedin className={styles.cursor} /></a>
                    <a href=""><FaGithub className={styles.cursor} /></a>
                    <a href=""><FaWhatsapp className={styles.cursor} /></a>
                </div>
            </footer>
        </>
    )
}