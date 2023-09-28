import { IpcRenderer } from 'electron'

interface Banco {
    getRecentFiles: () => void
}

declare global {
    interface Window {
        ipcRenderer: IpcRenderer,
        banco: Banco
    }
}