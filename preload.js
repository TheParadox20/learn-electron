const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('versions',{
    node: ()=>process.versions.node,
    chrome: ()=>process.versions.chrome,
    electron: ()=>process.versions.electron,
    bucket: {name:"sam", age:"22"},
    ping:()=> ipcRenderer.invoke('ping')
})