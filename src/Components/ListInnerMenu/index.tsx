import { pharmacosListMenu } from "../@Types/Types";
import styles from "./styles.module.css"


export function ListInnerMenu() {
    return(
        <>
            <ul className={styles.container}>
                <li>{pharmacosListMenu[0]}</li>
                <li>{pharmacosListMenu[1]}</li>
                <li>{pharmacosListMenu[2]}</li>
            </ul>
        </>
    )
}