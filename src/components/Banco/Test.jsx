import { useState } from "react"
import SimpleButton from "../Buttons/SimpleButton"

function Test() {
    const [data, setData] = useState()

    const myPromise = new Promise((res, rej) => {
        res("Pikudo")
    })

    const intermediario = () => {
        return myPromise
    }

    const solve = async () => {
        console.log(await intermediario())
        const dados = {
            id: 'oi',
            opa: 'rapaiz'
        }

        setData(JSON.stringify(dados))
    }

    return (
        <div>
            <p>{data}</p>
            <SimpleButton text="Mostrar data" onClick={solve} />
        </div>
    )
}

export default Test;