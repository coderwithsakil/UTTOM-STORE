// =========================
// PRODUCT DATABASE
// =========================

const products = {
    1: {
        name: "Luxury Black Watch",
        category: "Men's Watch",
        price: 1199,
        oldPrice: 1500,
        emoji: "⌚",
        description: "Premium luxury black watch with a stylish design. Perfect for office, casual use and special occasions."
    },

    2: {
        name: "Classic Silver Watch",
        category: "Men's Watch",
        price: 1499,
        oldPrice: 2000,
        emoji: "⌚",
        description: "Classic silver watch with a clean and elegant design. A perfect choice for everyday wear."
    },

    3: {
        name: "Elegant Rose Gold",
        category: "Women's Watch",
        price: 1749,
        oldPrice: 2500,
        emoji: "💎",
        description: "Beautiful rose gold watch designed for an elegant and stylish look."
    },

    4: {
        name: "Couple Classic Set",
        category: "Couple Watch",
        price: 2299,
        oldPrice: 3500,
        emoji: "💑",
        description: "A beautiful matching watch set for couples. Perfect gift for your loved one."
    },

    5: {
        name: "Smart Pro Watch",
        category: "Smart Watch",
        price: 2549,
        oldPrice: 3000,
        emoji: "⌚",
        description: "Modern smart watch designed for an active and connected lifestyle."
    },

    6: {
        name: "Premium Steel Watch",
        category: "Men's Watch",
        price: 2299,
        oldPrice: 2800,
        emoji: "⌚",
        description: "Premium steel watch with a strong and modern appearance."
    }
};


// =========================
// CART
// =========================

let cart = [];


// =========================
// CURRENT PRODUCT
// =========================

let currentProduct = null;
let currentQuantity = 1;


// =========================
// OPEN PRODUCT DETAILS
// =========================

function openProduct(id) {

    const product = products[id];

    if (!product) {
        return;
    }

    currentProduct = product;
    currentQuantity = 1;

    document.getElementById("quantity").innerText = 1;

    document.getElementById("detailEmoji").innerText =
        product.emoji;

    document.getElementById("detailCategory").innerText =
        product.category;

    document.getElementById("detailName").innerText =
        product.name;

    document.getElementById("detailPrice").innerText =
        "৳" + product.price;

    document.getElementById("detailOldPrice").innerText =
        "৳" + product.oldPrice;

    document.getElementById("detailDescription").innerText =
        product.description;

    document.getElementById("productModal").style.display =
        "flex";
}


// =========================
// CLOSE PRODUCT
// =========================

function closeProduct() {

    document.getElementById("productModal").style.display =
        "none";
}


// =========================
// CHANGE QUANTITY
// =========================

function changeQuantity(amount) {

    currentQuantity += amount;

    if (currentQuantity < 1) {
        currentQuantity = 1;
    }

    if (currentQuantity > 10) {
        currentQuantity = 10;
    }

    document.getElementById("quantity").innerText =
        currentQuantity;
}


// =========================
// ADD DETAIL PRODUCT TO CART
// =========================

function addDetailToCart() {

    if (!currentProduct) {
        return;
    }

    for (let i = 0; i < currentQuantity; i++) {

        cart.push({
            name: currentProduct.name,
            price: currentProduct.price
        });
    }

    updateCartCount();

    alert(currentProduct.name + " added to cart!");

    closeProduct();
}


// =========================
// ORDER NOW
// =========================

function orderNow() {

    if (!currentProduct) {
        return;
    }

    const total =
        currentProduct.price * currentQuantity;

    let message =
        "Hello UTTOM STORE!\n\n";

    message +=
        "I want to order:\n\n";

    message +=
        "Product: " +
        currentProduct.name +
        "\n";

    message +=
        "Quantity: " +
        currentQuantity +
        "\n";

    message +=
        "Price: ৳" +
        currentProduct.price +
        "\n";

    message +=
        "Total: ৳" +
        total +
        "\n\n";

    message +=
        "Please confirm my order.";


    // তোমার WhatsApp নম্বর এখানে বসাবে
    const phoneNumber = "8801746598285";


    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );
}


// =========================
// ADD TO CART
// =========================

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCartCount();

    alert(name + " added to cart!");
}


// =========================
// UPDATE CART COUNT
// =========================

function updateCartCount() {

    document.getElementById("cartCount").innerText =
        cart.length;
}


// =========================
// OPEN CART
// =========================

function openCart() {

    document.getElementById("cartModal").style.display =
        "flex";

    showCart();
}


// =========================
// CLOSE CART
// =========================

function closeCart() {

    document.getElementById("cartModal").style.display =
        "none";
}


// =========================
// SHOW CART
// =========================

function showCart() {

    const cartItems =
        document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    } else {

        cart.forEach((item, index) => {

            total += item.price;

            cartItems.innerHTML += `
                <div class="cart-item">

                    <div>
                        <strong>
                            ${item.name}
                        </strong>

                        <br>

                        ৳${item.price}
                    </div>

                    <button
                        onclick="removeFromCart(${index})"
                    >
                        Remove
                    </button>

                </div>
            `;
        });
    }


    document.getElementById("cartTotal").innerText =
        total;
}


// =========================
// REMOVE CART ITEM
// =========================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartCount();

    showCart();
}


// =========================
// CHECKOUT
// =========================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let message =
        "Hello WatchZone!\n\n";

    message +=
        "I want to order:\n\n";


    let total = 0;


    cart.forEach((item, index) => {

        message +=
            (index + 1) +
            ". " +
            item.name +
            " - ৳" +
            item.price +
            "\n";

        total += item.price;
    });


    message +=
        "\nTotal: ৳" +
        total;

    message +=
        "\n\nPlease confirm my order.";


    const phoneNumber =
        "8801746598285";


    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );
}


// =========================
// CATEGORY FILTER
// =========================

function filterProducts(category) {

    const productCards =
        document.querySelectorAll(".product-card");


    productCards.forEach(product => {

        const productCategory =
            product.dataset.category;


        if (category === "all") {

            product.style.display = "block";

        } else {

            if (productCategory.includes(category)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";
            }
        }
    });


    scrollToProducts();
}


// =========================
// SEARCH
// =========================

function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");

    const search =
        searchInput.value.toLowerCase();


    const productCards =
        document.querySelectorAll(".product-card");


    productCards.forEach(card => {

        const name =
            card.querySelector("h3").innerText.toLowerCase();


        if (name.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }
    });


    scrollToProducts();
}


// =========================
// SCROLL PRODUCTS
// =========================

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// =========================
// CLOSE MODALS
// =========================

window.onclick = function(event) {

    const productModal =
        document.getElementById("productModal");

    const cartModal =
        document.getElementById("cartModal");


    if (event.target === productModal) {

        closeProduct();
    }


    if (event.target === cartModal) {

        closeCart();
    }
};