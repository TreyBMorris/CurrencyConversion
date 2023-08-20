var obj;
fetch('sample.json')
    .then(jsonData => jsonData.json())
    .then(data => setData(data))

let setData = (data) => {
    console.info(data.result)
    console.log(data.time_last_update_utc)
    console.log(data.conversion_rates.USD)
    USD_To_Eur(data.conversion_rates.USD,data.conversion_rates.EUR)
    EUR_To_USD(data.conversion_rates.EUR)

    
    document.getElementById("last_update").innerHTML = data.time_last_update_utc;
}

let USD_To_Eur = (USD,EUR) => {
    console.log("USD:" + USD);
    document.getElementById("usd_to_euro").innerHTML = USD + " USD is worth " + EUR +" Euros";
    

}
let EUR_To_USD = (EUR) => {
    console.log("EUR: "+ EUR);
    document.getElementById("euro_to_usd").innerHTML ="1 EUR is worth " + (1/EUR) +" USD";

}


