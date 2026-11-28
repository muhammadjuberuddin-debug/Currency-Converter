const worthFirst = document.getElementById("worth-first");
const exhangeRate = document.getElementById("exhangeRate");
const worthSecond = document.getElementById("worth-second");
const currencyFirst = document.getElementById("currency-first");
const currencySecond = document.getElementById("currency-second");

updateRate()
function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/7a5641e7d34cfdb13a021d9e/latest/${currencyFirst.value}`).then((res) => res.json()).then((data) => {
        const rate = data.conversion_rates[currencySecond.value];
        exhangeRate.innerText = `1 ${currencyFirst.value} = ${rate + " " + currencySecond.value}`;
        worthSecond.value = (worthFirst.value * rate).toFixed(2);
    })
}

currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);
worthFirst.addEventListener("input", updateRate)