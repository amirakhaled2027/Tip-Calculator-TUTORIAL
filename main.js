const billAmount = document.querySelector('#bill');
const tipPercent = document.querySelector('#tip');
const totalSpan = document.querySelector('#total');
const btn = document.querySelector('#calculate');

function calculateTotal() {
    const billValue = billAmount.value;
    const tipValue = tipPercent.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTotal);