let jsonURL = 'main.json';
let xhReq = new XMLHttpRequest();
xhReq.open("GET", jsonURL, false);
xhReq.send(null);
let jsonObject = JSON.parse(xhReq.responseText);


let time_last_update_utc = jsonObject.time_last_update_utc;
let responseText = document.querySelector('#currency_select');



function onClick(){
    let numberInput = document.getElementById('userNum').value;
    convertAmount(numberInput,responseText.value);
}

function convertAmount(numberInput,value){
    let convertTo = jsonObject.conversion_rates[value];
    document.getElementById('user_response').innerHTML = numberInput + " USD is worth " + (numberInput*convertTo) + " " + value;
}

function setTimeLastUpdate(){
    document.getElementById('last_update').innerHTML = time_last_update_utc;
}



setTimeLastUpdate();