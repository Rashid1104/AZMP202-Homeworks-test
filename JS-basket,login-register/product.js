const products = [
    {
        image: "https://unsplash.it/500/500?image=1",
        id: 1,
        title: "Men's Cotton T-Shirt",
        category: "men's clothing",
        description: "Soft and breathable cotton t-shirt.",
        description2: "A soft and breathable cotton t-shirt perfect for casual wear. It features a comfortable fit, and its lightweight fabric makes it ideal for warm weather, ensuring that you stay cool and relaxed throughout the day. Whether you're lounging at home or heading out for a casual outing, this t-shirt offers the perfect blend of comfort and style.",
        price: 12.99,
    },
    {
        image: "https://unsplash.it/500/500?image=2",
        id: 2,
        title: "Women's Summer Dress",
        category: "women's clothing",
        description: "Light and airy dress for summer.",
        description2: "This light and airy summer dress is designed to keep you cool and stylish in the hot months. Made with breathable fabric, it allows for free movement while offering a flattering silhouette. Whether you're at the beach or enjoying a sunny day out, this dress combines elegance and comfort effortlessly, making it a must-have in every wardrobe.",
        price: 25.49,
    },
    {
        image: "https://unsplash.it/500/500?image=3",
        id: 3,
        title: "Smartphone",
        category: "electronics",
        description: "Latest model with advanced features.",
        description2: "This smartphone is packed with the latest technology, offering a fast and seamless user experience. With a high-resolution display, powerful processor, and advanced camera features, it’s designed to keep up with your everyday needs. Whether you're streaming videos, taking photos, or using apps, this smartphone guarantees exceptional performance and long-lasting battery life.",
        price: 699.99,
    },
    {
        image: "https://unsplash.it/500/500?image=4",
        id: 4,
        title: "Gold Necklace",
        category: "jewelery",
        description: "Elegant gold necklace for special occasions.",
        description2: "This elegant gold necklace is the perfect accessory for any special occasion. Its timeless design features a delicate chain and a stunning pendant, making it a sophisticated addition to any outfit. Whether you're attending a formal event or simply looking to elevate your everyday style, this necklace is sure to add a touch of luxury and elegance.",
        price: 199.99,
    },
    {
        image: "https://unsplash.it/500/500?image=5",
        id: 5,
        title: "Men's Denim Jacket",
        category: "men's clothing",
        description: "Classic denim jacket for casual wear.",
        description2: "This classic denim jacket is the ultimate staple for a laid-back, casual look. Made from durable denim, it provides both style and comfort. The timeless design and versatile fit make it perfect for layering over t-shirts or shirts, offering a rugged yet fashionable touch to any outfit. Ideal for cooler weather, this jacket promises to be a long-lasting wardrobe essential.",
        price: 39.99,
    },
    {
        image: "https://unsplash.it/500/500?image=6",
        id: 6,
        title: "Women's Yoga Pants",
        category: "women's clothing",
        description: "Stretchable and comfortable yoga pants.",
        description2: "These stretchable and comfortable yoga pants are designed to support you during your workouts while offering a flattering fit. Made from soft and flexible fabric, they provide maximum comfort and freedom of movement, whether you're practicing yoga, hitting the gym, or running errands. With a stylish design and breathable material, these pants are a versatile addition to any active wardrobe.",
        price: 18.99,
    },
    {
        image: "https://unsplash.it/500/500?image=7",
        id: 7,
        title: "Wireless Earbuds",
        category: "electronics",
        description: "Compact and high-quality wireless earbuds.",
        description2: "These compact and high-quality wireless earbuds deliver exceptional sound quality without the hassle of tangled wires. Perfect for listening to music, podcasts, or making calls, these earbuds offer long battery life, a secure fit, and an ergonomic design that makes them ideal for on-the-go use. With their sleek look and powerful audio performance, they're the ultimate accessory for music lovers.",
        price: 29.99,
    },
    {
        image: "https://unsplash.it/500/500?image=8",
        id: 8,
        title: "Diamond Ring",
        category: "jewelery",
        description: "Beautiful diamond ring with a modern design.",
        description2: "This stunning diamond ring is a true symbol of elegance and luxury. Featuring a radiant diamond set in a sleek, modern band, it’s the perfect choice for engagements, anniversaries, or simply to add a touch of sparkle to your collection. The timeless design and high-quality craftsmanship make this ring an heirloom piece that will be cherished for years to come.",
        price: 999.99,
    },
    {
        image: "https://unsplash.it/500/500?image=9",
        id: 9,
        title: "Men's Formal Shirt",
        category: "men's clothing",
        description: "Elegant shirt for formal occasions.",
        description2: "This elegant formal shirt is designed to provide both comfort and style for any formal occasion. Made from premium cotton fabric, it’s soft against the skin and provides a tailored fit for a sharp, sophisticated look. Whether you're attending a business meeting or a special event, this shirt ensures you look your best with a crisp, polished appearance.",
        price: 24.99,
    },
    {
        image: "https://unsplash.it/500/500?image=10",
        id: 10,
        title: "Women's Leather Jacket",
        category: "women's clothing",
        description: "Stylish leather jacket for women.",
        description2: "This stylish leather jacket is a must-have piece for any fashion-forward wardrobe. Made from high-quality leather, it provides both warmth and a chic, edgy look. With a flattering cut and versatile design, it can be paired with almost anything—from dresses to jeans, offering a sophisticated yet rebellious style that never goes out of fashion.",
        price: 89.99,
    },
    {
        image: "https://unsplash.it/500/500?image=11",
        id: 11,
        title: "Laptop",
        category: "electronics",
        description: "High-performance laptop for work and gaming.",
        description2: "This high-performance laptop is perfect for both work and play. Equipped with the latest processors, ample storage, and a vibrant high-resolution display, it’s designed to handle everything from heavy multitasking to gaming. Whether you're working on creative projects or enjoying entertainment, this laptop ensures smooth performance and reliability.",
        price: 999.99,
    },
    {
        image: "https://unsplash.it/500/500?image=12",
        id: 12,
        title: "Silver Earrings",
        category: "jewelery",
        description: "Elegant earrings made of sterling silver.",
        description2: "These elegant sterling silver earrings offer a minimalist yet chic design. Whether you're dressing up for a night out or looking to add a subtle touch of elegance to your everyday outfit, these earrings are perfect for any occasion. Their timeless design ensures they will remain a favorite accessory for years to come.",
        price: 49.99,
    },
    {
        image: "https://unsplash.it/500/500?image=13",
        id: 13,
        title: "Men's Sweatshirt",
        category: "men's clothing",
        description: "Comfortable and warm sweatshirt.",
        description2: "This comfortable and warm sweatshirt is perfect for lounging or casual outings. Made from soft cotton fabric, it provides a cozy fit while offering breathability and comfort. The relaxed design ensures freedom of movement, making it a great choice for chilly days or layering over a t-shirt for added warmth.",
        price: 29.99,
    },
    {
        image: "https://unsplash.it/500/500?image=14",
        id: 14,
        title: "Women's Winter Scarf",
        category: "women's clothing",
        description: "Warm and stylish scarf for winter.",
        description2: "This warm and stylish scarf is the perfect accessory for cold weather. Made from soft, cozy material, it helps to keep you comfortable while adding a touch of elegance to your winter outfits. Whether you're heading out for errands or attending a winter event, this scarf is the ideal companion to keep you warm and fashionable.",
        price: 12.49,
    },
    {
        image: "https://unsplash.it/500/500?image=15",
        id: 15,
        title: "Smartwatch",
        category: "electronics",
        description: "Advanced smartwatch with fitness tracking.",
        description2: "This advanced smartwatch offers a wide range of features, including fitness tracking, heart rate monitoring, and notifications. Designed with a sleek and modern appearance, it pairs seamlessly with your smartphone to help you stay connected while tracking your health goals. Whether you're working out or going about your daily activities, this smartwatch is a practical and stylish accessory.",
        price: 149.99,
    },
    {
        image: "https://unsplash.it/500/500?image=16",
        id: 16,
        title: "Pearl Bracelet",
        category: "jewelery",
        description: "Classic pearl bracelet for any outfit.",
        description2: "This classic pearl bracelet offers a sophisticated touch to any outfit. Made with high-quality pearls and a sleek design, it adds an element of luxury and grace. Whether you're dressing up for a formal event or looking to enhance your daily wear, this bracelet is a timeless accessory that never goes out of style.",
        price: 79.99,
    },
    {
        image: "https://unsplash.it/500/500?image=17",
        id: 17,
        title: "Men's Casual Pants",
        category: "men's clothing",
        description: "Comfortable casual pants for everyday wear.",
        description2: "These men's casual pants offer the perfect combination of comfort and style. Made with soft fabric and featuring a relaxed fit, they are ideal for everyday wear. Whether you're at home, running errands, or enjoying a casual outing, these pants provide a laid-back yet fashionable look that suits any occasion.",
        price: 39.99,
    },
    {
        image: "https://unsplash.it/500/500?image=18",
        id: 18,
        title: "Women's High Heel Shoes",
        category: "women's clothing",
        description: "Elegant blouse for formal occasions.",
        description2: "These elegant high heel shoes are designed to elevate your style while providing comfort. Made with premium materials, they offer a sleek design and are perfect for both formal and casual events. Whether you're attending a gala or a night out with friends, these shoes will add a sophisticated touch to your ensemble.",
        price: 69.99,
    },
    {
        image: "https://unsplash.it/500/500?image=19",
        id: 19,
        title: "Bluetooth Speaker",
        category: "electronics",
        description: "Portable tablet with a high-resolution display.",
        description2: "This portable Bluetooth speaker delivers powerful sound in a compact design. Perfect for outdoor adventures or indoor relaxation, it offers high-quality audio, long battery life, and water resistance. Whether you're hosting a party or enjoying some solo time, this speaker guarantees excellent sound performance wherever you go.",
        price: 49.99,
    },
    {
        image: "https://unsplash.it/500/500?image=20",
        id: 20,
        title: "Men's Leather Boots",
        category: "men's clothing",
        description: "Luxurious gold bracelet with a sleek design.",
        description2: "These stylish leather boots offer both durability and comfort. Made with high-quality leather and a sturdy sole, they provide excellent support and are perfect for all-day wear. Whether you're heading to work or enjoying a weekend hike, these boots offer both rugged durability and a sophisticated look.",
        price: 89.99,
    },
    {
        image: "https://unsplash.it/500/500?image=21",
        id: 21,
        title: "Men's Jacket with Hood",
        category: "men's clothing",
        description: "Durable and stylish leather boots.",
        description2: "This versatile jacket is perfect for all weather conditions. With a detachable hood and soft insulation, it offers warmth without sacrificing style. Whether you're braving the cold or need an extra layer during unpredictable weather, this jacket will keep you comfortable and fashionable.",
        price: 59.99,
    },
    {
        image: "https://unsplash.it/500/500?image=22",
        id: 22,
        title: "Women’s Handbag",
        category: "women's clothing",
        description: "Elegant evening gown for special events.",
        description2: "This elegant handbag is the perfect accessory for any occasion. Made from premium leather, it offers ample space for your essentials while maintaining a stylish look. Whether you're heading to the office or out for dinner, this handbag adds a touch of sophistication to your ensemble.",
        price: 129.99,
    },
    {
        image: "https://unsplash.it/500/500?image=23",
        id: 23,
        title: "Smart Home Thermostat",
        category: "electronics",
        description: "High-quality headset for immersive gaming.",
        description2: "This smart home thermostat helps you control the temperature of your home from anywhere. With its intuitive design and energy-saving features, it ensures your home is always at the perfect temperature while reducing energy consumption. Easy to install and control through your smartphone, this thermostat brings modern convenience to your home.",
        price: 119.99,
    },
    {
        image: "https://unsplash.it/500/500?image=24",
        id: 24,
        title: "Women's Sunglasses",
        category: "women's clothing",
        description: "Beautiful diamond earrings for special occasions.",
        description2: "These stylish sunglasses are the perfect accessory for sunny days. Made with high-quality lenses and a chic design, they provide 100% UV protection while adding a fashionable touch to your outfit. Whether you're at the beach or strolling through the city, these sunglasses will keep you looking cool and protected.",
        price: 19.99,
    },
    {
        image: "https://unsplash.it/500/500?image=25",
        id: 25,
        title: "Portable Power Bank",
        category: "electronics",
        description: "Warm and waterproof winter jacket.",
        description2: "This portable power bank ensures you never run out of battery when you need it most. With a high-capacity battery and multiple USB ports, it can charge your devices quickly and efficiently. Compact and lightweight, it fits easily into your bag or pocket, making it the perfect accessory for travel or long days out.",
        price: 29.99,
    },
    {
        image: "https://unsplash.it/500/500?image=26",
        id: 26,
        title: "Women’s Winter Coat",
        category: "women's clothing",
        description: "Comfortable and stylish cardigan.",
        description2: "This cozy winter coat is designed to keep you warm and stylish during the colder months. Made with soft, insulating fabric, it offers both comfort and protection against the elements. The sleek design and classic cut ensure you look fashionable while staying warm and comfortable in winter weather.",
        price: 89.99,
    },
    {
        image: "https://unsplash.it/500/500?image=27",
        id: 27,
        title: "Men's Running Shoes",
        category: "men's clothing",
        description: "Ultra HD 4K LED TV with vibrant colors.",
        description2: "These high-performance running shoes are designed to offer comfort and support during your workouts. With a lightweight and breathable design, they ensure your feet stay cool and comfortable while providing the support you need for long runs. Whether you're a seasoned runner or just starting, these shoes will help you achieve your fitness goals.",
        price: 59.99,
    },
    {
        image: "https://unsplash.it/500/500?image=28",
        id: 28,
        title: "Digital Camera",
        category: "electronics",
        description: "Elegant gold pendant necklace.",
        description2: "Capture stunning photos with this high-resolution digital camera. Equipped with advanced features and a powerful lens, it offers exceptional image quality for both amateurs and professionals. Whether you're taking portraits or landscape shots, this camera provides sharp, vibrant photos with every click.",
        price: 349.99,
    },
    {
        image: "https://unsplash.it/500/500?image=29",
        id: 29,
        title: "Luxury Watch",
        category: "jewelery",
        description: "Utility pants with multiple pockets.",
        description2: "This luxury watch offers both elegance and precision. Made with high-quality materials and a sleek design, it is the perfect accessory for formal events and everyday wear. With its durable construction and timeless aesthetic, this watch is a classic addition to any collection.",
        price: 499.99,
    },
    {
        image: "https://unsplash.it/500/500?image=30",
        id: 30,
        title: "Fitness Tracker",
        category: "electronics",
        description: "Stylish wool coat for cold weather.",
        description2: "This advanced fitness tracker helps you monitor your health and fitness goals. With features like heart rate monitoring, step tracking, and sleep analysis, it offers a comprehensive view of your physical well-being. Sleek and lightweight, it can be worn all day and night to help you stay on track with your health goals.",
        price: 69.99,
    },
    {
        image: "https://unsplash.it/500/500?image=31",
        id: 31,
        title: "Women's Casual Blouse",
        category: "women's clothing",
        description: "Portable Bluetooth speaker with powerful sound.",
        description2: "This casual blouse is made with lightweight and breathable fabric, making it perfect for everyday wear. Whether you're at work or out for lunch, it offers a relaxed yet polished look. With its soft feel and flattering fit, this blouse is a versatile addition to any wardrobe.",
        price: 24.99,
    },
    {
        image: "https://unsplash.it/500/500?image=32",
        id: 32,
        title: "Men's Hiking Boots",
        category: "men's clothing",
        description: "Minimalistic silver chain bracelet.",
        description2: "These durable hiking boots are built for outdoor adventures. With a rugged design and superior grip, they provide the support and traction you need to tackle challenging terrain. Whether you're hiking, trekking, or exploring the wilderness, these boots offer both comfort and performance for any outdoor activity.",
        price: 79.99,
    },
    {
        image: "https://unsplash.it/500/500?image=33",
        id: 33,
        title: "Wireless Headphones",
        category: "electronics",
        description: "Breathable and lightweight sportswear set.",
        description2: "These wireless headphones provide an immersive audio experience with high-quality sound. Designed for comfort and convenience, they offer noise cancellation, long battery life, and a secure fit. Perfect for listening to music, taking calls, or enjoying podcasts, these headphones are ideal for on-the-go use.",
        price: 79.99,
    },
    {
        image: "https://unsplash.it/500/500?image=34",
        id: 34,
        title: "Leather Wallet",
        category: "jewelery",
        description: "Elegant and spacious handbag.",
        description2: "This stylish leather wallet is designed to keep your cards and cash organized while offering a sleek and sophisticated look. Made with high-quality leather, it provides durability and a luxurious feel. The compact design ensures it fits comfortably in your pocket or bag.",
        price: 39.99,
    },
    {
        image: "https://unsplash.it/500/500?image=35",
        id: 35,
        title: "Fitness Equipment",
        category: "electronics",
        description: "High-performance laptop for gaming enthusiasts.",
        description2: "This set of fitness equipment is designed to help you reach your fitness goals from home. Including dumbbells, resistance bands, and a yoga mat, this equipment set provides a full-body workout. Whether you're focusing on strength training, flexibility, or overall fitness, this set has everything you need.",
        price: 89.99,
    },
    {
        image: "https://unsplash.it/500/500?image=36",
        id: 36,
        title: "Smartphone Case",
        category: "electronics",
        description: "Simple and elegant gold stud earrings.",
        description2: "This protective smartphone case is designed to keep your device safe from drops, scratches, and dust. Made from durable material, it provides a sleek, slim fit that adds minimal bulk to your phone while offering maximum protection.",
        price: 14.99,
    },
    {
        image: "https://unsplash.it/500/500?image=37",
        id: 37,
        title: "Men's Polo Shirt",
        category: "men's clothing",
        description: "Quick-drying swim trunks for the beach.",
        description2: "This classic polo shirt is a versatile addition to any wardrobe. Made with soft cotton fabric, it offers both comfort and breathability. With a timeless design and flattering fit, it's suitable for casual outings or even more semi-formal occasions.",
        price: 19.99,
    },
    {
        image: "https://unsplash.it/500/500?image=38",
        id: 38,
        title: "Women's Boots",
        category: "women's clothing",
        description: "Stylish sunglasses with UV protection.",
        description2: "These stylish boots are perfect for both fashion and function. Made with high-quality materials, they offer both warmth and a chic design. Whether you're dressing up for a night out or heading to the office, these boots will add a sophisticated touch to any outfit.",
        price: 69.99,
    },
    {
        image: "https://unsplash.it/500/500?image=39",
        id: 39,
        title: "Electric Kettle",
        category: "electronics",
        description: "Control your smart devices with ease.",
        description2: "This electric kettle boils water quickly and efficiently. With an easy-to-use design and sleek appearance, it’s perfect for making tea, coffee, or hot beverages. The compact design fits easily in any kitchen, and the automatic shut-off feature ensures safety.",
        price: 29.99,
    },
    {
        image: "https://unsplash.it/500/500?image=40",
        id: 40,
        title: "Bluetooth Keyboard",
        category: "electronics",
        description: "Dazzling diamond pendant for any occasion.",
        description2: "This Bluetooth keyboard provides a seamless typing experience without the hassle of cables. Designed for both comfort and portability, it connects easily to any device, making it perfect for work, travel, or leisure.",
        price: 39.99,
    }
];

    let currentIndex = 0;
const itemsPerPage = 15;
const itemsPerLoadMore = 3;

function renderTable(data) {
    const tableBody = document.getElementById('productTableBody');
    const visibleProducts = data.slice(0, currentIndex + itemsPerPage);
    tableBody.innerHTML = visibleProducts.map(product => 
        `<tr data-id="${product.id}">
            <td><img src="${product.image}" alt="${product.title}" width="50"></td>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.category}</td>
            <td>${product.description}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>
                <button class="heart-btn">
                    <i class="fa-solid fa-heart" style="color: #fff;"></i>
                </button>
            </td>
            <td>
                <button class="details-btn btn">details</button>
            </td>
            <td>
                <button class="Edit-btn btn">Edit</button>
            </td>
            <td>
                <button class="delete-btn btn">Delete</button>
            </td>
        </tr>`
    ).join('');

    const showMoreBtn = document.getElementById('showMoreBtn');
    if (currentIndex + itemsPerPage < data.length) {
        showMoreBtn.style.display = 'inline-block';
    } else {
        showMoreBtn.style.display = 'none';
    }
}

function showMore() {
    currentIndex += itemsPerLoadMore;
    renderTable(products);
}

renderTable(products);

document.getElementById('showMoreBtn').addEventListener('click', showMore);

    // function renderTable(data) {
    //     const tableBody = document.getElementById('productTableBody');
    //     tableBody.innerHTML = data.map(product => `
    //         <tr data-id="${product.id}">
    //             <td><img src="${product.image}" alt="${product.title}" width="50"></td>
    //             <td>${product.id}</td>
    //             <td>${product.title}</td>
    //             <td>${product.category}</td>
    //             <td>${product.description}</td>
    //             <td>${product.price.toFixed(2)}</td>
    //             <td>
    //                 <button class="heart-btn">
    //                     <i class="fa-solid fa-heart" style="color: #fff;"></i>
    //                 </button>
    //             </td>
    //             <td>
    //                 <button class="details-btn btn">details</button>
    //             </td>
    //             <td>
    //                 <button class="Edit-btn btn">Edit</button>
    //             </td>
    //             <td>
    //                 <button class="delete-btn btn">Delete</button>
    //             </td>
    //         </tr>
    //     `).join('');
    // }
    
    document.body.addEventListener("click", (e) => {
        if (e.target.closest(".heart-btn")) {
            const heartIcon = e.target.closest(".heart-btn").querySelector("i");
            const productId = parseInt(e.target.closest("tr").dataset.id);
            const product = products.find(p => p.id === productId);
            
            let favoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts")) || [];
    
            if (heartIcon.style.color === "rgb(255, 0, 0)") {
                heartIcon.style.color = "#fff"; 
                favoriteProducts = favoriteProducts.filter(p => p.id !== productId);
            } else {
                heartIcon.style.color = "#ff0000"; 
                favoriteProducts.push(product);
            }
    
            localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
        }
    });
    
function removeProductFromData(productId) {
    const id = parseInt(productId, 10);
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
    }
}

document.body.addEventListener("click", (e) => {
    if (e.target.closest(".delete-btn")) {
        const productRow = e.target.closest("tr");
        const productId = productRow.dataset.id;

        Swal.fire({
            title: 'Are you sure you want to delete this product?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                removeProductFromData(productId);
                renderTable(products);
                Swal.fire({
                    title: 'Deleted!',
                    text: 'The product has been deleted.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
        });
    }
});

    document.body.addEventListener("click", (e) => {
        if (e.target.closest(".Edit-btn")) {
            const productId = parseInt(e.target.closest("tr").dataset.id);
            const product = products.find(p => p.id === productId);
            Swal.fire({
                title: 'Edit Product',
                html: `
                  <div class = "Edit-products">
                  <div class = "title">
                  <label for="title">Title</label>
                    <input type="text" id="title" value="${product.title}">
                  </div>
                     <div class = "description">
                       <label for="description">Description</label>
                    <input type="text" id="description" value="${product.description}">
                     </div>
                      <div class = "price">
                       <label for="price">Price</label>
                    <input type="number" id="price" value="${product.price}">
                      </div>
                       <div class = "category">
                        <label for="category">Category</label>
                    <select id="category">
                        <option value="men's clothing" ${product.category === "men's clothing" ? 'selected' : ''}>Men's Clothing</option>
                        <option value="women's clothing" ${product.category === "women's clothing" ? 'selected' : ''}>Women's Clothing</option>
                        <option value="electronics" ${product.category === "electronics" ? 'selected' : ''}>Electronics</option>
                        <option value="jewelery" ${product.category === "jewelery" ? 'selected' : ''}>Jewelery</option>
                    </select>
                       </div>
                  </div>
                `,
                showCancelButton: true,
                confirmButtonText: 'Save Changes',
                cancelButtonText: 'Cancel',
                preConfirm: () => {
                    const newTitle = document.getElementById("title").value;
                    const newDescription = document.getElementById("description").value;
                    const newPrice = parseFloat(document.getElementById("price").value);
                    const newCategory = document.getElementById("category").value;
    
                    product.title = newTitle;
                    product.description = newDescription;
                    product.price = newPrice;
                    product.category = newCategory;

                    renderTable(products);
                }
            });
        }
    });
    document.body.addEventListener('click',(e) => {
        if (e.target.closest(".details-btn")) {
            const productId = parseInt(e.target.closest("tr").dataset.id);
            const product = products.find(p => p.id === productId);
            Swal.fire({
                html: `
                <h2 class = "h2-text">${product.title}</h2>
                <div class = "all-side">
                 <div class = "right-side">
                 <td><img src="${product.image}" alt="${product.title}" width="50"></td>
                </div>
            <div class = "right-side">
            <td></td>
             <td><p class = "p-text">${product.description2}</p></td>
             <td class = "price-text">${product.price.toFixed(2)}</td>
                </div>
                </div>  
                `,
            })
        }
    });
    document.getElementById('back-btn').addEventListener('click',() => {
        location.href = './logo.html';
    });
    
    document.getElementById('searchInput').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(query)
        );
        renderTable(filteredProducts);
    });
    
    document.getElementById('sortSelect').addEventListener('change', function() {
        const [key, order] = this.value.split('-');
        const sortedProducts = [...products].sort((a, b) =>
            (a[key] > b[key] ? 1 : -1) * (order === 'asc' ? 1 : -1)
        );
        renderTable(sortedProducts);
    });
    
    renderTable(products);
    
