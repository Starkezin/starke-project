import { useState } from "react"

function Home() {
    return (
        <div>
            <h1> Home </h1>
            <Contador />        
        </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(1);
    
    function incrementar(){
        setContador(contador + 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={incrementar}>Adicionar</button>
            <button onClick={() => setContador(contador - 1)}>Diminuir</button>
        </div>
    )
}

export default Home;