const addProduct = ()=>{
    
    // const product = document.getElementById('product').value;
    // const quantity = document.getElementById('quantity').value;

    const productHtml = document.getElementById('product');
    const quantityHtml = document.getElementById('quantity');
    const ShowProductHTML = document.getElementById("ShowProduct");

    const product = productHtml.value;
    const quantity = quantityHtml.value;

    const cart = getStorage();
    cart[product] = quantity;


    console.log(product,quantity);
    localStorage.setItem('cart',JSON.stringify(cart));
    
    let a = getStorage();
    console.log("a= ",a);
   
    ShowProductHTML.innerText = a[product]; 
    


}

const getStorage = () =>{
    const storedCart = localStorage.getItem('cart');
    let cart = {}
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}