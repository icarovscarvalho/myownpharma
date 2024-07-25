import { PharmacoType } from "../Body"
import styles from "./styles.module.css"

interface ModalProps{
  closeModal:()=>void
  pharmaList:PharmacoType[]
  getData:()=>void
}

export function AddPharmaModal({closeModal, pharmaList, getData}:ModalProps) {

  async function handleFormSubmit(e:any) {
    e.preventDefault()
    const link = e.target.linkImage.value
    const name = e.target.pharmaName.value
    const description = e.target.usage.value
    const qtd = e.target.stock.value

    const newPharma = {link, name, description, qtd}
    const newPharmaList = {pharmaList:[...pharmaList, newPharma]}
    
    console.log(JSON.stringify(newPharmaList))

    const response = await fetch('http://localhost:3000', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newPharmaList)
    })

    if(response.ok) {
      getData()
    }
  }

  return(
    <>
      <div className={styles.outSide} onClick={closeModal}>
          <div className={styles.container} onClick={e=>e.stopPropagation()}>
            <div className={styles.title}>
              <h1>Novo Medicamento</h1>
              <button onClick={closeModal}>X</button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <span>Link da Imagem</span>
              <input name="linkImage" type="text" placeholder="Escreva aqui..." minLength={3} required />
              <span>Nome do Medicamento</span>
              <input name="pharmaName" type="text" placeholder="Escreva aqui..." minLength={3} required />
              <span>Descrição de uso/modo de usar</span>
              <textarea name="usage" placeholder="Escreva aqui..." minLength={3} required />
              <span>Qtd.</span>
              <input className={styles.qtd} name="stock" type="number" />
              <div className={styles.buttons}>
                <button type="submit">Adicionar</button>
              </div>
            </form>
          </div>
      </div>
    </>
  )
}