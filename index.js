var obj;
fetch('sample.json')
    .then(jsonData => jsonData.json())
    .then(data => setData(data))

let setData = (data) => {
    console.info(data.result)
    console.log(data.time_last_update_utc)
    console.log(data.conversion_rates.USD)
    USD_To_Eur(data.conversion_rates.USD,data.conversion_rates.EUR)
    EUR(data.conversion_rates.EUR)

    
    document.getElementById("last_update").innerHTML = data.time_last_update_utc;
}

let USD_To_Eur = (USD,EUR) => {
    console.log("USD:" + USD);
    document.getElementById("usd_to_euro").innerHTML = USD + " USD is worth " + EUR +" Euros";
    document.getElementById("two_usd_to_euro").innerHTML = (2*USD) + " USD is worth " + (2*EUR) +" Euros";

}

let EUR = (EUR) => {
    console.log("Euro: " + EUR);
}

