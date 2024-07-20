import { useState, useEffect } from 'react'
import Inputbox from './components/Inputbox'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
const [inputAmount, setInputAmount] = useState(0)
const [convertedAmount, setConvertedAmount] = useState(0)
const [from, setFrom] = useState('inr')
const [to, setTo] = useState('usd')

const currencyInfo = useCurrencyInfo(from)
console.log(currencyInfo)

let currencyOptions ;

  currencyInfo? currencyOptions = Object.keys(currencyInfo) : ""
  console.log(currencyOptions)
  



const convert = (e) =>{
  e.preventDefault()
  setConvertedAmount((inputAmount * currencyInfo[to]).toFixed(3)  )
}

const swap = () => {
  setConvertedAmount(inputAmount)
  setInputAmount(convertedAmount)
  setFrom(to)
  setTo(from)
}

  return (
    <div className='w-full h-screen bg-gray-700 flex justify-center items-center'>
      <form onSubmit={(e) => convert(e)} className='w-[500px] h-[350px] bg-transparent backdrop-blur-3xl shadow-2xl rounded-lg flex flex-col justify-evenly items-center'>
        <Inputbox 
        label = {"from"} 
        amount={inputAmount}
        setAmount = {setInputAmount}
        currencyOptions = {currencyOptions}
        selectChange={setFrom}
        selectValue={from}
        isDisable= {false}
        />

      <button type='button' className='w-[50px] h-[50px] bg-blue-600 text-white rounded-xl' onClick={swap} >SWAP</button>

        <Inputbox label = {"to"}
         amount={convertedAmount} 
         setAmount={setConvertedAmount}
         currencyOptions={currencyOptions}
         selectChange={setTo}
         selectValue={to}
         isDisable = {true}
          />
      <button className='w-[450px] h-[50px] bg-blue-600 text-white rounded-md ' type='submit'>Convert {from} to {to}</button>
      </form>
      
    </div>
  )
}

export default App
