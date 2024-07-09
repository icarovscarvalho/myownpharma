import styles from "./styles.module.css"
import { RiHealthBookFill } from "react-icons/ri";

export function Header() {

    return(
        <>
            <header className={styles.container}>
                <RiHealthBookFill className={styles.icon} />
                <h1>My Own Phramacy</h1>
                <div />
            </header>
        </>
    )
}