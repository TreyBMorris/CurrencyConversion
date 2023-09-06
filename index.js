let jsonURL = 'main.json';
let xhReq = new XMLHttpRequest();
xhReq.open("GET", jsonURL, false);
xhReq.send(null);
let jsonObject = JSON.parse(xhReq.responseText);

let time_last_update_utc = jsonObject.time_last_update_utc;
let responseText = document.querySelector('#currency_select');
let responseFrom = document.querySelector('#currency_from');

function onClick(){
    let numberInput = document.getElementById('userNum').value;
    if(responseFrom.value == responseText.value)
    {
        noConvert(numberInput, responseFrom.value,responseText.value);
    }
    else (responseFrom.value != "USD")
    {
        convertAmount(numberInput, responseFrom.value,responseText.value);
    } 
    
}

function convertAmount(numberInput,valueFrom,valueTo) {
    let convertTo = jsonObject.conversion_rates[valueFrom];
    let convertFrom = jsonObject.conversion_rates[valueTo];
    let newConvertTo = 1/convertTo;
    let newConvertFrom = 1/convertFrom;
    let finalConvert = newConvertTo/newConvertFrom;
    document.getElementById('user_response').innerHTML = numberInput + " "+ valueFrom + " is worth " + (numberInput*finalConvert) + " " + valueTo;
}

function noConvert(numberInput,valueFrom,valueTo){
    document.getElementById('user_response').innerHTML = numberInput + " "+ valueFrom + " is worth " + numberInput + " " + valueTo;

}

function setTimeLastUpdate(){
    document.getElementById('last_update').innerHTML = time_last_update_utc;
}

setTimeLastUpdate();