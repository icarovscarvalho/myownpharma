import styles from "./styles.module.css"
import pharmacosJSON from "../../db/pharmacos.json"

interface ListProps{
    selectPharma:(index:number)=>void
}

export function ListInnerMenu({selectPharma}:ListProps) {
    return(
        <>
            <ul className={styles.container}>
                {pharmacosJSON.pharmacosList.map((pharmaco, index)=>
                    <li key={pharmaco.name}
                    onClick={()=>selectPharma(index)}
                    className={pharmaco.qtd == 0? styles.empty : ''}
                    >
                    {pharmaco.name}
                    </li>)}
            </ul>
        </>
    )
}