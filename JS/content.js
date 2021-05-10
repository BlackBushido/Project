$(document).ready(function(){
        fetch("https://raw.githubusercontent.com/BlackBushido/Project/main/home.html").then( response => {
            return response.text();
        } ).then( dane => { 
            document.getElementById("content").innerHTML = dane; 
        });
});

document.addEventListener("DOMContentLoaded", function() {
    
    //obsługa zdarzenia kliknięcia na b1:
    var but1 = document.getElementById("home");
    but1.addEventListener('click', function(){
        fetch("https://raw.githubusercontent.com/BlackBushido/Project/main/home.html").then( response => {
            return response.text();
        } ).then( dane => { 
            document.getElementById("content").innerHTML = dane; 
        });
    },false);
    
    var but2 = document.getElementById("productss");
    but2.addEventListener('click', function(){
        fetch("https://raw.githubusercontent.com/BlackBushido/Project/main/products.html").then( response => {
            return response.text();
        } ).then( dane => { 
            document.getElementById("content").innerHTML = dane; 
        });
    },false);
    
    var but3 = document.getElementById("shop");
    but3.addEventListener('click', function(){
        fetch("https://raw.githubusercontent.com/BlackBushido/Project/main/shop.html").then( response => {
            return response.text();
        } ).then( dane => { 
            document.getElementById("content").innerHTML = dane; 
        });
    },false);
    
    var but4 = document.getElementById("contact");
    but4.addEventListener('click', function(){
        fetch("https://raw.githubusercontent.com/BlackBushido/Project/main/contact.html").then( response => {
            return response.text();
        } ).then( dane => { 
            document.getElementById("content").innerHTML = dane;
            showLocation();
        });
    },false);

   });