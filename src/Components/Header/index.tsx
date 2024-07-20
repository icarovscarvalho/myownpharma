import styles from "./styles.module.css"
import { RiHealthBookFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { AddPharmaModal } from "../AddPharmaModal";
import { useState } from "react";

interface MenuBarProps{
    handleToggleMenu:()=>void
}

export function Header({handleToggleMenu}:MenuBarProps) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal(){
        setIsModalOpen(true)
    }

    function closeModal(){
        setIsModalOpen(false)
    }

    return(
        <>
            <header className={styles.container}>
                <RiHealthBookFill className={styles.icon} onClick={openModal} />
                <h1>My Own Phramacy</h1>
                <IoMdMenu className={styles.icon} onClick={handleToggleMenu} />
            </header>
            {isModalOpen && <AddPharmaModal closeModal={closeModal} />}
        </>
    )
}