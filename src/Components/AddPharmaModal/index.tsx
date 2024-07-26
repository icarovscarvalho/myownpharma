import {PharmacoType} from "../Body"
import styles from "./styles.module.css"

interface ModalProps {
  closeModal: () => void
  pharmaList: PharmacoType[]
  setData: (data:PharmacoType[]) => void
}

export function AddPharmaModal({closeModal, pharmaList, setData}: ModalProps) {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  async function handleFormSubmit(e) {
    console.log(typeof e);
    e.preventDefault();
    const link = e.target.linkImage.value;
    const name = e.target.pharmaName.value;
    const description = e.target.usage.value;
    const qtd = e.target.stock.value;

    const newPharma = {name, description, link, qtd};
    const newPharmacosList = [...pharmaList, newPharma];

    console.log(JSON.stringify(newPharmacosList)); // Para depuração

    setData(newPharmacosList)

  }

  return (
    <>
      <div className={styles.outSide} onClick={closeModal}>
        <div className={styles.container} onClick={e => e.stopPropagation()}>
          <div className={styles.title}>
            <h1>Novo Medicamento</h1>
            <button onClick={closeModal}>X</button>
          </div>
          <form onSubmit={handleFormSubmit}>
            <span>Link da Imagem</span>
            <input name="linkImage" type="text" placeholder="Escreva aqui..." minLength={3} required/>
            <span>Nome do Medicamento</span>
            <input name="pharmaName" type="text" placeholder="Escreva aqui..." minLength={3} required/>
            <span>Descrição de uso/modo de usar</span>
            <textarea name="usage" placeholder="Escreva aqui..." minLength={3} required/>
            <span>Qtd.</span>
            <input className={styles.qtd} name="stock" type="number"/>
            <div className={styles.buttons}>
              <button type="submit">Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}