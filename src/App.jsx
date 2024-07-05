import "./index.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo"
import { useState, useEffect } from "react";

function App() {

  const [to,setTo] = useState("inr");
  const [from,setFrom] = useState("usd");
  const [amount,setAmount] = useState(0);
  const [convertedAmount,setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const optionArray = Object.keys(currencyInfo);


  useEffect(()=>{
    var temp = amount*currencyInfo[to];
    temp = temp.toFixed(2);
    setConvertedAmount(temp);
  },[amount,to,currencyInfo]);
  
  const swap = ()=>{
    var temp = to;
    setTo(from);
    setFrom(temp);

    temp = convertedAmount;
    setConvertedAmount(amount);
    setAmount(temp);
  }
  

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div id="card" className="sm:w-10/12 lg:h-5/6 sm:h-screen w-full h-screen flex flex-col justify-center items-center shadow-xl bg-white">
        <h2 className="justify-self-start lg:text-3xl text-4xl font-sans lg:mb-16 mb-8">
          Currency Converter
        </h2>
        <div className="w-full flex flex-col items-center lg:flex-row justify-center lg:mt-4">
        <InputBox 
          label="From"
          selectCurrency = {from}
          amount={amount}
          onAmountChange={setAmount}
          currencyOptions={optionArray}
          onCurrencyChange={(currency)=>{setFrom(currency);}}
        />
        <button onClick={swap}
          className="bg-pink-900 text-white px-10 lg:px-4 py-3 flex justify-center items-center text-xl rounded-full mx-4 mt-3 mb-2 lg:my-auto lg:h-full sm:h-fit"
        >
          Swap
        </button>
        <InputBox 
          label="To"
          selectCurrency = {to}
          amount={convertedAmount}
          onAmountChange={setConvertedAmount}
          currencyOptions={optionArray}
          onCurrencyChange={(currency)=>{setTo(currency)}}
          amountDisable
        />
        </div>
        
      </div>

    </div>
  )
}

export default App