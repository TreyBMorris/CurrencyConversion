let jsonURL = 'main.json';
let xhReq = new XMLHttpRequest();
xhReq.open("GET", jsonURL, false);
xhReq.send(null);
let jsonObject = JSON.parse(xhReq.responseText);

let EUR = jsonObject.conversion_rates.EUR.toFixed(2);
let USD = jsonObject.conversion_rates.USD;
let AUD = jsonObject.conversion_rates.AUD.toFixed(2);
let time_last_update_utc = jsonObject.time_last_update_utc;
let responseText = document.querySelector('#currency_select');



function onClick(){
    let numberInput = document.getElementById('userNum').value;
    document.getElementById('user_usd_euro').innerHTML = numberInput + " USD is worth " + (numberInput*EUR) + " EUR.";
    convertAmount(numberInput,responseText.value);

}

function convertAmount(numberInput,value){
    let convertTo = jsonObject.conversion_rates[value];
    console.log(numberInput,value,convertTo);
}

function setTimeLastUpdate(){
    document.getElementById('last_update').innerHTML = time_last_update_utc;
}

function usdToEuro(){
    document.getElementById('usd_to_euro').innerHTML = USD + " USD is worth " + EUR + " Euros.";
}

function eurToUsd(){
    document.getElementById('euro_to_usd').innerHTML = "1 EUR is worth " + (1/EUR + " USD.");
}


setTimeLastUpdate();
usdToEuro();
eurToUsd();

console.log(AUD);
