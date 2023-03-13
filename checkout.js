const totalPrice = document.getElementById('totalPrice');
var price = 0;

function addListeners() {
    const quantityElements = document.getElementsByClassName('quantity');
    console.log(quantityElements);
    Array.prototype.forEach.call(quantityElements, (elem) => {
        const increase = elem.children[0];
        const decrease = elem.children[1];
        const amount = elem.parentNode.children[3];
        const priceString = elem.parentNode.children[2].innerText;
        const price = parseInt(priceString.slice(1, priceString.length));
        increase.addEventListener('click', () => {
            var amnt = parseInt(amount.innerText);
            amnt++;
            amount.innerText = amnt;
            changePrice(price);
        });
        decrease.addEventListener('click', () => {
            var amnt = parseInt(amount.innerText);
            if (amnt > 0) {
                amnt--;
                amount.innerText = amnt;
                changePrice(-1 * price);
            }
        });
    })
}

function changePrice(amount) {
    price += amount;
    totalPrice.innerText = "$" + price;
}

window.onload = addListeners;