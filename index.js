let jsonURL = 'main.json';

let xhReq = new XMLHttpRequest();
xhReq.open("GET", jsonURL, false);
xhReq.send(null);
let jsonObject = JSON.parse(xhReq.responseText);
let EUR = jsonObject.conversion_rates.EUR;
let USD = jsonObject.conversion_rates.USD;
let time_last_update_utc = jsonObject.time_last_update_utc;
console.log(jsonObject.result);
console.log(EUR);
console.log(USD);


function onClick(){
    var numberInput = document.getElementById('userNum').value;
    console.log(numberInput);
    document.getElementById('user_usd_euro').innerHTML = numberInput + " USD is worth " + (numberInput*EUR) + " EUR.";
}


document.getElementById('last_update').innerHTML = time_last_update_utc;
document.getElementById('usd_to_euro').innerHTML = USD + " USD is worth " + EUR + " Euros.";
document.getElementById('euro_to_usd').innerHTML = "1 EUR is worth " + (1/EUR) + " USD.";