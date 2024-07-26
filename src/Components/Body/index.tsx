import {Footer} from "../Footer"
import {Header} from "../Header"
import {Main} from "../Main"
import styles from "./styles.module.css"
import {MenuBar} from "../MenuBar"
import {useEffect, useState} from "react"
import {AddPharmaModal} from "../AddPharmaModal"

export type PharmacoType = {
  link: string,
  name: string,
  description: string,
  qtd: number
}

export function Body() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pharmaList, setPharmaList] = useState<PharmacoType[]>([]);
  const [selectedPharma, setSelectedPharma] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false)

  /**
   * 1 - Verifica e recupera os dados em Local Storage.
   * 2 - Tenta conectar ao servidor.
   * 3 - Recupera os dados do banco de dados (se conectado).
   * 4 - Atualiza os dados na aplicação e no Local Storage.
   * @returns void
   */
  async function getData() {
    const localData = window.localStorage.getItem('pharmacosList') || null
    if (localData) {
      const parsedData = JSON.parse(localData)
      setPharmaList(parsedData.pharmacosList)
    }
    try {
      const rawData = await fetch('http://localhost:3000')
      const data = await rawData?.json().catch(()=>null) || null;
      if (data) {
        setPharmaList(data.pharmacosList)
        window.localStorage.setItem('pharmacosList', JSON.stringify(data))
      }
    } catch (err) {
      console.error("O servidor parece estar offline")
      if (pharmaList.length === 0 && (!localData || localData.length === 0)) {
        openModal()
      }
    }
  }

  async function setData(data: PharmacoType[]) {
    const newData = {pharmacosList: data}
    try {
      const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });
      if (response.ok) {
        await getData()
        closeModal()
      }
    } catch (e) {
      console.error('O servidor parece estar offline')
    }
  }

  function handleToggleMenu() {
    setIsMenuOpen(prevState => !prevState)
  }

  function selectPharma(index: number) {
    setSelectedPharma(index)
  }

  function updatePharma(newData: PharmacoType, index: number = selectedPharma) {
    const tempList = [...pharmaList]
    tempList[index] = newData
    // setPharmaList(tempList)
    setData(tempList).then(getData)
  }

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  useEffect(() => {
    getData().then()
  }, [])

  return (
    <>
      {isModalOpen && <AddPharmaModal closeModal={closeModal} pharmaList={pharmaList} setData={setData}/>}

      <div className={styles.body}>
        <Header handleToggleMenu={handleToggleMenu} openModal={openModal}/>

        <MenuBar
          handleToggleMenu={handleToggleMenu}
          isMenuOpen={isMenuOpen}
          selectPharma={selectPharma}
          pharmaList={pharmaList}
        />

        {pharmaList[selectedPharma]?.name && <Main
            key={pharmaList[selectedPharma].name}
            h1={pharmaList[selectedPharma].name}
            p={pharmaList[selectedPharma].description}
            imgLink={pharmaList[selectedPharma].link}
            qtd={pharmaList[selectedPharma].qtd}
            updatePharma={updatePharma}
        />}

        <Footer/>
      </div>
    </>
  )
}