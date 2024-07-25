import { Footer } from "../Footer"
import { Header } from "../Header"
import { Main } from "../Main"
import styles from "./styles.module.css"
import { MenuBar } from "../MenuBar"
import { useEffect, useState } from "react"
import { AddPharmaModal } from "../AddPharmaModal"

export type PharmacoType = {
    link:string,
    name:string,
    description:string,
    qtd:number
}

export function Body() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [pharmaList, setPharmaList] = useState<PharmacoType[]>([]);
    const [selectedPharma, setSelectedPharma] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState(false)

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

    function openModal(){
        setIsModalOpen(true)
    }

    function closeModal(){
        setIsModalOpen(false)
    }

    useEffect(()=>{
        getData()
    }, [])

    return(
        <>
            {isModalOpen && <AddPharmaModal closeModal={closeModal} pharmaList={pharmaList} getData={getData} />}

            <div className={styles.body}>
                <Header handleToggleMenu={handleToggleMenu} openModal={openModal} />

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