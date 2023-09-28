import SimpleButton from "../Buttons/SimpleButton";
import { useState, ChangeEvent } from "react";
import styles from "./RecentFiles.module.css";

function AddRecentFiles() {
    const ipcRenderer = window.ipcRenderer;

    const [inputValue, setInputValue] = useState("");

    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const ButtonOnClick = () => {
        ipcRenderer.send("banco:addRecentFiles", inputValue);
    };

    return (
        <div className={styles.centralizador}>
            <div className={styles.contain_add_recent_files}>
                <h2>Adicione um arquivo no banco</h2>
                <input
                    type="text"
                    placeholder="Nome do arquivo"
                    onChange={changeInputValue}
                />
                <SimpleButton onClick={ButtonOnClick} text="Aperta aqui" />
            </div>
        </div>
    );
}

export default AddRecentFiles;
