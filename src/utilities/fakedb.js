// use local storage to manege cart data
const addToDb = id => {
    
    let shoppingCart;

  // get the shopping cart
  const storeCart = localStorage.getItem('shopping-cart');
  if(storeCart){
    shoppingCart = JSON.parse(storeCart);
  } 
  else{
    shoppingCart={}
  }
    
    

// add quantity 
    const quantity = shoppingCart[id];

    if(quantity){
        
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else{
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));


}

export {addToDb}