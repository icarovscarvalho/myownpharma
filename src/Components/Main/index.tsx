import { useState } from "react"
import styles from "./styles.module.css"

interface pharmaMethod{
    h1:string,
    p:string,
    imgLink:string,
    qtd:number
}

export function Main({h1, p, imgLink, qtd}:pharmaMethod){

    const [actualQtd, setActualQtd] = useState<number>(qtd);

    function plusQtd() {
        setActualQtd(prevState=>prevState+1)
    }

    function minusQtd() {
        setActualQtd(prevState=>prevState>0? prevState-1 : 0)
    }

    return(
        <>
            <main className={styles.container}>
                <div className={styles.board}>
                    <div className={styles.cover} style={{backgroundImage: `url(${imgLink})`}} />
                    <div className={styles.content}>
                        <h1>{h1}</h1>
                        <div>
                            <h2>Para que serve:</h2>
                            <p>{p}</p>
                        </div>
                        <div className={styles.stock}>
                            <h2>Estoque:</h2>
                            <div>{qtd > 0 ? "SIM" : "NÃO"}</div>
                        </div>
                        <div className={styles.amount}>
                            <h2>Quant. :</h2>
                            <div>{actualQtd}</div>
                            <div>
                                <button onClick={plusQtd}>+</button>
                                <button onClick={minusQtd} className={actualQtd == 0 ? styles.blocked : ''}>-</button>
                            </div>
                            {qtd != actualQtd && <button className={styles.confirmBtn}>confirmar</button>}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}