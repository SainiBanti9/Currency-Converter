import { useEffect,useState} from "react";


 function useCurrencyInfo (currency){
   const [data,setData]=useState({})
   
        // useEffect(async()=>{
        // let response=  await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-08-19/v1/currencies/${currency}.json`);
        // let data= await response.json();
        //         await setdata(data[currency])
        // },[currency])
        // console.log(data);
        // return data
                const date = new Date();
                let year=date.getFullYear()
                let month=date.getMonth()
                let day=date.getDate()
                let formattedDay = day.toString().padStart(2,'0');
                const formattedMonth = month.toString().padStart(2, '0');
                let dates=`${year}-${formattedMonth}-${formattedDay}`
        useEffect(() => {
 fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${dates}/v1/currencies/${currency}.json`)
                .then((res) => res.json())
                .then((res) => setData(res[currency]))
                console.log(data);
            }, [currency])
            console.log(data);
            return data
        
}

export default useCurrencyInfo;
