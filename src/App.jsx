import './App.css'
import dividerDesktop from './assets/pattern-divider-desktop.svg'
import dividerMobile from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'
import { useLayoutEffect, useState } from 'react'
import axios from 'axios'

function App() {  
  const [ number, setNumber ] = useState(1);
  const [ quote, setNewQuote ] = useState([])

  const getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      
      .then(res => {
        
        const { advice } = res.data.slip
        const { id } = res.data.slip
        setNewQuote(advice)
        setNumber(id)

      })
  }
  useLayoutEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className="App">
      <div className="card">
      {/* {quote.map(({advice}) => {
        return(
          <>
            {advice}
          </>
        )
      })} */}
        <p className='advice-header'>ADVICE #{number} </p>
        <p className='quotes'>{`"${quote}"`} </p>
        <img src={dividerDesktop} alt="img" className='divide divide-d' />
        <img src={dividerMobile} alt="img" className='divide divide-m' />
        <div className="dice-cont" onClick={getAdvice}>
          <img src={dice} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
