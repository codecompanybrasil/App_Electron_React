// import { contextBridge } from "electron";
// const { getRecentFiles: callRecentFiles } = require("./db")

// contextBridge.exposeInMainWorld("banco", {
//     getRecentFiles: () => callRecentFiles()
// })

const { contextBridge, ipcRenderer } = require("electron")
const { getRecentFiles: callRecentFiles } = require("./db")

const os = require("os")


contextBridge.exposeInMainWorld('electron', {
    homeDir: () => os.homedir(),
    arch: () => os.arch(),
    version: () => os.version()
})

contextBridge.exposeInMainWorld('banco', {
    getRecentFiles: () => callRecentFiles()
})

contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => ipcRenderer.send(channel, data),
    on: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
})