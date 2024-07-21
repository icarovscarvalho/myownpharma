import styles from "./styles.module.css"
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ListInnerMenu } from "../ListInnerMenu";


interface MenuBarProps{
    handleToggleMenu:()=>void
    isMenuOpen:boolean
    selectPharma:(index:number)=>void
}

export function MenuBar({handleToggleMenu, isMenuOpen, selectPharma}:MenuBarProps) {

    return(
        <>
            <section className={`${styles.container} ${isMenuOpen? styles.containerOn : styles.containerOff}`}>

                <button className={styles.recoilBtn} onClick={handleToggleMenu}>
                    {isMenuOpen? <MdKeyboardDoubleArrowRight/> : <MdKeyboardDoubleArrowLeft/>}
                </button>

                <div className={styles.menuMedicineList}>
                    {isMenuOpen? <ListInnerMenu selectPharma={selectPharma} /> : ''}
                </div>
            </section>
        </>
    )
}