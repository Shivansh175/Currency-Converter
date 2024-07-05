import { useEffect ,useState } from "react";


function useCurrencyInfo(curr){

    const [data,setData] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`).
        then((res)=>{return res.json()}).
        then((res)=>{setData(res[curr])});
    },[curr]);

    return data;

}

export default useCurrencyInfo;