import styles from "./styles.module.css"
import pharmacosJSON from "../../db/pharmacos.json"

export function ListInnerMenu({selectPharma}:{selectPharma:(index:number)=>void}) {
    return(
        <>
            <ul className={styles.container}>
                {pharmacosJSON.pharmacosList.map((pharmaco, index)=>
                    <li key={pharmaco.name} onClick={()=>selectPharma(index)} > {pharmaco.name} </li>)}
            </ul>
        </>
    )
}