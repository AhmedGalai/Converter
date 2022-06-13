const curr1El = document.getElementById("currency-1");
const curr2El = document.getElementById("currency-2");
const amount1El = document.getElementById("amount-1");
const amount2El = document.getElementById("amount-2");
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate(){
	const currency1 = curr1El.value;
	const currency2 = curr2El.value;
	fetch(`https://v6.exchangerate-api.com/v6/25a6b4fb2e76b7fd0bd91380/latest/${currency1}`).then((res) => res.json()).then((data) => {
		//console.log(data.conversion_rates[currency2]);
		const rate = data.conversion_rates[currency2];
		rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`;
		amount2El.value = (amount1El.value * rate).toFixed(2);

	});
}



swap.addEventListener('click',()=>{
	const temp = curr1El.value;
	curr1El.value = curr2El.value;
	curr2El.value = temp;
	calculate();
});
curr1El.addEventListener("change",calculate);
curr2El.addEventListener("change",calculate);
amount1El.addEventListener("input", calculate);
amount2El.addEventListener("input", calculate);
document.addEventListener('DOMContentLoaded', calculate);