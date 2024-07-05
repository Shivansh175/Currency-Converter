
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency,
    currencyOptions = [],
    amountDisable = false,

}){
    return(
        <div className="w-1/3 overflow-hidden p-4 m-6 flex flex-col">
            <label htmlFor="dropdown"
            className="font-bold text-gray-500 font-sans px-2"
            >
                {label}
            </label>
            <select id="dropdown"
            className="mb-10 w-full  drop-shadow-sm shadow-black border-none outline-none px-2 py-1 text-xl"
                value = {selectCurrency}
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                {currencyOptions.map((curr)=>{
                    return(
                        <option value={curr} key={curr}
                        className="p-3 border-none outline-none"
                        >
                            {curr}
                        </option>
                    )
                })}
            </select>
            
            <input type="number" 
                value={amount} 
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} 
                disabled = {amountDisable}
                className="text-8xl font-sans font-thin border-none outline-none bg-transparent text-center"
                >
            </input>
        </div>
    )

}

export default InputBox;