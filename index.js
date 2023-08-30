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
    if (responseFrom.value != "USD")
    {
        convertAmount(numberInput, responseFrom.value,responseText.value)
    } 
    else 
    {
        convertAmounttoUSD(numberInput,responseText.value);
    }
}

function convertAmounttoUSD(numberInput,value){
    let convertTo = jsonObject.conversion_rates[value];
    document.getElementById('user_response').innerHTML = numberInput + " USD is worth " + (numberInput*convertTo) + " " + value;
}

function convertAmount(numberInput,valueFrom,valueTo) {
    let convertTo = jsonObject.conversion_rates[valueFrom];
    let convertToToo = jsonObject.conversion_rates[valueFrom];
        document.getElementById('user_response').innerHTML = numberInput + " "+ valueFrom + " is worth " + (numberInput/convertTo) + " " + valueTo;

    console.log(convertTo);
}



function setTimeLastUpdate(){
    document.getElementById('last_update').innerHTML = time_last_update_utc;
}
setTimeLastUpdate();