    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://dummyjson.com/products");
    xhr.send();

    xhr.onload = function () {
      let productsData = JSON.parse(this.responseText);

      let container = document.getElementById("productContainer");

      productsData.products.map((product) => {
        container.innerHTML += `
          <div class="col-12 col-sm-6 col-lg-4 my-3">
            <div class="card h-100 shadow">
             <img src="${product.thumbnail}" class="card-img-top img-fluid" alt="${product.title}">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>Category:</strong> ${product.category}</li>
                  <li class="list-group-item"><strong>Price:</strong> $${product.price}</li>
                  <li class="list-group-item"><strong>Discount:</strong> ${product.discountPercentage}%</li>
                  <li class="list-group-item"><strong>Rating:</strong> ⭐ ${product.rating}</li>
                  <li class="list-group-item"><strong>Stock:</strong> ${product.stock}</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      });
    };
