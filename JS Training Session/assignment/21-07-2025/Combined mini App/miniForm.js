function handleOrder(e) {
  e.preventDefault(); 

  const btn = e.target.querySelector("#orderBtn");
  const card = btn.closest(".card");
  const name = document.getElementById("username").value.trim();
  const pizza = document.getElementById("pizzaType").value;
  const quantity = document.getElementById("quantity").value;
  const deliveryDate = document.getElementById("deliveryDate").value;

  try {
    if (!name || quantity <= 0 || !deliveryDate) throw new Error("Please fill all fields correctly!");

    const currentDate = new Date();
    const selectedDate = new Date(deliveryDate);
    if (selectedDate <= currentDate) throw new Error("Delivery date must be in the future!");

    const total = eval(`${quantity} * 199`);
    console.log("Debug: total price calculated using eval:", total); // Debug

    processOrder(name, pizza, total).then((msg) => {
      alert(msg);
      card.style.boxShadow = "0 0 50px green";
      btn.innerText = "Order Placed!";
      btn.disabled = true;
    }).catch((err) => {
      alert("Order failed: " + err.message);
    });

  } catch (err) {
    alert("Error: " + err.message);
    card.style.boxShadow = "0 0 10px red";
  }
}

function processOrder(name, pizza, total) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;  //for set failier some time
      if (success) {
        resolve(`Thank you, ${name}! Your ${pizza} pizza order of ₹${total} is confirmed.`);
      } else {
        reject(new Error("Server error. Try again later."));
      }
    }, 1500);
  });
}
