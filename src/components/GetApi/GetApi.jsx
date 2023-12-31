import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './GetApi.module.css'

function GetApi({url}) {
    const [data, setData] = useState()

    const getUsers = async () => {
        try {
            const response = await axios.get(url)
            setData(JSON.stringify(response.data, null, 2))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getUsers()
    })
    
    return (
        <div className={styles.centralizador}>
            <h2>Fazendo requisição para {url}</h2>
            {data ? (
                <pre>
                    {data}
                </pre>
            ) : (
                <p>Sem resultados, não esqueça de inicializar o servidor!</p>
            )}
        </div>
    )
}

export default GetApi;