// PRODUCT DATA
const products = [
  { name: "Fresh Tomatoes", price: "KES 120 / kg" },
  { name: "Organic Maize", price: "KES 90 / kg" },
  { name: "Green Vegetables", price: "KES 70 / bunch" },
  { name: "Bananas", price: "KES 60 / dozen" }
];

// DISPLAY PRODUCTS
const productList = document.getElementById("productList");
if (productList) {
  displayProducts(products);
}

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    productList.innerHTML += `
      <div class="card">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `;
  });
}
// CHECK IF USER IS REGISTERED (COOKIE)
function isUserRegistered() {
  return document.cookie.includes("userRegistered=true");
}

document.addEventListener("DOMContentLoaded", () => {
  const registerLink = document.getElementById("registerLink");
  const welcomeUser = document.getElementById("welcomeUser");

  if (isUserRegistered()) {
    if (registerLink) {
      registerLink.style.display = "none";
    }

    if (welcomeUser) {
      welcomeUser.textContent = "Welcome back 👋";
      welcomeUser.style.marginLeft = "10px";
    }
  }
});


// SEARCH FUNCTION
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(value)
    );
    displayProducts(filtered);
  });
}

// REGISTRATION FORM VALIDATION
const form = document.getElementById("registerForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.getElementById("formMessage");
    message.textContent = "Registration successful! Redirecting to home...";
    message.style.color = "green";

    // COOKIE (User identification – minimal data)
    document.cookie = "userRegistered=true; max-age=86400; path=/";

    // Redirect to homepage after 2 seconds
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  });
}
// COOKIE CONSENT BANNER
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");

  if (banner && acceptBtn) {
    if (!document.cookie.includes("cookieConsent=true")) {
      banner.style.display = "block";
    }

    acceptBtn.addEventListener("click", () => {
      document.cookie = "cookieConsent=true; max-age=2592000; path=/";
      banner.style.display = "none";
    });
  }
});
// LOGOUT / RESET COOKIES
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    document.cookie = "userRegistered=; max-age=0; path=/";
    document.cookie = "cookieConsent=; max-age=0; path=/";
    location.reload();
  });
}

// REDIRECT REGISTERED USERS AWAY FROM REGISTER PAGE
document.addEventListener("DOMContentLoaded", () => {
  const isRegisterPage = window.location.pathname.includes("register.html");

  if (isRegisterPage && document.cookie.includes("userRegistered=true")) {
    window.location.href = "index.html";
  }
});

