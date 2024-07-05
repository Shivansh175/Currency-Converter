import "./index.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo"
import { useState, useEffect } from "react";

function App() {

  const [to,setTo] = useState("inr");
  const [from,setFrom] = useState("usd");
  const [amount,setAmount] = useState(1);
  const [convertedAmount,setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const optionArray = Object.keys(currencyInfo);


  useEffect(()=>{
    setConvertedAmount(amount*currencyInfo[to]);
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
      <div id="card" className="w-10/12 h-5/6 flex flex-col justify-center items-center shadow-xl bg-white">
        <h2 className="justify-self-start text-3xl font-sans mb-16">
          Currency Converter
        </h2>
        <div className="w-full flex justify-center mt-4">
        <InputBox 
          label="From"
          selectCurrency = {from}
          amount={amount.toFixed(2)}
          onAmountChange={setAmount}
          currencyOptions={optionArray}
          onCurrencyChange={(currency)=>{setFrom(currency);}}
        />
        <button onClick={swap}
          className="bg-pink-900 text-white px-8 py-3 flex justify-center items-center text-xl rounded-full mx-4 h-fit self-center"
        >
          Swap
        </button>
        <InputBox 
          label="To"
          selectCurrency = {to}
          amount={convertedAmount.toFixed(2)}
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