// import { useState } from 'react'
import './App.css'

import logo from './assets/logo.png'

function App() {

  return (
    <div>
      <main className='container'>
        <img
          className='logo'
          src={logo}
          alt='Logo do ecoTanque - Gasolina ou Álcool?'
        />

        <h1>Qual melhor opção?S</h1>

        <form className='form'>
          <label>Álcool (preço por litro):</label>
          <input
            className='input'
            type='number'
            placeholder='Ex: 4,90'
            min='1'
            step='0.01'
            required/>

          <label>Gasolina (preço por litro):</label>
          <input
            className='input'
            type='number'
            placeholder='Ex: 4,90'
            min='1'
            step='0.01'
            required/>

          <input className='button' type='submit' value='Calcular'/>
        </form>

      </main>
    </div>
  )
}

export default App
