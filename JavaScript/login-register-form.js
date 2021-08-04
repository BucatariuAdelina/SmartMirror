const loginForm = document.getElementById("login");
const registerForm =document.getElementById("register");
const btnForm = document.getElementById("btn");

function register(){
    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    btnForm.style.left = "110px";
}

function login(){
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    btnForm.style.left = "0";

}

 