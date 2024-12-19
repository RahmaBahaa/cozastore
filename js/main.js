/*************************************تنسيق لل nav *******************************************/ 
var header = document.getElementById("header");
onscrollend = function () {
    if(this.document.body.hasAttribute("class")){
        header.style.backgroundColor = "black";
    }
    else{
        header.style.backgroundColor = "white";
    }
    header.style.boxShadow = "0 0 10px black";
    var top = document.getElementById("backToTop");
    top.style.visibility= "visible";
}

/**************************************** عرض الاسم ******************************************/
window.onload = function () {
    let username = localStorage.getItem("username");  
    let navName = document.getElementById("userName");   

    if (username) {
        navName.textContent = username;  
    } else {
        navName.textContent = "Guest";   
    }
};

/*********************************************** toggle **************************************/

function dark(){
    document.body.classList.toggle("dark");
    document.querySelector('.dark nav img').src = "images/icons/logo-02.png";
}