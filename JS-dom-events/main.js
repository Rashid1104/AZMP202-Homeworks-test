document.body.innerHTML = `
<h1>Add Form</h1>
<form id="productForm">
    <label>Title</label>
    <input type="text" id="title" placeholder="title" required>
    
    <label>Price</label>
    <input type="number" id="price" placeholder="price" required>
    
    <label>Description</label>
    <input type="text" id="description" placeholder="description" required>
    
    <label>Image</label>
    <input type="text" id="image" placeholder="image" required>
    
    <button type="button" id="addButton">Add</button>
</form>

<h2>Products</h2>
<input type="text" id="searchInput" placeholder="Search products..." />
<div>
    <label for="sortBy">Sort by: </label>
    <select id="sortBy">
        <option value="priceAsc">Price Ascending</option>
        <option value="priceDesc">Price Descending</option>
        <option value="title">Title</option>
    </select>
</div>
<div id="productsContainer"></div>

<div id="confirmModal" class="modal">
    <div class="modal-content">
        <div class="warning-icon">&#10060;</div> 
        <p>Are you sure?</p>
        <p>You won't be able to revert this!</p>
        <button id="confirmDelete" class="modal-delete-button">Yes, delete it!</button>
        <button id="cancelDelete" class="modal-cancel-button">Cancel</button>
    </div>
</div>

<div id="detailsModal" class="modal">
    <div class="modal-content">
        <img id="modalImage" src="" alt="Product Image">
        <h3 id="modalTitle"></h3>
        <p id="modalPrice"></p>
        <p id="modalDescription"></p>
        <button id="closeDetailsModal">Close</button>
    </div>
</div>

<div id="successModal" class="modal">
    <div class="modal-content">
        <div class="success-icon">&#10004;</div> 
        <p>Deleted successfully</p>
        <button id="closeSuccessModal" class="modal-ok-button">OK</button>
    </div>
</div>

<div id="errorModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Oops... </h2>
        <p>Inputları tam doldurun</p>
        <button id="okButton">OK</button>
    </div>
</div>
`;

const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f9f9f9;
}

form {
    max-width: 500px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
}

form label {
    margin-top: 10px;
}

form input {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#addButton {
    width: 60px;
    height: 35px;
    text-align: center;
    background-color: #28a844;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#addButton:hover {
    background-color: #218838;
}

#productsContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.product-card {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    width: 300px; 
    text-align: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;
    overflow: hidden;
}

.product-card img {
    max-width: 100%; 
    height: 150px; 
    object-fit: cover; 
    border-radius: 4px;
}

.product-card h3 {
    font-size: 16px;
    margin: 10px 0;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.product-card p {
    font-size: 14px;
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* Buttons container (Details and Delete buttons on one line) */
.buttons-container {
    display: flex;
    gap: 10px;
    justify-content: center;
}

#sortAscButton, #sortDescButton {
    margin: 10px;
}

#sortAscButton, #sortDescButton {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

#sortAscButton:hover, #sortDescButton:hover {
    background-color: #0056b3;
}

h2{
    font-size: 40px;
}
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #fff;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 400px;
    max-height: 1000px;
    text-align: center;
}

/* Modal for error message */
#errorModal .modal-content {
    width: 300px;
}

.modal-ok-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.modal-ok-button:hover {
    background-color: #0056b3;
}

.success-icon {
    font-size: 24px;
    color: green;
    margin-bottom: 10px;
}

/* Close button styles for modal */
.close-button {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #ff0000;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.close-button .line {
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: #ff0000;
    transition: transform 0.3s;
    animation: pulse 2s infinite;
}

.line1 {
    transform: rotate(45deg);
}

.line2 {
    transform: rotate(-45deg);
}

.close-button:hover .line1 {
    transform: rotate(135deg);
}

.close-button:hover .line2 {
    transform: rotate(-135deg);
}

.a {
    margin-top: 20px;
    padding: 20px;
    border-top: 1px solid rgb(236, 234, 234);
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    cursor: pointer;
}

.modal {
    display: none; 
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
}

.modal-ok-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.modal-ok-button:hover {
    background-color: #0056b3;
}

/* Modal for Product Details */
#detailsModal {
    display: none;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

#detailsModal .modal-content {
    width: 400px;
    padding: 20px;
    text-align: center;
}

#detailsModal img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    border-radius: 8px;
}

#detailsModal h3 {
    margin: 10px 0;
    font-size: 18px;
}

#detailsModal p {
    font-size: 16px;
    margin: 10px 0;
}

#closeDetailsModal {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#closeDetailsModal:hover {
    background-color: #0056b3;
}`;
document.head.appendChild(style);

import { products as initialProducts } from './products.js';

let products = [...initialProducts];

document.getElementById("addButton").addEventListener("click", addProduct);
document.getElementById("searchInput").addEventListener("input", searchProducts);
document.getElementById("sortBy").addEventListener("change", handleSort);

function addProduct() {
    const title = document.getElementById("title").value.trim();
    const price = document.getElementById("price").value.trim();
    const description = document.getElementById("description").value.trim();
    const image = document.getElementById("image").value.trim();

    if (!title || !price || !description || !image) {
        showModal();
        return;
    }

    const product = {
        id: products.length + 1,
        title,
        price: parseFloat(price),
        description,
        image,
    };

    products.push(product);
    renderProducts(products);
    clearForm();
}

function renderProducts(products) {
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.title;

        const productTitle = document.createElement("h3");
        productTitle.textContent = product.title;

        const productPrice = document.createElement("p");
        productPrice.textContent = `${product.price}$`;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        detailsButton.style.backgroundColor = "#007bff";
        detailsButton.style.color = "white";
        detailsButton.addEventListener("click", () => showProductDetails(product));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.backgroundColor = "#dc3545";
        deleteButton.style.color = "white";
        deleteButton.addEventListener("click", () => {
            showConfirmModal(() => {
                products = products.filter(p => p.id !== product.id);
                renderProducts(products);
                showSuccessModal();
            });
        });

        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "buttons-container";
        buttonsContainer.appendChild(detailsButton);
        buttonsContainer.appendChild(deleteButton);

        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productPrice);
        productCard.appendChild(productDescription);
        productCard.appendChild(buttonsContainer);

        productsContainer.appendChild(productCard);
    });
}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";
}

function searchProducts() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
    );
    renderProducts(filteredProducts);
}

function handleSort() {
    const sortBy = document.getElementById("sortBy").value;

    if (sortBy === 'priceAsc') {
        products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
        products.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'title') {
        products.sort((a, b) => a.title.localeCompare(b.title));
    }

    renderProducts(products);
}

function showModal() {
    const modal = document.getElementById("errorModal");
    modal.style.display = "block";
    document.getElementById("okButton").onclick = () => modal.style.display = "none";
}

function showConfirmModal(onConfirm) {
    const confirmModal = document.getElementById("confirmModal");
    confirmModal.style.display = "block";

    document.getElementById("confirmDelete").onclick = () => {
        confirmModal.style.display = "none";
        onConfirm();
    };

    document.getElementById("cancelDelete").onclick = () => {
        confirmModal.style.display = "none";
    };
}

function showSuccessModal() {
    const successModal = document.getElementById("successModal");
    successModal.style.display = "block";

    document.getElementById("closeSuccessModal").onclick = () => {
        successModal.style.display = "none";
    };
}

function showProductDetails(product) {
    const detailsModal = document.getElementById("detailsModal");
    detailsModal.style.display = "block";

    document.getElementById("modalTitle").textContent = product.title;
    document.getElementById("modalPrice").textContent = `${product.price}$`;
    document.getElementById("modalDescription").textContent = product.description;
    document.getElementById("modalImage").src = product.image;
    document.getElementById("modalImage").alt = product.title;

    document.getElementById("closeDetailsModal").onclick = () => {
        detailsModal.style.display = "none";
    };
}

renderProducts(products);
