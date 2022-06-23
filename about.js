const openToggle = document.getElementById('open-toggle');
const logo = document.querySelector('.logo-img');
const navigation = document.querySelector('.nav-navbar');
const closeToggele = document.querySelector('.close-toggle')

openToggle.addEventListener('click', () => {
    navigation.classList.toggle('open');
});
navigation.addEventListener('click', () => {
    navigation.classList.toggle('open');
});