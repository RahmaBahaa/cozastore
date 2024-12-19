/*************************************Login Validation**************************************************/

let spanName = document.createElement("span");
let spanEmail = document.createElement("span");
let spanPassword = document.createElement("span");
let spanConfirmPassword = document.createElement("span");

function login(event) {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");

    //*********************name****************/
    if (name.value === "") {
        event.preventDefault();
        spanName.innerHTML = "<br>Name is required";
        spanName.style.color = "red";
        email.before(spanName);
        return;
    }
    else if (!isNaN(name.value)) {
        event.preventDefault();
        spanName.innerHTML = "<br>Name must be characters";
        spanName.style.color = "red";
        email.before(spanName);
        return;
    }
    else if (name.value.length < 2) {
        event.preventDefault();
        spanName.innerHTML = "<br>Name must be longer than 1 character";
        spanName.style.color = "red";
        email.before(spanName);
        return;
    }
    else {
        spanName.innerText = "";
    }

    //*********************email****************/
    if (!/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        event.preventDefault();
        spanEmail.innerHTML = "<br>Please enter valide email";
        spanEmail.style.color = "red";
        password.before(spanEmail);
        return;
    }
    else {
        spanEmail.innerText = "";
    }

    //*********************password****************/
    if (password.value === "") {
        event.preventDefault();
        spanPassword.innerHTML = "<br>Password is required";
        spanPassword.style.color = "red";
        confirmPassword.before(spanPassword);
        return;
    }
    else if (password.value.length < 8) {
        event.preventDefault();
        spanPassword.innerHTML = "<br>Password must be longer than 7 character";
        spanPassword.style.color = "red";
        confirmPassword.before(spanPassword);
        return;
    }
    else {
        spanPassword.innerText = "";
    }

    //*********************confirm password****************/

    if (confirmPassword.value === "") {
        event.preventDefault();
        spanConfirmPassword.innerHTML = "<br>Please confirm your password<br>";
        spanConfirmPassword.style.color = "red";
        confirmPassword.after(spanConfirmPassword);
        return;
    }
    else if (confirmPassword.value !== password.value) {
        event.preventDefault();
        spanConfirmPassword.innerHTML = "<br>Password is not match<br>";
        spanConfirmPassword.style.color = "red";
        confirmPassword.after(spanConfirmPassword);
        return;
    }
    else {
        spanPassword.innerText = "";
    }

    // تخزين الاسم في localStorage
    localStorage.setItem("username", name.value);
    localStorage.setItem("password", password.value);
    window.location.href = "home.html"; 
}

//to make the name of the user appear in home page
window.onload = function () {
    let username = localStorage.getItem("username");  
    let navName = document.getElementById("userName");   

    if (username) {
        navName.textContent = username;  
    } else {
        navName.textContent = "Guest";   
    }
};

/********************************* Home page *******************************************************/ 

//fetch Data from Api

var displayDiv = document.getElementsByClassName("displayDiv")[0];
fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((product) => {
            
            const productCard = document.createElement("div");
            productCard.className = "product-card";

            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.title;
            productImage.className = "product-image";

            const productTitle = document.createElement("h3");
            productTitle.innerHTML = `<a href="productDetails.html?id=${product.id}" class="title"
            onclick="showProduct(${product.id},event)">${product.title}</a>`;

            const productPrice = document.createElement("p");
            productPrice.textContent = `Price: $${product.price}`;

            
            productCard.appendChild(productImage);
            productCard.appendChild(productTitle);
            productCard.appendChild(productPrice);

            
            displayDiv.appendChild(productCard);

        });
    })

    .catch((error) => {
        console.log(error);
    });

function men(event) {
    event.preventDefault();
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            displayDiv.innerHTML = "";
            data.forEach((product) => {
                
                const productCard = document.createElement("div");
                productCard.className = "product-card";

                const productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.title;
                productImage.className = "product-image";

                const productTitle = document.createElement("h3");
                productTitle.innerHTML = `<a href="productDetails.html?id=${product.id}" class="title"
            onclick="showProduct(${product.id},event)">${product.title}</a>`;

                const productPrice = document.createElement("p");
                productPrice.textContent = `Price: $${product.price}`;

                
                productCard.appendChild(productImage);
                productCard.appendChild(productTitle);
                productCard.appendChild(productPrice);

                
                displayDiv.appendChild(productCard);

            });
        })

        .catch((error) => {
            alert("error");
        });
}

function women(event) {
    event.preventDefault();
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            displayDiv.innerHTML = "";
            data.forEach((product) => {
                
                const productCard = document.createElement("div");
                productCard.className = "product-card";

                const productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.title;
                productImage.className = "product-image";

                const productTitle = document.createElement("h3");
                productTitle.innerHTML = `<a href="productDetails.html?id=${product.id}" class="title"
                onclick="showProduct(${product.id},event)">${product.title}</a>`;

                const productPrice = document.createElement("p");
                productPrice.textContent = `Price: $${product.price}`;

                productCard.appendChild(productImage);
                productCard.appendChild(productTitle);
                productCard.appendChild(productPrice);

                
                displayDiv.appendChild(productCard);

            });
        })

        .catch((error) => {
            alert("error");
        });
}

function jewelry(event) {
    event.preventDefault();
    fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            displayDiv.innerHTML = "";
            data.forEach((product) => {
                
                const productCard = document.createElement("div");
                productCard.className = "product-card";

                const productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.title;
                productImage.className = "product-image";

                const productTitle = document.createElement("h3");
                productTitle.innerHTML = `<a href="productDetails.html?id=${product.id}" class="title"
                onclick="showProduct(${product.id},event)">${product.title}</a>`;

                const productPrice = document.createElement("p");
                productPrice.textContent = `Price: $${product.price}`;

                
                productCard.appendChild(productImage);
                productCard.appendChild(productTitle);
                productCard.appendChild(productPrice);

                
                displayDiv.appendChild(productCard);

            });
        })

        .catch((error) => {
            alert("error");
        });
}
function electronics(event) {
    event.preventDefault();
    fetch("https://fakestoreapi.com/products/category/electronics")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            displayDiv.innerHTML = "";
            data.forEach((product) => {
                
                const productCard = document.createElement("div");
                productCard.className = "product-card";

                const productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.title;
                productImage.className = "product-image";

                const productTitle = document.createElement("h3");
                productTitle.innerHTML = `<a href="productDetails.html?id=${product.id}" class="title"
            onclick="showProduct(${product.id},event)">${product.title}</a>`;

                const productPrice = document.createElement("p");
                productPrice.textContent = `Price: $${product.price}`;

               
                productCard.appendChild(productImage);
                productCard.appendChild(productTitle);
                productCard.appendChild(productPrice);

                
                displayDiv.appendChild(productCard);

            });
        })

        .catch((error) => {
            alert("error");
        });
}

/*******************************عرض المنتج ف صفحة الproductDetails ***************************************/

function showProduct(product, event) {
    event.preventDefault();
    fetch(`https://fakestoreapi.com/products/${product}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            window.location.href = `productDetails.html?id=${product}`;
            localStorage.setItem("Product", JSON.stringify(data));
        })
        .catch((error) => {
            console.log(error);
        });
    return false;
}



//////////////////////////////////////////////////////////////////////
//كميه ال products اللي عندي
// document.addEventListener('DOMContentLoaded', function() {
//     const availableQuantity = 20;
//     let currentQuantity = 1;

//     const numOfItemsElement = document.getElementById("numOfItems");
//     const increaseButton = document.getElementById("increce");
//     const decreaseButton = document.getElementById("decrise");

//     increaseButton.addEventListener('click', function() {
//         if (currentQuantity < availableQuantity) {
//             currentQuantity++;
//             numOfItemsElement.textContent = currentQuantity;
//         } else {
//             alert('Not enough stock!');        }
//     });

//     decreaseButton.addEventListener('click', function() {
//         if (currentQuantity > 1) {
//             currentQuantity--;
//             numOfItemsElement.textContent = currentQuantity;
//         }
//     });
// });

///////////////////////////////////////////////////////////////////


