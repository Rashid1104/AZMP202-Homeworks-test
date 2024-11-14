document.getElementById("addButton").addEventListener("click", addProduct);

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
        title,
        price,
        description,
        image
    };

    displayProduct(product);
    clearForm();
}

function displayProduct(product) {
    const productsContainer = document.getElementById("productsContainer");

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

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "#dc3545";
    deleteButton.style.color = "white";
    deleteButton.addEventListener("click", () => productCard.remove());

    productCard.appendChild(productImage);
    productCard.appendChild(productTitle);
    productCard.appendChild(productPrice);
    productCard.appendChild(productDescription);
    productCard.appendChild(detailsButton);
    productCard.appendChild(deleteButton);

    productsContainer.appendChild(productCard);
}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";
}

function showModal() {
    const modal = document.getElementById("errorModal");
    modal.style.display = "block";
document.getElementById("animatedCloseButton").onclick = function() {
        document.getElementById("errorModal").style.display = "none";
    };
    document.getElementById("okButton").onclick = () => {
        modal.style.display = "none";
    };


    document.querySelector(".close").onclick = () => {
        modal.style.display = "none";
    };
}
 
window.onclick = function(event) {
    const modal = document.getElementById("errorModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
   
};
document.querySelectorAll(".delete-button").forEach(button => {
    button.onclick = function() {
        document.getElementById("confirmModal").style.display = "block";
    };
});

document.getElementById("confirmDelete").onclick = function() {
    document.getElementById("confirmModal").style.display = "none";
    document.getElementById("successModal").style.display = "block";
};

document.getElementById("closeSuccessModal").onclick = function() {
    document.getElementById("successModal").style.display = "none";
};
