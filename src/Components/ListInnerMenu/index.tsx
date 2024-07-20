import styles from "./styles.module.css"
import pharmacosJSON from "../../db/pharmacos.json"


export function ListInnerMenu() {
    return(
        <>
            <ul className={styles.container}>
                {pharmacosJSON.pharmacosList.map(pharmaco=>
                    <li key={pharmaco.name}> {pharmaco.name} </li>)}
            </ul>
        </>
    )
}