const openToggle = document.getElementById('open-toggle');

const navigation = document.querySelector('.nav-navbar');

openToggle.addEventListener('click', () => {
  navigation.classList.toggle('open');
});
navigation.addEventListener('click', () => {
  navigation.classList.toggle('open');
});