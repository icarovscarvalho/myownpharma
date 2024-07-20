import styles from "./styles.module.css"
import { RiHealthBookFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

export function Header() {

    return(
        <>
            <header className={styles.container}>
                <RiHealthBookFill className={styles.icon} />
                <h1>My Own Phramacy</h1>
                <IoMdMenu className={styles.icon} />
            </header>
        </>
    )
}