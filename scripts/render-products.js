// get the JSON data from http://localhost:5500/watches.json
const response = await fetch("/products.json");
// parse out the json into a variable - "watches"
const products = await response.json();

const grid = document.querySelector('.product_layout');