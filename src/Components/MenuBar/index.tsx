import styles from "./styles.module.css"
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ListInnerMenu } from "../ListInnerMenu";

interface MenuBarProps{
    handleToggleMenu:()=>void
    isMenuOpen:boolean
}

export function MenuBar({handleToggleMenu, isMenuOpen}:MenuBarProps) {

    return(
        <>
            <section className={`${styles.container} ${isMenuOpen? styles.containerOn : styles.containerOff}`}>

                <button className={styles.recoilBtn} onClick={handleToggleMenu}>
                    {isMenuOpen? <MdKeyboardDoubleArrowRight/> : <MdKeyboardDoubleArrowLeft/>}
                </button>

                <div className={styles.menuMedicineList}>
                    {isMenuOpen? <ListInnerMenu /> : ''}
                </div>
            </section>
        </>
    )
}