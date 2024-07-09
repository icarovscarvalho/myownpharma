import styles from "./styles.module.css"

interface pharmaMethod{
    h1:string,
    p:string,
    imgLink:string,
    estoque:string,
    qtd:number
}

export function Main({h1, p, imgLink, estoque, qtd}:pharmaMethod){
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
                            <div>{estoque}</div>
                        </div>
                        <div className={styles.amount}>
                            <h2>Quant. :</h2>
                            <div>{qtd}</div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}