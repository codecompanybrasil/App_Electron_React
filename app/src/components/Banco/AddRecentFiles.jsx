import SimpleButton from "../Buttons/SimpleButton"
import { useState } from "react"
import styles from './AddRecentFiles.module.css'

function AddRecentFiles(props) {
    const ipcRenderer = window.ipcRenderer

    const [inputValue, setInputValue] = useState('')

    const changeInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const ButtonOnClick = (event) => {
        ipcRenderer.send('banco:addRecentFiles', inputValue)
    }
 
    return (
        <div className={styles.contain_add_recent_files}>
            <h2>Adicione um arquivo no banco</h2>
            <input type="text" placeholder="Nome do arquivo" onChange={changeInputValue} />
            <SimpleButton onClick={ButtonOnClick} text="Aperta aqui" />
        </div>
    )
}

export default AddRecentFiles