import styles from "./styles.module.css"

interface ListProps{
    selectPharma:(index:number)=>void
    pharmaList:{
        name:string,
        description:string,
        link:string,
        qtd:number
    }[]
}

export function ListInnerMenu({selectPharma, pharmaList}:ListProps) {
    return(
        <>
            <ul className={styles.container}>
                {pharmaList.map((pharmaco, index)=>
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