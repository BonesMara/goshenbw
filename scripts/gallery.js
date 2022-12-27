const gContainer = document.querySelector('.imgs');
let gItems = JSON.parse(localStorage.getItem('gallery')) || [];
gItems.forEach(gItem => {
  gContainer.insertAdjacentHTML(
    'beforeend',
    `
    <div class="inset-img ${gItem.type}">
    <img id="${gItem.id}" src="${gItem.image}" alt="${gItem.name}">
      <div class="photo-overlay">
        <h1>Click to enlarge</h1>
        <p class="gallery-pic-description">
        ${gItem.name}
        </p>
        <button onclick="" class="viewMoreBtn btn">Read More</button>
      </div>
    </div>
  `
  );
});

const current = document.querySelector('#current');
const curr = document.getElementById('curr');
let enlargeMessages = document.querySelectorAll('.photo-overlay h1');
let viewMoreBtns = document.querySelectorAll('.viewMoreBtn');
const modal = document.getElementById('modal');
const vm = document.getElementById('viewMore');
const overlay = document.querySelectorAll('.photo-overlay');
const modalContainer = document.querySelector('.modal-container');
const vmCont = document.querySelector('.viewMore-container');
const paragraph = document.querySelector('.viewMore-container p');
const pHeading = document.getElementById('pHeading');

for (let i = 0; i < enlargeMessages.length; i++) {
  enlargeMessages[i].addEventListener('click', imgClick);
}

function imgClick(e) {
  modal.style.display = 'block';
  current.src = e.target.parentNode.previousElementSibling.src;
}

function clickOutside(e) {
  if (e.target == modal || e.target == modalContainer) {
    modal.style.display = 'none';
  }
  else if (e.target == vm || e.target == vmCont) {
    vm.style.display = 'none';
  }
}

viewMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    vm.style.display = 'block';
  curr.src = btn.parentNode.previousElementSibling.src;
  let i = 0;
  while (i < gItems.length) {
    if (gItems[i].name == btn.parentNode.previousElementSibling.alt) {
      paragraph.innerHTML =
        `<p id='more-info'>
        <span id='pHeading'>${gItems[i].name}</span><br>
        ${gItems[i].description}
      </p>`;
      curr.src = gItems[i].image;
      break;
    }
    i++;
  }
  });
});

window.addEventListener('click', clickOutside);

/* const bones = document.querySelector('bones');
const bones = document.getElementById('bones');
let text = "Total width/height: " + screen.width + "*" + screen.height + "<br>" +
"Available width/height: " + screen.availWidth + "*" + screen.availHeight + "<br>" +
"Color depth: " + screen.colorDepth + "<br>" +
"Color resolution: " + screen.pixelDepth;

bones.innerText = text; */