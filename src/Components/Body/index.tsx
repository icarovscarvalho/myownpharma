import { Footer } from "../Footer"
import { Header } from "../Header"
import { Main } from "../Main"
import styles from "./styles.module.css"
import { MenuBar } from "../MenuBar"
import { useEffect, useState } from "react"
import pharmacosJSON from "../../db/pharmacos.json"

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

    // console.log(pharmacosJSON.pharmacosList)

    useEffect(()=>{
        setPharmaList(pharmacosJSON.pharmacosList)
    }, [])

    return(
        <>
            <div className={styles.body}>
                <Header handleToggleMenu={handleToggleMenu} />

                <MenuBar handleToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />

                {pharmaList.map(pharmaco=><Main
                    key={pharmaco.name}
                    h1={pharmaco.name}
                    p={pharmaco.description}
                    imgLink={pharmaco.link}
                    qtd={pharmaco.qtd}
                    />
                )}

                <Footer />
            </div>
        </>
    )
}