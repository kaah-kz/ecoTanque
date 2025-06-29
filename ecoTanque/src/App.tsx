import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

import logo from './assets/logo.png'

// Cálculo: Álcool / Gasolina
// Se o resultado for menor que 0.7 compensa usar álcool

interface InfoProps {
  title: string;
  gasolina: number | string;
  alcool: number | string;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState('')
  const [alcoolInput, setAlcoolInput] = useState('')
  const [info, setInfo] = useState<InfoProps>()

  function calcular(event : FormEvent) {
    event.preventDefault();

    const gasolina = parseFloat(gasolinaInput)
    const alcool = parseFloat(alcoolInput)

    const calculo = alcool / gasolina
    console.log(calculo)

    if (calculo <= 0.7) {
      setInfo({
        title: 'Compensa usar Álcool!',
        gasolina: formatarMoeda(parseFloat(gasolinaInput)),
        alcool: formatarMoeda(parseFloat(alcoolInput))
      })
    } else{
      setInfo({
        title: 'Compensa usar Gasolina!',
        gasolina: formatarMoeda(parseFloat(gasolinaInput)),
        alcool: formatarMoeda(parseFloat(alcoolInput))
      })
    }
  }

  function formatarMoeda(valor: number){
    let valorFormatado = valor.toLocaleString('pt-br',
    {
      style: 'currency',
      currency: 'BRL'
    })
    return valorFormatado;
  }

  return (
    <div>
      <main className='container'>
        <img
          className='logo'
          src={logo}
          alt='Logo do ecoTanque - Gasolina ou Álcool?'
        />

        <h1>Qual melhor opção?</h1>

        <form className='form' onSubmit={calcular}>
          <label>Álcool (preço por litro):</label>
          <input
            className='input'
            type='number'
            placeholder='Ex: 4,90'
            min='1'
            step='0.01'
            required
            value={alcoolInput}
            onChange={ (e) => setAlcoolInput(e.target.value)}/>

          <label>Gasolina (preço por litro):</label>
          <input
            className='input'
            type='number'
            placeholder='Ex: 4,90'
            min='1'
            step='0.01'
            required
            value={gasolinaInput}
            onChange={ (e) => setGasolinaInput(e.target.value)}/>

          <input className='button' type='submit' value='Calcular'/>
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>
              {info.title}
            </h2>
          
            <span>Álcool {info.alcool}</span>
            <span>Gasolina {info.gasolina}</span>
          </section> 
        )}

      </main>
    </div>
  )
}

export default App
