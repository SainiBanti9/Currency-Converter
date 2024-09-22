import { useState } from 'react'
import './App.css'
import InputBox from './hooks/component/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
const [amount,setAmount]=useState('0')
const [from,setFrom]=useState('usd')
const [to,setTo]=useState('inr')
const [convertAmount,setConvertAmount]=useState(0)

let CurrencyInfo= useCurrencyInfo(from)

let contryOptions= Object.keys(CurrencyInfo);

const swap = ()=>{
  setFrom(to)
  setTo(from)
 // setConvertAmount(amount)
 // setAmount(convertAmount)
}

const convert =()=>{
  setConvertAmount(amount* CurrencyInfo[to])
}

return (
  <>
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
           backgroundImage: `url('https:images.pexels.com/photos/5466789/pexels-photo-5466789.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={contryOptions}
                          onCurrencyChange={(Currency)=>{
                            setFrom(Currency)
                          }}
                          selectCurrency={from}
                          onAmountChange={(amount)=>{
                            setAmount(amount)
                          }}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertAmount}
                          currencyOptions={contryOptions}
                          onCurrencyChange={(Currency)=>{
                            setTo(Currency)
                          }}
                          selectCurrency={to}
                          amountDisable

                          
                      />
                  </div>
                  <button type="submit" onClick={convert} className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to{to.toUpperCase()}
                     
                  </button>
              </form>
          </div>
      </div>
  </div>
  </>
)
};

export default App
