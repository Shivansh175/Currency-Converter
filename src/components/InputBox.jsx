
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
        <div className="w-4/5 sm:w-2/3 overflow-hidden p-4 lg:m-6 flex flex-col justify-center items-center m-2 shadow-lg lg:shadow-none">
        <div className="w-full flex flex-col">
            <label htmlFor="dropdown"
            className="font-bold text-gray-500 font-sans px-2"
            >
                {label}
            </label>
            <select id="dropdown"
            className="lg:mb-10 mb-3 w-full drop-shadow-sm shadow-black border-none outline-none px-2 md:py-1 sm:py-2 text-xl "
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
        </div>
            
        <input type="number" 
            value={amount} 
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} 
            disabled = {amountDisable}
            className=" md:text-7xl text-6xl font-sans font-thin border-none outline-none bg-transparent text-center overflow-auto"
            >
        </input>
        </div>
    )

}

export default InputBox;