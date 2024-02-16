// scripts.js

// Function to handle adding a product to the cart
function addToCart(productName) {
    alert(`Added ${productName} to cart!`);
  }
  
  // Function to handle searching products
  function searchProducts() {
    var query = document.getElementById("searchInput").value.toLowerCase();
    var products = document.querySelectorAll(".product");
    var results = [];
  
    products.forEach(function(product) {
        var productName = product.querySelector("h2").textContent.toLowerCase();
        if (productName.includes(query)) {
            results.push(product);
        }
    });
  
    var productContainer = document.querySelector(".product-list");
    productContainer.innerHTML = "";
    results.forEach(function(result) {
        productContainer.appendChild(result);
    });
  }
  
  // Event listener to handle click on "Add to Cart" buttons
  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentNode.querySelector('h2').innerText;
            addToCart(productName);
        });
    });
  });
  