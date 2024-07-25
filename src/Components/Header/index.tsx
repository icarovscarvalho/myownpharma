import styles from "./styles.module.css"
import { RiHealthBookFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

interface MenuBarProps{
    handleToggleMenu:()=>void
    openModal:()=>void
}

export function Header({handleToggleMenu, openModal}:MenuBarProps) {

    

    return(
        <>
            <header className={styles.container}>
                <RiHealthBookFill className={styles.icon} onClick={openModal} />
                <h1>My Own Phramacy</h1>
                <IoMdMenu className={styles.icon} onClick={handleToggleMenu} />
            </header>
        </>
    )
}