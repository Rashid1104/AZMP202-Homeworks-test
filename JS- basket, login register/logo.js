const carsData = [
    {
      name: "Koenigsegg",
      img: "img/car1.png",
      type: "Sport",
      fuel: "90L",
      transmission: "Manual",
      passengers: "2 People",
      price: 99.00,
    },
    {
      name: "Nissan GT-R",
      img: "img/car1.png",
      type: "Sport",
      fuel: "80L",
      transmission: "Manual",
      passengers: "2 People",
      price: 80.00,
    },
    {
      name: "Rolls-Royce",
      img: "img/car1.png",
      type: "Sedan",
      fuel: "70L",
      transmission: "Manual",
      passengers: "4 People",
      price: 96.00,
    },
    {
      name: "Nissan GT-R",
      img: "img/car1.png",
      type: "Sport",
      fuel: "80L",
      transmission: "Manual",
      passengers: "2 People",
      price: 80.00,
      discount: "$100.00",
    
    },
    {
      name: "All New Rush",
      img: "img/car1.png",
      type: "SUV",
      fuel: "70L",
      transmission: "Manual",
      passengers: "6 People",
      price: 72.00,
      discount: "$80.00",
    },
    {
      name: "CR-V",
      img: "img/car1.png",
      type: "SUV",
      fuel: "80L",
      transmission: "Manual",
      passengers: "6 People",
      price: 80.00,
    },
    {
      name: "All New Terios",
      img: "img/car1.png",
      type: "SUV",
      fuel: "90L",
      transmission: "Manual",
      passengers: "6 People",
      price: 74.00,
    },
    {
      name: "CR-V",
      img: "img/car1.png",
      type: "SUV",
      fuel: "80L",
      transmission: "Manual",
      passengers: "6 People",
      price: 80.00,
    },
    {
      name: "Koenigsegg",
      img: "img/car1.png",
      type: "Sport",
      fuel: "90L",
      transmission: "Manual",
      passengers: "2 People",
      price: 99.00,
    },
    {
      name: "Nissan GT-R",
      img: "img/car1.png",
      type: "Sport",
      fuel: "80L",
      transmission: "Manual",
      passengers: "2 People",
      price: 80.00,
    },
    {
      name: "Rolls-Royce",
      img: "img/car1.png",
      type: "Sedan",
      fuel: "70L",
      transmission: "Manual",
      passengers: "4 People",
      price: 96.00,
    },
    {
      name: "Nissan GT-R",
      img: "img/car1.png",
      type: "Sport",
      fuel: "80L",
      transmission: "Manual",
      passengers: "2 People",
      price: 80.00,
      discount: "$100.00",
    
    },
    {
      name: "All New Rush",
      img: "img/car1.png",
      type: "SUV",
      fuel: "70L",
      transmission: "Manual",
      passengers: "6 People",
      price: 72.00,
      discount: "$80.00",
    },
    {
      name: "CR-V",
      img: "img/car1.png",
      type: "SUV",
      fuel: "80L",
      transmission: "Manual",
      passengers: "6 People",
      price: 80.00,
    },
    {
      name: "All New Terios",
      img: "img/car1.png",
      type: "SUV",
      fuel: "90L",
      transmission: "Manual",
      passengers: "6 People",
      price: 74.00,
    },
    {
      name: "CR-V",
      img: "img/car1.png",
      type: "SUV",
      fuel: "80L",
      transmission: "Manual",
      passengers: "6 People",
      price: 80.00,
    },
    {
      name: "Koenigsegg",
      img: "img/car1.png",
      type: "Sport",
      fuel: "90L",
      transmission: "Manual",
      passengers: "2 People",
      price: 99.00,
    },
    {
      name: "Nissan GT-R",
      img: "img/car1.png",
      type: "Sport",
      fuel: "80L",
      transmission: "Manual",
      passengers: "2 People",
      price: 80.00,
    },
    {
      name: "Rolls-Royce",
      img: "img/car1.png",
      type: "Sedan",
      fuel: "70L",
      transmission: "Manual",
      passengers: "4 People",
      price: 96.00,
    },
    {
      name: "Nissan GT-R",
      img: "img/car1.png",
      type: "Sport",
      fuel: "80L",
      transmission: "Manual",
      passengers: "2 People",
      price: 80.00,
      discount: "$100.00",
    
    },
    {
      name: "All New Rush",
      img: "img/car1.png",
      type: "SUV",
      fuel: "70L",
      transmission: "Manual",
      passengers: "6 People",
      price: 72.00,
      discount: "$80.00",
    },
    {
      name: "CR-V",
      img: "img/car1.png",
      type: "SUV",
      fuel: "80L",
      transmission: "Manual",
      passengers: "6 People",
      price: 80.00,
    },
    {
      name: "All New Terios",
      img: "img/car1.png",
      type: "SUV",
      fuel: "90L",
      transmission: "Manual",
      passengers: "6 People",
      price: 74.00,
    },
    {
      name: "CR-V",
      img: "img/car1.png",
      type: "SUV",
      fuel: "80L",
      transmission: "Manual",
      passengers: "6 People",
      price: 80.00,
    },
  ];
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  let currentIndex = 0;
  const itemsPerPage = 8;
  const itemsPerLoadMore = 4;
  
  function renderCards() {
    const container = document.getElementById("basketContainer");
    const itemsToShow = carsData.slice(0, currentIndex);
    container.innerHTML = "";
    itemsToShow.forEach((car) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="text-icon">
          <div>
            <h3>${car.name}</h3>
            <p>${car.type}</p><br>
          </div>
          <button class="heart-btn">
            <i class="fa-regular fa-heart" style="color: #ff0000;"></i>
          </button>
        </div>
        <img src="${car.img}" alt="" class="images">
        <div class="elem">
          <p><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</p>
          <p><i class="fa-regular fa-circle-dot"></i> Manual</p>
          <p><i class="fa-solid fa-user"></i> ${car.passengers}</p>
        </div>
        <div class="Price-btn">
          <p class="price p">$${car.price.toFixed(2)} <span class="span">/ day</span></p>
          <button class="Rent-now">Rent Now</button>
        </div>
      `;
      container.appendChild(card);
    });
    const showMoreButton = document.getElementById("Show-More-Car");
    if (currentIndex >= carsData.length) {
      showMoreButton.style.display = "none";
    }
  }
  
  function showMoreCards() {
    currentIndex += itemsPerLoadMore;
    renderCards();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    currentIndex = itemsPerPage;
    renderCards();
    const ShowMoreCar = document.getElementById('Show-More-Car');
    ShowMoreCar.addEventListener('click', () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to load more cars?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, load more!'
      }).then((result) => {
        if (result.isConfirmed) {
          showMoreCards();
          Swal.fire({
            title: 'Loaded!',
            text: 'More cars have been displayed.',
            icon: 'success',
            confirmButtonColor: '#3085d6'
          });
        }
      });
    });
  });  
 renderCards();
  

// function searchCars(query) {
//     const filteredData = carsData.filter((car) => {
//       return car.name.toLowerCase().includes(query.toLowerCase());
//     });
//     renderCards(filteredData);
//   }
//   searchInput.addEventListener("input", () => {
//     const query = searchInput.value.trim();
//     searchCars(query);
//   });

  // container.addEventListener("click", (event) => {
  //   if (event.target.classList.contains("Rent-now")) {
  //     const cardElement = event.target.closest(".card");
  //     const carName = cardElement.querySelector("h3").textContent;

  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: `Do you really want to rent the ${carName}?`,
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, rent this car!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         Swal.fire({
  //           title: "Success!",
  //           text: `You have rented the ${carName} successfully.`,
  //           icon: "success",
  //           confirmButtonText: "OK",
  //         });
  //       }
  //     });
  //   }
  // });

 
 
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

const Logoutbtn = document.createElement('button');

function createMenuItem(text, href, action) {
  const div = document.createElement('div');
  div.style.width = '200px';
  div.style.height = '40px';
  div.style.textAlign = 'left';
  div.style.transition = '0.6s ease';


  const link = document.createElement('a');
  link.id = text.toLowerCase();
  link.id = text;
  link.innerText = text;
  link.href = href;
  link.style.display = 'block';
  link.style.padding = '12px 4px';
  link.style.color = '#fff';
  link.style.textDecoration = 'none';
  link.style.fontSize = '1rem';
  link.style.fontFamily = 'Arial, sans-serif';
  if (action) link.setAttribute('data-action', action);

  div.appendChild(link);
  div.onmouseover = () => (div.style.backgroundColor = 'rgb(1, 1, 119)');
  div.onmouseout = () => (div.style.backgroundColor = 'darkblue');

  sidebar.appendChild(div);
}

createMenuItem('Products', 'product.html');
createMenuItem('login', 'login.html','login');
createMenuItem('registration', 'register.html','registration');
createMenuItem('logout', '#','logout');

document.querySelectorAll('[data-action]').forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
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
            Swal.fire({
              title: 'Logged Out',
              text: 'You have been logged out successfully.',
              icon: 'success',
               confirmButtonText: 'OK',
          }).then(() => {
              location.href = "login.html"
          })
             
          }
      });
  } else if (action === 'login' || action === 'registration') {
      window.location.href = event.target.href;
  }
});
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
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector('.search-Btn');
  let isScrolling;

  window.addEventListener('scroll', () => {
      searchBtn.classList.add('hidden'); 
      clearTimeout(isScrolling); 
      isScrolling = setTimeout(() => {
          searchBtn.classList.remove('hidden'); 
      }, 600); 
  });
});
