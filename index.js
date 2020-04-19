
function cart(){
    let counter = 0;
    let grandTotal = 0;

    function addToCart(){
        counter++;
        console.log('Added to Cart');
        document.querySelector('.carttotal').textContent = counter;

        let btn = document.querySelectorAll('.btn');
        if (this.id === "shoe1"){
            let product = document.getElementById('product');
            let text = document.getElementById('prod1').innerText;
            let item = document.createElement('p');
            // item.className = 'boxes';
            item.appendChild(document.createTextNode(text));
            product.appendChild(item);
            

            let price = document.getElementById('price');
            let myPrice = document.getElementById('price1').innerText.replace("Price:","");
            let priceItem = document.createElement('p');
            priceItem.className = 'boxes';

            priceItem.appendChild(document.createTextNode(myPrice));
            price.appendChild(priceItem);          
        

            let quantity = document.getElementById('quantity');
            let qty = 1;
            let newQuan = document.createElement('p');
            newQuan.appendChild(document.createTextNode(qty));
            quantity.appendChild(newQuan);


            let total = document.getElementById('total');
            let changedPrice = parseInt(myPrice.replace("$","")); //CONVERTING PRICE TO INT
            let finalPrice = changedPrice * 1;

            let newTotal = document.createElement('p');
            newTotal.appendChild(document.createTextNode(finalPrice));
            total.appendChild(newTotal);

            grandTotal+= finalPrice;
            document.getElementById('grandTotal').innerText = `$ ${grandTotal}`;
        }


        else if (this.id === "shoe2"){
            let product = document.getElementById('product');
            let text = document.getElementById('prod2').innerText;
            let item = document.createElement('p');
            // item.className = 'boxes';
            item.appendChild(document.createTextNode(text));
            product.appendChild(item);
            

            let price = document.getElementById('price');
            let myPrice = document.getElementById('price2').innerText.replace("Price:","");
            let priceItem = document.createElement('p');
            priceItem.className = 'boxes';
            priceItem.appendChild(document.createTextNode(myPrice));
            price.appendChild(priceItem);   

            let quantity = document.getElementById('quantity');
            let qty = 1;
            let newQuan = document.createElement('p');
            newQuan.appendChild(document.createTextNode(qty));
            quantity.appendChild(newQuan);


            let total = document.getElementById('total');
            let changedPrice = parseInt(myPrice.replace("$","")); //CONVERTING PRICE TO INT
            let finalPrice = changedPrice * 1;

            let newTotal = document.createElement('p');
            newTotal.appendChild(document.createTextNode(finalPrice));
            total.appendChild(newTotal);

            grandTotal+= finalPrice;
            document.getElementById('grandTotal').innerText = `$ ${grandTotal}`;
        }
        else if (this.id === "shoe3"){
            let product = document.getElementById('product');
            let text = document.getElementById('prod3').innerText;
            let item = document.createElement('p');
            // item.className = 'boxes';
            item.appendChild(document.createTextNode(text));
            product.appendChild(item);
            

            let price = document.getElementById('price');
            let myPrice = document.getElementById('price3').innerText.replace("Price:","");
            let priceItem = document.createElement('p');
            priceItem.className = 'boxes';
            priceItem.appendChild(document.createTextNode(myPrice));
            price.appendChild(priceItem);   


            let quantity = document.getElementById('quantity');
            let qty = 1;
            let newQuan = document.createElement('p');
            newQuan.appendChild(document.createTextNode(qty));
            quantity.appendChild(newQuan);


            let total = document.getElementById('total');
            let changedPrice = parseInt(myPrice.replace("$","")); //CONVERTING PRICE TO INT
            let finalPrice = changedPrice * 1;

            let newTotal = document.createElement('p');
            newTotal.appendChild(document.createTextNode(finalPrice));
            total.appendChild(newTotal);

            grandTotal+= finalPrice;
            document.getElementById('grandTotal').innerText = `$ ${grandTotal}`;
        } 
        else {
            let product = document.getElementById('product');
            let text = document.getElementById('prod4').innerText;
            let item = document.createElement('p');
            // item.className = 'boxes';
            item.appendChild(document.createTextNode(text));
            product.appendChild(item);
            

            let price = document.getElementById('price');
            let myPrice = document.getElementById('price4').innerText.replace("Price:","");
            let priceItem = document.createElement('p');
            priceItem.className = 'boxes';
            priceItem.appendChild(document.createTextNode(myPrice));
            price.appendChild(priceItem);   


            let quantity = document.getElementById('quantity');
            let qty = 1;
            let newQuan = document.createElement('p');
            newQuan.appendChild(document.createTextNode(qty));
            quantity.appendChild(newQuan);


            let total = document.getElementById('total');
            let changedPrice = parseInt(myPrice.replace("$","")); //CONVERTING PRICE TO INT
            let finalPrice = changedPrice * 1;

            let newTotal = document.createElement('p');
            newTotal.appendChild(document.createTextNode(finalPrice));
            total.appendChild(newTotal);

            grandTotal+= finalPrice;
            document.getElementById('grandTotal').innerText = `$ ${grandTotal}`;
            }

        }
    
    function removeFromCart(){
        if (counter === 0){
            alert('Cart is already empty');  
        }
        else {
        counter--;
        console.log('Removed from Cart');
        document.querySelector('.carttotal').textContent = counter;
        }
    }

    function bye(){
        alert("Thanks for your shopping!");
    }

    return{
        addToCart,
        removeFromCart,
        bye,
    }
}

var mycart = cart();


// mycart.addToCart();
// mycart.addToCart();
// mycart.addToCart();
// mycart.removeFromCart();
// mycart.cartTotal();


var addbtn = document.querySelectorAll('.addtocart');
for(let i=0; i<addbtn.length; i++)
addbtn[i].addEventListener('click',mycart.addToCart);

var rmvbtn = document.querySelectorAll('.removefromcart');
for(let i=0; i< rmvbtn.length; i++)
rmvbtn[i].addEventListener('click',mycart.removeFromCart);

document.querySelector('.purchase').addEventListener('click',mycart.bye);



