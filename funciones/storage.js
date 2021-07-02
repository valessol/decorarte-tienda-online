//Almacenamiento de datos de todos los productos en el local storage
const getLocalStorage = (keyName) => localStorage.getItem(keyName);
const setLocalStorage = (keyName, value) =>
  localStorage.setItem(keyName, value);




//Almacenamiento de datos de los productos en carrito en el session storage
const getSessionStorage = (keyName) => sessionStorage.getItem(keyName);
const setSessionStorage = (keyName, value) =>
  sessionStorage.setItem(keyName, value);
