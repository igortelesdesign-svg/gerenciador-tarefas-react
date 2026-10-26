import {useState} from "react"

import './Payment.css'

function Payment() {

  const [numero, setNumero] = useState("")
  const [nome, setNome] = useState("")
  const [validade, setValidade] = useState("")
  const [cvv, setCvv] = useState("")

  const nomeFormated = nome.toUpperCase()
  const validadeFormated = (validade.match(/.{1,2}/g) || []).join("/")
  const numeroFormated = (numero.match(/.{1,4}/g) || []).join(" ")

  return (
    <>
    <div className="cartao">
      <p className="num">{numeroFormated}</p>
      
      <p>{nomeFormated}</p>

      <p>{validadeFormated}</p>

      <p>{cvv}</p>
    </div>

    <div className="info">
      <h1>Cartão de crédito</h1>
      <form className="dataFormCard">
        <div className="campo">
          <label>Numero do Cartão*</label>
          <input 
            value = {numeroFormated} 
            onChange = {event => setNumero(event.target.value.replace(/[^0-9]/g,""))} 
            maxLength = {16}
            required
          />
        </div>
        <div className="campo">
          <label>Nome do Titular*</label>
          <input 
            value = {nomeFormated} 
            onChange = {event => setNome(event.target.value.replace(/[0-9]/g,""))}
            required 
          />
        </div>
        <div className="campo">
          <label>Validade*</label>
          <input 
            value={validadeFormated} 
            onChange={event => setValidade(event.target.value.replace(/[^0-9]/g,""))} 
            maxLength={5}
            required
          />
        </div>
        <div className="campo">
          <label>CVV*</label>
          <input 
            value={cvv} 
            onChange={event => setCvv(event.target.value.replace(/[^0-9]/g,""))} 
            required 
            maxLength={3} 
          />
        </div>
      </form>
    </div>
      
    </>
  )
}

export default Payment