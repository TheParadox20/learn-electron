let information = document.getElementById('info')
let author = document.getElementById('author')

author.innerText = `And the author is ${versions.bucket.name}`
information.innerText = `This app is using:\nChrome v${versions.chrome()}\nNode v${versions.node()}\nElectron v${versions.electron()}`

let func = async ()=>{
    let response = await window.versions.ping()
    console.log(response)
}
func();