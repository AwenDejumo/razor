let listCart = [
    {
        "id": 1,
        "name": "Product 1",
        "image": "https://via.placeholder.com/150",
        "price": 10,
        "quantity": 1
    },
    {
        "id": 2,
        "name": "Product 2",
        "image": "https://via.placeholder.com/150",
        "price": 20,
        "quantity": 2
    },
    {
        "id": 3,
        "name": "Product 3",
        "image": "https://via.placeholder.com/150",
        "price": 30,
        "quantity": 3
    }
];

function addCartToHTML() {
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';
    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;

    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = `
                    <img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        });
    }

    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = totalPrice;
    totalPriceHTML.innerText = '$' + totalPrice;
}

addCartToHTML();