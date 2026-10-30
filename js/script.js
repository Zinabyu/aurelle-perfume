
// class Product {

//     constructor(id, name, price, category, description, image) {

//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.category = category;
//         this.description = description;
//         this.image = image;

//         this.isFavorite = false;
//         this.isInCart = false;
//         this.quantity = 1;
//     }
// }
// const products = [

//     new Product(
//         1,
//         "Chanel No.5",
//         180,
//         "Floral",
//         "Luxury Floral Perfume",
//         "images//Chanel essence glows on marble_.png"
//     ),

//     new Product(
//         2,
//         "Dior Sauvage",
//         165,
//         "Men",
//         "Elegant Men's Perfume",
//         "images/Christian Dior Sauvage (Eau de Toilette) Perfume For Men.jfif"
//     ),

//     new Product(
//         3,
//         "Gucci Bloom",
//         195,
//         "Women",
//         "Premium Women's Perfume",
//         "images/Product photography perfumes.jfif"
//     ),

//     new Product(
//         4,
//         "YSL Libre",
//         170,
//         "Women",
//         "Luxury Women's Perfume",
//         "images/Luxury Perfume Aesthetic 🖤 _ YSL Libre Inspired Vanity Vibes.jfif"
//     ),

//     new Product(
//         5,
//         "Versace Crystal",
//         155,
//         "Fresh",
//         "Fresh Luxury Perfume",
//         "images/Versace Crystal Noir Eau De Toilette Spray For Women EDT Perfume Perfumes 1oz_30ml 1_7oz_50ml 3oz_90.jfif"
//     ),

//     new Product(
//         6,
//         "Tom Ford Noir",
//         210,
//         "Men",
//         "Exclusive Perfume",
//         "images/noir.jfif"
//     ),

//     new Product(
//         7,
//         "Black Orchid",
//         195,
//         "Luxury",
//         "Luxury Collection",
//         "images/TOM FORD'S BLACK ORCHID PERFUME.png"
//     ),

//     new Product(
//         8,
//         "Armani Code",
//         185,
//         "Elegant",
//         "Elegant Fragrance",
//         "images/Armani Code Eau de Toilette Masculino - Giorgio Armani - 125ml.jfif"
//     ),

//     new Product(
//         9,
//         "Dior Homme",
//         175,
//         "Signature",
//         "Signature Collection",
//         "images/dior homme intense product visualization.jfif"
//     )

// ];

// function renderProducts(productList) {

//     const productsRow = document.getElementById("products-row");
//     if (!productsRow) return;

//     productsRow.innerHTML = "";

//     productList.forEach(product => {

//         const productCard = `
//         <div class="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 duration-300 overflow-hidden">
//             <div class="relative">
//                 <img src="${product.image}"
//                 class="w-full h-72 object-cover bg-[#F7F1EA] p-3">

//                 <button
//                 onclick="toggleFavorite(${product.id})"
//                 class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#6E4E4A]">
//                 <i class="fa-${product.isFavorite ? "solid" : "regular"} fa-heart ${
//                                 product.isFavorite ? "text-red-800" : "text-[#6E4E4A]"
//                             }"></i>
//                 </button>
//          </div>

//             <div class="p-5">
//                 <h3 class="text-2xl font-semibold text-[#5C3A3A] font-['Cormorant_Garamond']">
//                     ${product.name}
//                 </h3>

//                 <p class="text-[#8D7B72] mt-1">
//                     ${product.description}
//                 </p>

//                 <div class="flex justify-between items-center mt-5">
//                     <span class="text-2xl font-semibold text-[#6E4E4A]">
//                         $${product.price}
//                     </span>

//                     <button
//                     onclick="toggleCart(${product.id})"
//                     class="bg-[#6E4E4A] text-white px-5 py-2 rounded-xl hover:bg-[#523837] duration-300">
//                         ${product.isInCart ? "Remove" : "Add To Cart"}
//                     </button>
//                 </div>
//             </div>
//         </div>
//         `;
//         productsRow.insertAdjacentHTML("beforeend", productCard);
//     });
// }

// // ================= SEARCH =================

// function searchProducts() {
//     const searchType = document.getElementById("searchType").value;
//     const searchText = document
//         .getElementById("searchBox")
//         .value
//         .toLowerCase();

//     const filteredProducts = products.filter(product => {
//         if (searchType === "name") {
//             return product.name.toLowerCase().includes(searchText);
//         }
//         else if (searchType === "category") {
//             return product.category.toLowerCase().includes(searchText);
//         }
//         else if (searchType === "price") {
//             return product.price.toString().includes(searchText);
//         }
//         return true;
//     });

//     renderProducts(filteredProducts);
// }

// // ================= REDIRECT =================

// function redirectTo(url) {
//     window.location.href = url;
// }

// // ================= REGISTER =================

// function register() {
//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     if (!firstName || !lastName || !email || !password) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     const users = JSON.parse(localStorage.getItem("users")) || {};
//     users[email] = {
//         firstName,
//         lastName,
//         email,
//         password
//     };

//     localStorage.setItem("users", JSON.stringify(users));

//     alert("Account created successfully!");

//     window.location.href = "login.html";
// }

// // ================= LOGIN =================

// let loggedIn = false;

// function login() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const users = JSON.parse(localStorage.getItem("users")) || {};

//     if (users[email] && users[email].password === password) {
//         localStorage.setItem("loggedInUser", JSON.stringify(users[email]));
//         loggedIn = true;
//         localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
//         window.location.href = "index.html";
//     }
//     else {
//         alert("Invalid email or password.");
//     }
// }

// // ================= LOGOUT =================

// function logout() {
//     localStorage.removeItem("loggedInUser");
//     localStorage.removeItem("loggedIn");
//     localStorage.removeItem("cart");
//     localStorage.removeItem("favorites");

//     window.location.href = "index.html";
// }

// // ================= CART =================

// function toggleCartDropdown() {
//     document.getElementById("cartDropdownItems").classList.toggle("hidden");
// }

// function updateCartDropdown() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartDropdownItems = document.getElementById("cartDropdownItems");

//     if (!cartDropdownItems) return;

//     cartDropdownItems.innerHTML = "";

//     if (cart.length === 0) {
//         cartDropdownItems.innerHTML = "<p class='text-center text-gray-500 py-3'>Your cart is empty.</p>";
//         return;
//     }

//     cart.forEach(item => {
//         cartDropdownItems.innerHTML += `
//         <div class="flex items-center justify-between border-b py-3">
//             <div class="flex items-center gap-3">
//                 <img src="${item.image}" class="w-14 h-14 rounded-lg object-cover bg-[#F7F1EA]">
//                 <div>
//                     <h4 class="text-sm font-semibold text-[#6E4E4A]">${item.name}</h4>
//                     <p class="text-[#B08968] font-medium">$${item.price}</p>
//                     <div class="flex items-center gap-2 mt-1">
//                         <button onclick="decreaseQuantity(${item.id})" class="w-6 h-6 rounded bg-[#F8F4EF]">-</button>
//                         <span id="itemQuantity${item.id}">${item.quantity}</span>
//                         <button onclick="increaseQuantity(${item.id})" class="w-6 h-6 rounded bg-[#F8F4EF]">+</button>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//     });
// }

// function increaseQuantity(productId) {
//     const product = products.find(p => p.id === productId);
//     if (!product) return;

//     product.quantity++;

//     saveCartAndFavorites();
//     renderCartItems();
//     updateCartDropdown();
//     updateCartCount();
//     updateTotalPrice();
//     renderProducts(products);
// }

// function decreaseQuantity(productId) {
//     const product = products.find(p => p.id === productId);
//     if (!product) return;

//     if (product.quantity > 1) {
//         product.quantity--;
//     } else {
//         product.isInCart = false;
//         product.quantity = 0;
//     }

//     saveCartAndFavorites();

//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     renderCartItems();
//     updateCartDropdown();
//     updateCartCount();
//     updateTotalPrice();

//     if (cart.length === 0) {
//         const cartContainer = document.getElementById("cartContainer");
//         if (cartContainer) cartContainer.classList.add("hidden");
//     }

//     renderProducts(products);
// }

// function toggleCart(productId) {
//     const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
//     if (!isLoggedIn) {
//         redirectTo("login.html");
//         return;
//     }

//     const product = products.find(p => p.id === productId);
//     if (!product) return;

//     if (product.isInCart) {
//         product.isInCart = false;
//         product.quantity = 0;
//     }
//     else {
//         product.isInCart = true;
//         product.quantity = 1;
//         const cartContainer = document.getElementById("cartContainer");
//         if (cartContainer) cartContainer.classList.remove("hidden");
//     }

//     saveCartAndFavorites();
//     updateCartDropdown();
//     updateCartCount();

//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     if (cart.length === 0) {
//         const cartContainer = document.getElementById("cartContainer");
//         if (cartContainer) cartContainer.classList.add("hidden");
//     }

//     renderProducts(products);
// }

// // ================= FAVORITE =================

// function toggleFavorite(productId) {
//     const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));

//     if (!isLoggedIn) {
//         redirectTo("login.html");
//         return;
//     }

//     const product = products.find(p => p.id === productId);
//     if (!product) return;

//     if (product.isFavorite) {
//         removeFavorite(productId);
//     }
//     else {
//         product.isFavorite = true;
//         saveCartAndFavorites();
//     }

//     renderProducts(products);
//     if (document.getElementById("favorite-items")) {
//         renderFavoriteItems();
//     }
// }

// // ================= REMOVE FAVORITE =================

// function removeFavorite(productId) {
//     const product = products.find(p => p.id === productId);

//     if (product) {
//         product.isFavorite = false;
//         saveCartAndFavorites();
//     }

//     if (document.getElementById("favorite-items")) {
//         renderFavoriteItems();
//     }
// }

// // ================= SAVE DATA =================
// // NOTE: always persists the SAME shape everywhere, so cart/favorites
// // never end up with inconsistent objects depending on which function wrote them.

// function saveCartAndFavorites() {
//     const cart = products
//         .filter(product => product.isInCart)
//         .map(p => ({
//             id: p.id,
//             name: p.name,
//             price: p.price,
//             image: p.image,
//             quantity: p.quantity
//         }));

//     const favorites = products
//         .filter(product => product.isFavorite)
//         .map(p => ({
//             id: p.id,
//             name: p.name,
//             price: p.price,
//             image: p.image
//         }));

//     localStorage.setItem("cart", JSON.stringify(cart));
//     localStorage.setItem("favorites", JSON.stringify(favorites));
// }

// // ================= LOAD DATA =================

// function loadCartAndFavorites() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

//     products.forEach(product => {
//         const cartProduct = cart.find(item => item.id === product.id);
//         const favoriteProduct = favorites.find(item => item.id === product.id);

//         if (cartProduct) {
//             product.isInCart = true;
//             product.quantity = cartProduct.quantity;
//         }
//         else {
//             product.isInCart = false;
//             product.quantity = 0;
//         }

//         product.isFavorite = !!favoriteProduct;
//     });
// }

// // ================= CART COUNT =================

// function updateCartCount() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     const count = cart.reduce((total, item) => total + item.quantity, 0);

//     const cartCount = document.getElementById("cartCount");
//     if (cartCount) {
//         cartCount.textContent = count;
//     }
// }

// // ================= TOTAL PRICE =================

// function updateTotalPrice() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//     const totalEl = document.getElementById("totalPrice");
//     if (totalEl) {
//         totalEl.textContent = `$${total.toFixed(2)}`;
//     }
// }

// // ================= REMOVE FROM CART =================

// function removeFromCart(productId) {
//     const product = products.find(p => p.id === productId);

//     if (product) {
//         product.isInCart = false;
//         product.quantity = 0;

//         saveCartAndFavorites();
//         renderCartItems();
//         updateCartDropdown();
//         updateCartCount();
//         updateTotalPrice();
//         renderProducts(products);
//     }
// }

// // ================= RENDER CART ITEMS =================

// function renderCartItems() {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     const container = document.getElementById("cart-items");

//     if (!container) return;

//     container.innerHTML = "";

//     if (cartItems.length === 0) {
//         container.innerHTML = `<p class="text-center text-[#6E4E4A] col-span-full">Your cart is empty.</p>`;
//         updateTotalPrice();
//         return;
//     }

//     cartItems.forEach(item => {
//         container.innerHTML += `
//         <div class="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row items-center gap-5">
//             <img src="${item.image}" class="w-36 h-36 object-cover rounded-xl bg-[#F8F4EF]">

//             <div class="flex-1">
//                 <h3 class="text-2xl font-['Cormorant_Garamond'] text-[#5E3D3D]">${item.name}</h3>
//                 <p class="text-[#8D7B72] mt-2">$${item.price}</p>

//                 <div class="flex items-center gap-3 mt-5">
//                     <button onclick="decreaseQuantity(${item.id})" class="w-9 h-9 rounded-lg bg-[#F3ECE5]">-</button>
//                     <span id="itemQuantity${item.id}" class="font-semibold">${item.quantity}</span>
//                     <button onclick="increaseQuantity(${item.id})" class="w-9 h-9 rounded-lg bg-[#F3ECE5]">+</button>
//                 </div>
//             </div>

//             <button onclick="removeFromCart(${item.id})" class="px-4 py-2 rounded-lg bg-red-500 text-white">
//                 Remove
//             </button>
//         </div>`;
//     });

//     updateTotalPrice();
// }

// // ================= RENDER FAVORITE ITEMS =================

// function renderFavoriteItems() {
//     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     const container = document.getElementById("favorite-items");

//     if (!container) return;

//     container.innerHTML = "";

//     if (favorites.length === 0) {
//         container.innerHTML = `<p class="text-center col-span-full text-[#6E4E4A]">No Favorite Items.</p>`;
//         return;
//     }

//     favorites.forEach(item => {
//         container.innerHTML += `
//         <div class="bg-white rounded-2xl shadow-md overflow-hidden">
//             <img src="${item.image}" class="w-full h-60 object-cover bg-[#F8F4EF]">

//             <div class="p-5">
//                 <h3 class="text-2xl font-['Cormorant_Garamond'] text-[#5E3D3D]">${item.name}</h3>
//                 <p class="text-[#8D7B72] mt-2">$${item.price}</p>

//                 <button onclick="toggleFavorite(${item.id})" class="mt-4 text-red-500 text-2xl">
//                     <i class="fa-solid fa-heart"></i>
//                 </button>
//             </div>
//         </div>`;
//     });
// }

// // ================= PAGE LOAD =================

// document.addEventListener("DOMContentLoaded", () => {

//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));

//     const username = document.getElementById("usernameDisplay");
//     const logoutBtn = document.getElementById("logoutBtn");
//     const bothBtn = document.getElementById("bothBtn");
//     const cartContainer = document.getElementById("cartContainer");

//     if (loggedInUser && isLoggedIn) {
//         loggedIn = true;

//         if (username) {
//             username.textContent = `Hello, ${loggedInUser.firstName}`;
//         }
//         if (logoutBtn) {
//             logoutBtn.classList.remove("hidden");
//         }
//         if (bothBtn) {
//             bothBtn.classList.add("hidden");
//         }
//     } else {
//         loggedIn = false;
//     }

//     loadCartAndFavorites();

//     if (document.getElementById("products-row")) {
//         renderProducts(products);
//     }

//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     if (cart.length > 0 && cartContainer) {
//         cartContainer.classList.remove("hidden");
//     }

//     if (document.getElementById("cart-items")) {
//         renderCartItems();
//     }

//     if (document.getElementById("favorite-items")) {
//         renderFavoriteItems();
//     }

//     if (document.getElementById("cartDropdownItems")) {
//         updateCartDropdown();
//     }

//     if (document.getElementById("cartCount")) {
//         updateCartCount();
//     }
// });

class Product {

    constructor(id, name, price, category, description, image) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
        this.image = image;

        this.isFavorite = false;
        this.isInCart = false;
        this.quantity = 1;
    }
}
const products = [

    new Product(
        1,
        "Chanel No.5",
        180,
        "Floral",
        "Luxury Floral Perfume",
        "images//Chanel essence glows on marble_.png"
    ),

    new Product(
        2,
        "Dior Sauvage",
        165,
        "Men",
        "Elegant Men's Perfume",
        "images/Christian Dior Sauvage (Eau de Toilette) Perfume For Men.jfif"
    ),

    new Product(
        3,
        "Gucci Bloom",
        195,
        "Women",
        "Premium Women's Perfume",
        "images/Product photography perfumes.jfif"
    ),

    new Product(
        4,
        "YSL Libre",
        170,
        "Women",
        "Luxury Women's Perfume",
        "images/Luxury Perfume Aesthetic 🖤 _ YSL Libre Inspired Vanity Vibes.jfif"
    ),

    new Product(
        5,
        "Versace Crystal",
        155,
        "Fresh",
        "Fresh Luxury Perfume",
        "images/Versace Crystal Noir Eau De Toilette Spray For Women EDT Perfume Perfumes 1oz_30ml 1_7oz_50ml 3oz_90.jfif"
    ),

    new Product(
        6,
        "Tom Ford Noir",
        210,
        "Men",
        "Exclusive Perfume",
        "images/noir.jfif"
    ),

    new Product(
        7,
        "Black Orchid",
        195,
        "Luxury",
        "Luxury Collection",
        "images/TOM FORD'S BLACK ORCHID PERFUME.png"
    ),

    new Product(
        8,
        "Armani Code",
        185,
        "Elegant",
        "Elegant Fragrance",
        "images/Armani Code Eau de Toilette Masculino - Giorgio Armani - 125ml.jfif"
    ),

    new Product(
        9,
        "Dior Homme",
        175,
        "Signature",
        "Signature Collection",
        "images/dior homme intense product visualization.jfif"
    )

];

function renderProducts(productList) {

    const productsRow = document.getElementById("products-row");
    if (!productsRow) return;

    productsRow.innerHTML = "";

    productList.forEach(product => {

        const productCard = `
        <div class="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 duration-300 overflow-hidden">
            <div class="relative">
                <img src="${product.image}"
                class="w-full h-72 object-cover bg-[#F7F1EA] p-3">

                <button
                onclick="toggleFavorite(${product.id})"
                class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#6E4E4A]">
                <i class="fa-${product.isFavorite ? "solid" : "regular"} fa-heart ${
                                product.isFavorite ? "text-red-800" : "text-[#6E4E4A]"
                            }"></i>
                </button>
         </div>

            <div class="p-5">
                <h3 class="text-2xl font-semibold text-[#5C3A3A] font-['Cormorant_Garamond']">
                    ${product.name}
                </h3>

                <p class="text-[#8D7B72] mt-1">
                    ${product.description}
                </p>

                <div class="flex justify-between items-center mt-5">
                    <span class="text-2xl font-semibold text-[#6E4E4A]">
                        $${product.price}
                    </span>

                    <button
                    onclick="toggleCart(${product.id})"
                    class="${product.isInCart
                        ? "bg-red-700 hover:bg-red-800"
                        : "bg-[#6E4E4A] hover:bg-[#523837]"} text-white px-5 py-2 rounded-xl duration-300">
                        ${product.isInCart ? "Remove" : "Add To Cart"}
                    </button>
                </div>
            </div>
        </div>
        `;
        productsRow.insertAdjacentHTML("beforeend", productCard);
    });
}

// ================= SEARCH =================

function searchProducts() {
    const searchType = document.getElementById("searchType").value;
    const searchText = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    const filteredProducts = products.filter(product => {
        if (searchType === "name") {
            return product.name.toLowerCase().includes(searchText);
        }
        else if (searchType === "category") {
            return product.category.toLowerCase().includes(searchText);
        }
        else if (searchType === "price") {
            return product.price.toString().includes(searchText);
        }
        return true;
    });

    renderProducts(filteredProducts);
}

// ================= REDIRECT =================

function redirectTo(url) {
    window.location.href = url;
}

// ================= REGISTER =================

function register() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!firstName || !lastName || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || {};
    users[email] = {
        firstName,
        lastName,
        email,
        password
    };

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    window.location.href = "login.html";
}

// ================= LOGIN =================

let loggedIn = false;

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email] && users[email].password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(users[email]));
        loggedIn = true;
        localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
        window.location.href = "index.html";
    }
    else {
        alert("Invalid email or password.");
    }
}

// ================= LOGOUT =================

function logout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("cart");
    localStorage.removeItem("favorites");

    window.location.href = "index.html";
}

// ================= CART =================

function toggleCartDropdown() {
    document.getElementById("cartDropdownItems").classList.toggle("hidden");
}

function updateCartDropdown() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartDropdownItems = document.getElementById("cartDropdownItems");

    if (!cartDropdownItems) return;

    cartDropdownItems.innerHTML = "";

    if (cart.length === 0) {
        cartDropdownItems.innerHTML = "<p class='text-center text-gray-500 py-3'>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        cartDropdownItems.innerHTML += `
        <div class="flex items-center justify-between border-b py-3">
            <div class="flex items-center gap-3">
                <img src="${item.image}" class="w-14 h-14 rounded-lg object-cover bg-[#F7F1EA]">
                <div>
                    <h4 class="text-sm font-semibold text-[#6E4E4A]">${item.name}</h4>
                    <p class="text-[#B08968] font-medium">$${item.price}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <button onclick="decreaseQuantity(${item.id})" class="w-6 h-6 rounded bg-[#F8F4EF]">-</button>
                        <span id="itemQuantity${item.id}">${item.quantity}</span>
                        <button onclick="increaseQuantity(${item.id})" class="w-6 h-6 rounded bg-[#F8F4EF]">+</button>
                    </div>
                </div>
            </div>
        </div>`;
    });
}

function increaseQuantity(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    product.quantity++;

    saveCartAndFavorites();
    renderCartItems();
    updateCartDropdown();
    updateCartCount();
    updateTotalPrice();
    renderProducts(products);
}

function decreaseQuantity(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (product.quantity > 1) {
        product.quantity--;
    } else {
        product.isInCart = false;
        product.quantity = 0;
    }

    saveCartAndFavorites();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    renderCartItems();
    updateCartDropdown();
    updateCartCount();
    updateTotalPrice();

    if (cart.length === 0) {
        const cartContainer = document.getElementById("cartContainer");
        if (cartContainer) cartContainer.classList.add("hidden");
    }

    renderProducts(products);
}

function toggleCart(productId) {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    if (!isLoggedIn) {
        redirectTo("login.html");
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (product.isInCart) {
        product.isInCart = false;
        product.quantity = 0;
    }
    else {
        product.isInCart = true;
        product.quantity = 1;
        const cartContainer = document.getElementById("cartContainer");
        if (cartContainer) cartContainer.classList.remove("hidden");
    }

    saveCartAndFavorites();
    updateCartDropdown();
    updateCartCount();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        const cartContainer = document.getElementById("cartContainer");
        if (cartContainer) cartContainer.classList.add("hidden");
    }

    renderProducts(products);
}

// ================= FAVORITE =================

function toggleFavorite(productId) {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));

    if (!isLoggedIn) {
        redirectTo("login.html");
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (product.isFavorite) {
        removeFavorite(productId);
    }
    else {
        product.isFavorite = true;
        saveCartAndFavorites();
    }

    renderProducts(products);
    if (document.getElementById("favorite-items")) {
        renderFavoriteItems();
    }
}

// ================= REMOVE FAVORITE =================

function removeFavorite(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        product.isFavorite = false;
        saveCartAndFavorites();
    }

    if (document.getElementById("favorite-items")) {
        renderFavoriteItems();
    }
}

// ================= SAVE DATA =================
// NOTE: always persists the SAME shape everywhere, so cart/favorites
// never end up with inconsistent objects depending on which function wrote them.

function saveCartAndFavorites() {
    const cart = products
        .filter(product => product.isInCart)
        .map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            image: p.image,
            quantity: p.quantity
        }));

    const favorites = products
        .filter(product => product.isFavorite)
        .map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            image: p.image
        }));

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

// ================= LOAD DATA =================

function loadCartAndFavorites() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    products.forEach(product => {
        const cartProduct = cart.find(item => item.id === product.id);
        const favoriteProduct = favorites.find(item => item.id === product.id);

        if (cartProduct) {
            product.isInCart = true;
            product.quantity = cartProduct.quantity;
        }
        else {
            product.isInCart = false;
            product.quantity = 0;
        }

        product.isFavorite = !!favoriteProduct;
    });
}

// ================= CART COUNT =================

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const count = cart.reduce((total, item) => total + item.quantity, 0);

    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.textContent = count;
    }
}

// ================= TOTAL PRICE =================

function updateTotalPrice() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const totalEl = document.getElementById("totalPrice");
    if (totalEl) {
        totalEl.textContent = `$${total.toFixed(2)}`;
    }
}

// ================= REMOVE FROM CART =================

function removeFromCart(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        product.isInCart = false;
        product.quantity = 0;

        saveCartAndFavorites();
        renderCartItems();
        updateCartDropdown();
        updateCartCount();
        updateTotalPrice();
        renderProducts(products);
    }
}

// ================= RENDER CART ITEMS =================

function renderCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-items");

    if (!container) return;

    container.innerHTML = "";

    if (cartItems.length === 0) {
        container.innerHTML = `<p class="text-center text-[#6E4E4A] col-span-full">Your cart is empty.</p>`;
        updateTotalPrice();
        return;
    }

    cartItems.forEach(item => {
        container.innerHTML += `
        <div class="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row items-center gap-5">
            <img src="${item.image}" class="w-36 h-36 object-cover rounded-xl bg-[#F8F4EF]">

            <div class="flex-1">
                <h3 class="text-2xl font-['Cormorant_Garamond'] text-[#5E3D3D]">${item.name}</h3>
                <p class="text-[#8D7B72] mt-2">$${item.price}</p>

                <div class="flex items-center gap-3 mt-5">
                    <button onclick="decreaseQuantity(${item.id})" class="w-9 h-9 rounded-lg bg-[#F3ECE5]">-</button>
                    <span id="itemQuantity${item.id}" class="font-semibold">${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})" class="w-9 h-9 rounded-lg bg-[#F3ECE5]">+</button>
                </div>
            </div>

            <button onclick="removeFromCart(${item.id})" class="px-4 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white">
                Remove
            </button>
        </div>`;
    });

    updateTotalPrice();
}

// ================= RENDER FAVORITE ITEMS =================

function renderFavoriteItems() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const container = document.getElementById("favorite-items");

    if (!container) return;

    container.innerHTML = "";

    if (favorites.length === 0) {
        container.innerHTML = `<p class="text-center col-span-full text-[#6E4E4A]">No Favorite Items.</p>`;
        return;
    }

    favorites.forEach(item => {
        container.innerHTML += `
        <div class="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src="${item.image}" class="w-full h-60 object-cover bg-[#F8F4EF]">

            <div class="p-5">
                <h3 class="text-2xl font-['Cormorant_Garamond'] text-[#5E3D3D]">${item.name}</h3>
                <p class="text-[#8D7B72] mt-2">$${item.price}</p>

                <button onclick="toggleFavorite(${item.id})" class="mt-4 text-red-500 text-2xl">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>
        </div>`;
    });
}

// ================= PAGE LOAD =================

document.addEventListener("DOMContentLoaded", () => {

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn"));

    const username = document.getElementById("usernameDisplay");
    const logoutBtn = document.getElementById("logoutBtn");
    const bothBtn = document.getElementById("bothBtn");
    const cartContainer = document.getElementById("cartContainer");

    if (loggedInUser && isLoggedIn) {
        loggedIn = true;

        if (username) {
            username.textContent = `Hello, ${loggedInUser.firstName}`;
        }
        if (logoutBtn) {
            logoutBtn.classList.remove("hidden");
        }
        if (bothBtn) {
            bothBtn.classList.add("hidden");
        }
    } else {
        loggedIn = false;
    }

    loadCartAndFavorites();

    if (document.getElementById("products-row")) {
        renderProducts(products);
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length > 0 && cartContainer) {
        cartContainer.classList.remove("hidden");
    }

    if (document.getElementById("cart-items")) {
        renderCartItems();
    }

    if (document.getElementById("favorite-items")) {
        renderFavoriteItems();
    }

    if (document.getElementById("cartDropdownItems")) {
        updateCartDropdown();
    }

    if (document.getElementById("cartCount")) {
        updateCartCount();
    }
});
