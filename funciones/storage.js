//LOCAL STORAGE
const getLocalStorage = (keyName) => localStorage.getItem(keyName);
const setLocalStorage = (keyName, value) =>
  localStorage.setItem(keyName, value);

//Array de productos en el local storage
const localStorageArray = () => {
  
  let productsString = getLocalStorage(productStorage);
  let productsJSON = aObj(productsString); 
  productos = productsJSON;
}




//SESSION STORAGE
const getSessionStorage = (keyName) => sessionStorage.getItem(keyName);
const setSessionStorage = (keyName, value) =>
  sessionStorage.setItem(keyName, value);

const sessionStorageArray = () => {
    
    let carritoString = aString (carrito);
    setSessionStorage (cartStorage, carritoString);
}

carrito = aObj(getSessionStorage(cartStorage));