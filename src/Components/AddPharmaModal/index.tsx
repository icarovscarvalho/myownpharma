import styles from "./styles.module.css"

export function AddPharmaModal({closeModal}:{closeModal:()=>void}) {

  function handleFormSubmit(e:any) {
    e.preventDefault()
    const link = e.target.linkImage.value
    const name = e.target.pharmaName.value
    const description = e.target.usage.value
    const qtd = e.target.stock.value

    const newPharma = {link, name, description, qtd}
    
    console.log(newPharma)
  }

  return(
    <>
      <div className={styles.outSide} onClick={closeModal}>
          <div className={styles.container} onClick={e=>e.stopPropagation()}>
            <form onSubmit={handleFormSubmit}>
              <span>Link</span>
              <input name="linkImage" type="text" placeholder="Escreva aqui..." minLength={10} required />
              <span>Nome</span>
              <input name="pharmaName" type="text" placeholder="Escreva aqui..." />
              <span>Descrição</span>
              <textarea name="usage" placeholder="Escreva aqui..." />
              <span>Qtd.</span>
              <input name="stock" type="number" />
              <button type="submit">Adicionar</button>
            </form>
          </div>
      </div>
    </>
  )
}