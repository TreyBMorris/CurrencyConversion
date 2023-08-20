fetch('sample.json')
    .then(jsonData => jsonData.json())
    .then(data => setData(data))

let setData = (data) => {
    USD_To_Eur(data.conversion_rates.USD,data.conversion_rates.EUR)
    EUR_To_USD(data.conversion_rates.EUR)
    //(data.conversion_rates.EUR)
    document.getElementById("last_update").innerHTML = data.time_last_update_utc;
}

let USD_To_Eur = (USD,EUR) => {
    document.getElementById("usd_to_euro").innerHTML = USD + " USD is worth " + EUR +" Euros";
}
let EUR_To_USD = (EUR) => { 
    document.getElementById("euro_to_usd").innerHTML ="1 EUR is worth " + (1/EUR) +" USD";
}
let user_USD_To_Eur = (userNum,EUR) => {
    console.log("userNum:" + userNum);
    document.getElementById("user_usd_euro").innerHTML = userNum + " USD is worth " + (userNum*EUR) +" Euros";
    
}