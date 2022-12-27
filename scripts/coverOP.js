const cover = document.getElementById('cover');
const coverBtn = document.getElementById('cover-btn');
const uncoverBtn = document.getElementById('uncover-btn');
console.log(coverBtn.innerHTML);

uncoverBtn.addEventListener('click', () => {
  cover.style.display = 'none';
});
coverBtn.addEventListener('click', () => {
  cover.style.display = 'block';
});