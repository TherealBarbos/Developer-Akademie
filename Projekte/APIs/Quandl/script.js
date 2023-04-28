const API_KEY = 'fdTYtjfNoLxsEgogTJFZ';


async function loadCourse() {
    let url = `https://data.nasdaq.com/api/v3/datasets/BITFINEX/LUNAF0USTF0?start_date=2022-04-04&end_date=2022-04-04&api_key=${API_KEY}`
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log('API' , responseAsJson)
    
    showBitcoinToday(responseAsJson);

}

function showBitcoinToday(responseAsJson) {
    let bitcoinToday = responseAsJson['dataset']['data'][0][3];

    document.getElementById('bitcoinInUSDToday').innerHTML = bitcoinToday;

}