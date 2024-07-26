import { useState } from "react"
import styles from "./styles.module.css"
import {PharmacoType} from "../Body";

interface pharmaMethod{
    h1:string,
    p:string,
    imgLink:string,
    qtd:number,
    updatePharma:(data:PharmacoType)=>void
}

export function Main({h1, p, imgLink, qtd, updatePharma}:pharmaMethod){

    const [actualQtd, setActualQtd] = useState<number>(qtd);

    function plusQtd() {
        setActualQtd(prevState=>++prevState)
    }

    function minusQtd() {
        setActualQtd(prevState=>prevState>0? --prevState : 0)
    }

    function update(){
        updatePharma({name:h1, description:p, link:imgLink, qtd:actualQtd})

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
                            {qtd != actualQtd && <button className={styles.confirmBtn} onClick={update}>confirmar</button>}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}