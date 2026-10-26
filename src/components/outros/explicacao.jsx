import { useState } from "react"

const Explicacao = ()=>{
    // super Variavel
        // Pacote de Super poderes (Hook) do React
        // useState

        // Criando Estado (Super Variavel)

    // Inputs:
    const [nome, setNome] = useState()
    const [idade, setIdade] = useState()

   
    // nome é Vatriavel q armazena
    // mudarNOme É a função que muda o Estado da Variavel
    // useState("valor padrao") Setar valor padrao de uma variavel

    // Atividade:
    // Pegue os dados de nome e idade, monte um objeto 
    // e guarde dentro de uma lista de Cadastros
    const [cadastros, setCadastros] = useState([])

    function adicionar(e){
        e.preventDefault()
        
        const novoCadastro = {
            nome: nome,
            idade: idade
        }

        // setCadastros(novoCadastro) - nao funciona
        // cadastros.push(novoCadastro) - nao funciona
        setCadastros([...cadastros, novoCadastro])
        
    }
    
    // const lista1 = ["robson","guilherme"]
    // const lista2 = ["Jaoo","Good"]

        // Spread Operator (Rest Operator) - ...
    // console.log([...lista1, "teste", ...lista2])

    return(
        <>
            <h1>USE STATE</h1>
            <input 
                type="text" 
                id="nome" 
                onChange={e => setNome(e.target.value) }
                value={nome} 
            />

            <input 
                type="text" 
                id="idade"
                onChange={e => setIdade(e.target.value) }
                value={idade} 
            />
            <button onClick={ e => adicionar(e)}>Click</button>

            {/* 
                Renderizando em tempo real:
                <p>{nome}</p> 
            */}

            <div>
                {
                    cadastros.map((cadastro, index) => <p key={index}>{cadastro.nome} e {cadastro.idade}</p>)
                }
            </div>
        </>
    ) 
}

export default Explicacao