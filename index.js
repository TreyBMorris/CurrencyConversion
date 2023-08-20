fetch('sample.json')
    .then(jsonData => jsonData.json())
    .then(data => setData(data))

    
console.log("TEST EURO: " + EUR)
let user_USD_To_Eur = (userInput) => {
    //console.log("userNum:" + userInput);
    console.log("EURO: " + EUR);
    //document.getElementById("user_usd_euro").innerHTML = userInput + " USD is worth " + (userInput*EUR) +" Euros";
}
let setData = (data) => {
    USD_To_Eur(data.conversion_rates.USD,data.conversion_rates.EUR)
    EUR_To_USD(data.conversion_rates.EUR)
    document.getElementById("last_update").innerHTML = data.time_last_update_utc;
}


let USD_To_Eur = (USD,EUR) => {
    document.getElementById("usd_to_euro").innerHTML = USD + " USD is worth " + EUR +" Euros";
}
let EUR_To_USD = (EUR) => { 
    document.getElementById("euro_to_usd").innerHTML ="1 EUR is worth " + (1/EUR) +" USD";
}
