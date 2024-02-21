let search = document.querySelector('.search-box');
let cart = document.querySelector('.cart');
let user = document.querySelector('.user');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-icon').onclick = () => {
  toggleActiveClass(search, [cart, user, navbar]);
};

document.querySelector('#cart-icon').onclick = () => {
  toggleActiveClass(cart, [search, user, navbar]);
};

document.querySelector('#user-icon').onclick = () => {
  toggleActiveClass(user, [search, cart, navbar]);
};

document.querySelector('#menu-icon').onclick = () => {
  toggleActiveClass(navbar, [search, cart, user]);
};

window.onscroll = () => {
  search.classList.remove('active');
  cart.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
};

function toggleActiveClass(element, others) {
  element.classList.toggle('active');
  others.forEach(other => other.classList.remove('active'));
}

let header = document.querySelector('header');

window.addEventListener('scroll',  () =>{
  header.classList.toggle('shadow', window.scrollY > 0);
});

var card = document.getElementById("card");

function openRegister() {
  card.style.transform = "rotateY(-180deg)";
}

function openLogin() {
  card.style.transform = "rotateY(0deg)";
}

function login(e) {
  e.preventDefault();
  var username = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  webAuth.login({
    realm: databaseConnection,
    username: username,
    password: password
  }, function(err) {
    if (err) displayError(err);
  });
}

function signup() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  webAuth.redirect.signupAndLogin({
    connection: 'Username-Password-Authentication',
    email: email,
    password: password
  }, function(err) {
    if (err) displayError(err);
  });
}

function loginWithGoogle() {
  webAuth.authorize({
    connection: 'google-oauth2'
  }, function(err) {
    if (err) displayError(err);
  });
}

function displayError(err) {
  var errorMessage = document.getElementById('error-message');
  errorMessage.innerHTML = err.description;
  errorMessage.style.display = 'block';
}

function resetPassword(e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  if (!email) {
    alert("Please enter your email.");
    return;
  }
  webAuth.changePassword({
    connection: 'Username-Password-Authentication',
    email: email
  }, function(err, resp) {
    if (err) {
      console.log(err.message);
      alert(err.message);
    } else {
      console.log(resp);
      alert(resp);
    }
  });
}

document.getElementById('btn-login').addEventListener('click', login);
document.getElementById('btn-google').addEventListener('click', loginWithGoogle);
document.getElementById('btn-signup').addEventListener('click', signup);
document.getElementById('link-reset').addEventListener('click', resetPassword);








    