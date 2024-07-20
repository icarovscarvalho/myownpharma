import styles from "./styles.module.css"
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { pharmacosListMenu } from "../@Types/Types"
import { useState } from "react";
import { ListInnerMenu } from "../ListInnerMenu";

export function MenuBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenu() {
        setIsMenuOpen(prevState=>!prevState)
    }

    return(
        <>
            <section className={`${isMenuOpen? styles.containerOn : styles.containerOff}`}>
                <button className={styles.recoilBtn} onClick={handleMenu}>
                    {isMenuOpen? <MdKeyboardDoubleArrowRight/> : <MdKeyboardDoubleArrowLeft/>}
                </button>
                <div className={styles.menuMedicineList}>
                    {isMenuOpen? <ListInnerMenu /> : ''}
                </div>
            </section>
        </>
    )
}