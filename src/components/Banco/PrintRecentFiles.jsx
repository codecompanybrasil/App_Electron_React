import styles from './RecentFiles.module.css'
import SimpleButton from '../Buttons/SimpleButton'
import { useState, useEffect } from 'react'

function PrintRecentFiles() {
    const banco = window.banco
    const [data, setData] = useState(null)

    const getRecentFilesData = () => {
        try {
            const res = banco.getRecentFiles()
            console.log(res)
            setData(JSON.stringify(res, null, 2))
        } catch (error) {
            console.error(error)
            setData("Erro")
        }
    }

    useEffect(() => {
        getRecentFilesData()
    }, [])


    return (
        <div className={styles.centralizador}>
            <div className={styles.contain} >
                <h2>Mostrando resultados do banco</h2>
                <pre>{data}</pre>
                <SimpleButton onClick={getRecentFilesData} text="Mostrar" />
            </div>
        </div>
    )
}

export default PrintRecentFiles