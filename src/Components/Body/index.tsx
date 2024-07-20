import { Footer } from "../Footer"
import { Header } from "../Header"
import { Main } from "../Main"
import styles from "./styles.module.css"
import { pharmacos } from "../@Types/Types"
import { MenuBar } from "../MenuBar"

export function Body() {
    // console.log(Object.keys(pharmacos))
    return(
        <>
            <div className={styles.body}>
                <Header />
                <MenuBar />
                <Main
                h1={pharmacos.ibuprofeno.name}
                p={pharmacos.ibuprofeno.bula}
                imgLink={pharmacos.ibuprofeno.img}
                estoque={pharmacos.ibuprofeno.estoque}
                qtd={pharmacos.ibuprofeno.qtd}
                />
                <Footer />
            </div>
        </>
    )
}