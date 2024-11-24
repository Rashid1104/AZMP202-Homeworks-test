window.onload = function() {

   

    const favoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts")) || [];
    const favoriteList = document.getElementById("favorite-products-list");

    if (favoriteProducts.length === 0) {
        favoriteList.innerHTML = "<li>No favorite products yet.</li>";
    } else {
        favoriteList.innerHTML = favoriteProducts.map(product => `
            <tr>
                <td><img src="${product.image}" alt="${product.title}" width="50"></td>
                 <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.category}</td>
                <td>${product.description2}</td>
                <td>$${product.price.toFixed(2)}</td>
            </tr>
        `).join('');
        }    
     localStorage.removeItem("favoriteProducts");        
}
