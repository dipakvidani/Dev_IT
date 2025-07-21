const btnAddToCart = document.getElementById("btn_addToCart");

function handleCart() {
  const btnAddToCart = document.getElementById("btn_addToCart");

  let inTheCart = localStorage.getItem("inTheCart") === "true"; // Convert to boolean
  let closestCard = btnAddToCart.closest(".card");

  setTimeout(() => {
    if (inTheCart) {
      btnAddToCart.innerText = "Add To Cart";
      btnAddToCart.style.backgroundColor = "blue";
      localStorage.setItem("inTheCart", "false");
      closestCard.style.boxShadow = "0 0 12px rgba(255, 0, 0, 0.5)";

      alert("HeadPhone is Removed from the cart!");
    } else {
      btnAddToCart.innerText = "Remove From Cart";
      btnAddToCart.style.backgroundColor = "red";
      localStorage.setItem("inTheCart", "true");
      closestCard.style.boxShadow = "0 .125rem .25rem rgba(0, 0, 0, 0.075)";

      alert("HeadPhone is Added to the cart!");
    }
  }, 1000);
}

let card_container = document.getElementById("card_container");

let products = [];

products.map((product) => {
  return (
    <div
      class="card shadow-lg"
      id="Product-card"
      style="max-width: 350px; margin: auto;"
    >
      <img
        src="https://img.freepik.com/premium-psd/black-wireless-headphones-isolated-transparent-background_698214-3323.jpg"
        class="card-img-top"
        alt="Product Image"
      />
      <div class="card-body">
        <h5 class="card-title fw-bold">Wireless Headphones</h5>
        <p class="card-text text-muted">
          High-quality wireless headphones with noise cancellation.
        </p>

        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="fw-bold text-success">$49.99</span>
          <div class="text-warning">★★★★☆</div>
        </div>

        <button
          class="btn btn-primary w-100"
          id="btn_addToCart"
          onclick="handleCart()"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
});

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
    products.push(constructor.name)
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


console.log(products);
