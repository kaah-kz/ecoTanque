import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

import logo from './assets/logo.png'

// Cálculo: Álcool / Gasolina
// Se o resultado for menor que 0.7 compensa usar álcool

function App() {
  const [gasolinaInput, setGasolinaInput] = useState('')
  const [alcoolInput, setAlcoolInput] = useState('')

  function calcular(event : FormEvent) {
    event.preventDefault();

    const gasolina = parseFloat(gasolinaInput)
    const alcool = parseFloat(alcoolInput)

    const calculo = alcool / gasolina
    console.log(calculo)

    if (calculo <= 0.7) {
      alert('Compensa usar álcool')
    } else{
      alert('Compensa usar gasolina')
    }
  }

  return (
    <div>
      <main className='container'>
        <img
          className='logo'
          src={logo}
          alt='Logo do ecoTanque - Gasolina ou Álcool?'
        />

        <h1>Qual melhor opção?S</h1>

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

        <section className='result'>
          <h2 className='result-title'>Compensa usar álcool</h2>
          
          <span>Álcool R$ 4.13</span>
          <span>Gasolina R$ 6.23</span>
        </section>

      </main>
    </div>
  )
}

export default App
