import { Footer } from "../Footer"
import { Header } from "../Header"
import { Main } from "../Main"
import styles from "./styles.module.css"
import { pharmacos } from "../@Types/Types"
import { MenuBar } from "../MenuBar"
import { useState } from "react"



type PharmacoType = {
    link:string,
    name:string,
    description:string,
    qtd:number
}

export function Body() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [pharmaList, setPharmaList] = useState<PharmacoType[]>([]);

    function handleToggleMenu() {
        setIsMenuOpen(prevState=>!prevState)
    }

    function readPharmacosList() {
        
    }

    return(
        <>
            <div className={styles.body}>
                <Header handleToggleMenu={handleToggleMenu} />

                <MenuBar handleToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />

                <Main
                h1={pharmacos.ibuprofeno.name}
                p={pharmacos.ibuprofeno.bula}
                imgLink={pharmacos.ibuprofeno.img}
                qtd={pharmacos.ibuprofeno.qtd}
                />

                <Footer />
            </div>
        </>
    )
}