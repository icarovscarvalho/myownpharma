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
    const [selectedPharma, setSelectedPharma] = useState<number>(0)

    function handleToggleMenu() {
        setIsMenuOpen(prevState=>!prevState)
    }

    function selectPharma(index:number) {
        setSelectedPharma(index)
    }

    // console.log(pharmacosJSON.pharmacosList)

    useEffect(()=>{
        setPharmaList(pharmacosJSON.pharmacosList)
    }, [])

    return(
        <>
            <div className={styles.body}>
                <Header handleToggleMenu={handleToggleMenu} />

                <MenuBar handleToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} selectPharma={selectPharma} />

                {pharmaList[selectedPharma]?.name &&<Main
                    key={pharmaList[selectedPharma].name}
                    h1={pharmaList[selectedPharma].name}
                    p={pharmaList[selectedPharma].description}
                    imgLink={pharmaList[selectedPharma].link}
                    qtd={pharmaList[selectedPharma].qtd}
                />}

                <Footer />
            </div>
        </>
    )
}