const btnAddToCart = document.getElementById("btn_addToCart");
const products=[]
//use the this in this
class Product {
  constructor(
    pName,
    pImg,
    pPrice,
    pManufacturer,
    pQuantity,
    pRating,
    pDescription
  ) {
    products.push(this);
    this.pName = pName;
    this.pPrice = pPrice;
    this.pManufacturer = pManufacturer;
    this.pQuantity = pQuantity;
    this.pRating = pRating;
    this.pDescription = pDescription;
    this.pImg = pImg;
  }

  getProDetails() {
    return {
      pName: this.pName,
      pPrice: this.pPrice,
      pManufacturer: this.pManufacturer,
      pQuantity: this.pQuantity,
      pRating: this.pRating,
      pDescription: this.pDescription,
      pImg: this.pImg,
    };
  }
}

const product1 = new Product(
  "Wireless Headphones",
  "https://img.freepik.com/premium-psd/black-wireless-headphones-isolated-transparent-background_698214-3323.jpg",
  49.99,
  "Sony",
  10,
  4.5,
  "High-quality wireless headphones with noise cancellation."
);

const product2 = new Product(
  "Bluetooth Speaker",
  "https://img.freepik.com/premium-photo/portable-bluetooth-speaker-isolated-white-background-3d-illustration_102307-3324.jpg",
  29.99,
  "JBL",
  25,
  4.8,
  "Portable Bluetooth speaker with deep bass and waterproof design."
);

const product3 = new Product(
  "Smart Watch",
  "https://img.freepik.com/premium-photo/smartwatch-front-view-isolated_878783-2769.jpg",
  99.99,
  "Apple",
  15,
  4.9,
  "Feature-rich smartwatch with heart rate tracking, sleep monitoring, and GPS."
);

const product4 = new Product(
  "Gaming Mouse",
  "https://img.freepik.com/premium-photo/gaming-mouse-white-background-3d-illustration_98402-16020.jpg",
  19.99,
  "Logitech",
  40,
  4.6,
  "High-precision wireless gaming mouse with RGB lighting and adjustable DPI."
);

const product5 = new Product(
  "Mechanical Keyboard",
  "https://img.freepik.com/premium-photo/black-mechanical-keyboard-white-background-3d-rendering_77190-1102.jpg",
  69.99,
  "Redragon",
  18,
  4.4,
  "Durable mechanical keyboard with blue switches and customizable LED backlight."
);

let card_container = document.getElementById("card_container");


card_container.innerHTML = products
  .map((product,index) => {
    return `<div class="card shadow" style="width: 18rem;" id="product-card-${index}">
        <img src="${product.pImg}" class="card-img-top" alt="${product.pName}">
        <div class="card-body">
          <h5 class="card-title">${product.pName}</h5>
          <p class="card-text">${product.pDescription}</p>
          <p class="fw-bold text-success">$${product.pPrice}</p>
          <div class="text-warning mb-2">
            ${"★".repeat(Math.floor(product.pRating))}${"☆".repeat(
      5 - Math.floor(product.pRating)
    )}
          </div>
          <button class="btn btn-primary w-100" onclick="handleCart(this, ${index})">
            Add to Cart
          </button>
        </div>
      </div>`;
  })
  .join("");

function handleCart(button, index) {
  const card = button.closest(".card");
  let inTheCart = localStorage.getItem(`inTheCart_${index}`) === "true";

  if (inTheCart) {
    button.innerText = "Add to Cart";
    button.style.backgroundColor = "blue";
    localStorage.setItem(`inTheCart_${index}`, "false");
    card.style.boxShadow = "0 0 12px rgba(255, 0, 0, 0.5)";
    alert(`${Product.products[index].pName} is removed from the cart!`);
  } else {
    button.innerText = "Remove from Cart";
    button.style.backgroundColor = "red";
    localStorage.setItem(`inTheCart_${index}`, "true");
    card.style.boxShadow = "0 4px 10px rgba(0, 255, 0, 0.6)";
    alert(`${Product.products[index].pName} is added to the cart!`);
  }
}
