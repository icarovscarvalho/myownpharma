import { Footer } from "../Footer"
import { Header } from "../Header"
import { Main } from "../Main"
import styles from "./styles.module.css"
import { MenuBar } from "../MenuBar"
import { useEffect, useState } from "react"

type PharmacoType = {
    link:string,
    name:string,
    description:string,
    qtd:number
}

export function Body() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [pharmaList, setPharmaList] = useState<PharmacoType[]>([]);
    const [selectedPharma, setSelectedPharma] = useState<number>(0);

    async function getData() {
        try{
            const rawData = await fetch('http://localhost:3000');
            const data = await rawData.json();
            setPharmaList(data.pharmacosList)
        } catch(err){
            console.log(err)
        }
    }

    function handleToggleMenu() {
        setIsMenuOpen(prevState=>!prevState)
    }

    function selectPharma(index:number) {
        setSelectedPharma(index)
    }

    useEffect(()=>{
        getData()
    }, [])

    return(
        <>
            <div className={styles.body}>
                <Header handleToggleMenu={handleToggleMenu} />

                <MenuBar
                handleToggleMenu={handleToggleMenu}
                isMenuOpen={isMenuOpen}
                selectPharma={selectPharma}
                pharmaList={pharmaList}
                />

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