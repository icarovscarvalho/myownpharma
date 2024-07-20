import { pharmacosListMenu } from "../@Types/Types";
import styles from "./styles.module.css"


export function ListInnerMenu() {
    return(
        <>
            <ul className={styles.container}>
                {pharmacosListMenu.map(pharmaco=>
                    <li key={pharmaco}> {pharmaco} </li>)}
            </ul>
        </>
    )
}