const carsData = [
    {
      name: "Koenigsegg",
      img: "img/car1.png",
      type: "Sport",
      fuel: "90L",
      transmission: "Manual",
      passengers: "2 People",
      price: 99.000,
    },
    {
      name: "Nissan GT-R",
      img: "img/car1.png",
      type: "Sport",
      fuel: "80L",
      transmission: "Manual",
      passengers: "2 People",
      price: 80.000,
    },
    {
      name: "Rolls-Royce",
      img: "img/car1.png",
      type: "Sedan",
      fuel: "70L",
      transmission: "Manual",
      passengers: "4 People",
      price: 96.000,
    },
    {
      name: "Nissan GT-R",
      img: "img/car1.png",
      type: "Sport",
      fuel: "80L",
      transmission: "Manual",
      passengers: "2 People",
      price: 80.000,
      discount: "$100.00",
    
    },
    {
      name: "All New Rush",
      img: "img/car1.png",
      type: "SUV",
      fuel: "70L",
      transmission: "Manual",
      passengers: "6 People",
      price: 72.000,
      discount: "$80.00",
    },
    {
      name: "CR-V",
      img: "img/car1.png",
      type: "SUV",
      fuel: "80L",
      transmission: "Manual",
      passengers: "6 People",
      price: 80.000,
    },
    {
      name: "All New Terios",
      img: "img/car1.png",
      type: "SUV",
      fuel: "90L",
      transmission: "Manual",
      passengers: "6 People",
      price: 74.000,
    },
    {
      name: "CR-V",
      img: "img/car1.png",
      type: "SUV",
      fuel: "80L",
      transmission: "Manual",
      passengers: "6 People",
      price: 80.000,
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
 <img src="${car.img}" alt="" class = "images">
 <div class= "elem">
        <p><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</p>
        <p><i class="fa-regular fa-circle-dot"></i> Manual</p>
        <p><i class="fa-solid fa-user"></i> ${car.passengers}</p>
        </div>
        <p class="price">price: $ ${car.price.toFixed(3)}</p>
        <div class = "btns">
       <button class = "cart-btn"><i class="fa-solid fa-cart-shopping" style="color: #FFD43B;"></i></button>
       <button class = "heart-btn"><i class="fa-regular fa-heart" style="color: #ff0000;"></i></button>
       <button class = "info-btn"><i class="fa-solid fa-circle-info" style="color: #74C0FC;"></i></button>
        </div>
      `;
      container.appendChild(card);
    });
  }
 
  renderCards();

  document.addEventListener("DOMContentLoaded", () => {
    const sayinElement = document.querySelector(".sayin");

    let favoritesCount = 0;

    document.body.addEventListener("click", (e) => {
      if (e.target.closest(".heart-btn")) {
        const heartIcon = e.target.closest(".heart-btn").querySelector("i");
  
        if (heartIcon.classList.contains("fa-regular")) {
          heartIcon.classList.remove("fa-regular", "fa-heart");
          heartIcon.classList.add("fa-solid", "fa-heart");
          heartIcon.style.color = "#ff0000";
          favoritesCount++;
        } else {
          heartIcon.classList.remove("fa-solid", "fa-heart");
          heartIcon.classList.add("fa-regular", "fa-heart");
          heartIcon.style.color = "#ff0000";
          favoritesCount--; 
        }

        sayinElement.textContent = favoritesCount;
      }
    });
  });
 
const sidebar = document.createElement('div');
sidebar.id = 'sidebar';
sidebar.style.width = '200px';
sidebar.style.height = '100vh';
sidebar.style.backgroundColor = 'darkblue';
sidebar.style.position = 'fixed';
sidebar.style.top = '0';
sidebar.style.right = '-200px';
sidebar.style.boxSizing = 'border-box';
sidebar.style.transition = 'right 0.3s ease';
document.body.appendChild(sidebar);

const image = document.createElement('img');
image.src = 'img/alien.png';
image.style.borderRadius = '50%';
image.style.width = '100px';
image.style.height = '100px';
image.style.display = 'flex';
image.style.justifyContent = 'center';
image.style.alignItems = 'center';
sidebar.appendChild(image);

function createMenuItem(text, href) {
  const div = document.createElement('div');
  div.style.width = '200px';
  div.style.height = '40px';
  div.style.textAlign = 'left';
  div.style.transition = '0.6s ease';

  const link = document.createElement('a');
  link.id = text;
  link.innerText = text;
  link.href = href;
  link.style.display = 'block';
  link.style.padding = '12px 4px';
  link.style.color = '#fff';
  link.style.textDecoration = 'none';
  link.style.fontSize = '1rem';
  link.style.fontFamily = 'Arial, sans-serif';

  div.appendChild(link);
  div.onmouseover = () => (div.style.backgroundColor = 'rgb(1, 1, 119)');
  div.onmouseout = () => (div.style.backgroundColor = 'darkblue');

  sidebar.appendChild(div);
}

createMenuItem('Products', 'product.html');
createMenuItem('login', 'login.html');
createMenuItem('registration', 'register.html');
createMenuItem('logout', '#');

document.getElementById('logout').addEventListener('click', (event) => {
  event.preventDefault(); 
  const action = event.target.dataset.action;

  if (action === 'logout') {
      Swal.fire({
          title: 'Are you sure?',
          text: "Do you really want to log out?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, log out!'
      }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire(
                  'Logged Out',
                  'You have been logged out successfully.',
                  'success'
              );
          }
      });
  } else if (action === 'login' || action === 'registration') {
      window.location.href = event.target.href;
  }
});

const closeButton = document.createElement('button');
closeButton.innerText = 'X';
closeButton.style.position = 'absolute';
closeButton.style.top = '2px';
closeButton.style.left = '9px';
closeButton.style.fontSize = '0.6rem';
closeButton.style.background = 'none';
closeButton.style.border = 'none';
closeButton.style.color = '#fff';
closeButton.style.opacity = '0.7';
closeButton.style.cursor = 'pointer';
sidebar.appendChild(closeButton);

const img = document.querySelector('.img'); 

let sidebarVisible = false;

img.onclick = () => {
  sidebarVisible = !sidebarVisible;
  sidebar.style.right = sidebarVisible ? '0' : '-200px';
};

closeButton.onclick = () => {
  sidebarVisible = false;
  sidebar.style.right = '-200px';
};
