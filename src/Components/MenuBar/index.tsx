import styles from "./styles.module.css"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { pharmacosListMenu } from "../@Types/Types"
import { useState } from "react";

export function MenuBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    function handleMenu() {
        setIsMenuOpen(prevState=>!prevState)
    }

    // function medicines() {
    //     let medItem;
    //     for(let i=0; i<pharmacosListMenu.length; i++) {
    //         medItem = pharmacosListMenu[i]    
    //     }
    //     return medItem
    // }

    return(
        <>
            <section className={`${isMenuOpen? styles.containerOn : styles.containerOff}`} onClick={handleMenu}>
                <button className={styles.recoilBtn}>
                    <MdKeyboardDoubleArrowLeft />
                </button>
                <div className={styles.menuMedicineList}>
                    {/* {medicines()} */}
                </div>
            </section>
        </>
    )
}