const carsData = [
    {
      name: "Koenigsegg",
      type: "Sport",
      fuel: "90L",
      transmission: "Manual",
      passengers: "2 People",
      price: 99.00,
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      fuel: "80L",
      transmission: "Manual",
      passengers: "2 People",
      price: 80.00,
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      fuel: "70L",
      transmission: "Manual",
      passengers: "4 People",
      price: 96.00,
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      fuel: "80L",
      transmission: "Manual",
      passengers: "2 People",
      price: 80.00,
      discount: "$100.00",
    
    },
    {
      name: "All New Rush",
      type: "SUV",
      fuel: "70L",
      transmission: "Manual",
      passengers: "6 People",
      price: 72.00,
      discount: "$80.00",
    },
    {
      name: "CR-V",
      type: "SUV",
      fuel: "80L",
      transmission: "Manual",
      passengers: "6 People",
      price: 80.00,
    },
    {
      name: "All New Terios",
      type: "SUV",
      fuel: "90L",
      transmission: "Manual",
      passengers: "6 People",
      price: 74.00,
    },
    {
      name: "CR-V",
      type: "SUV",
      fuel: "80L",
      transmission: "Manual",
      passengers: "6 People",
      price: 80.00,
    },
  ];

  function renderCards() {
    const container = document.getElementById("basketContainer");
    container.innerHTML = ""; 
  
    carsData.forEach((car) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <h3>${car.name}</h3>
        <p>${car.type}</p>
 <img src="" alt="">
        <p><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</p>
        <p><i class="fa-regular fa-circle-dot"></i> Manual</p>
        <p><i class="fa-solid fa-user"></i> ${car.passengers}</p>
        <p class="price"$${car.price.toFixed(2)}</p>
      `;
      container.appendChild(card);
    });
  }
 
  renderCards();