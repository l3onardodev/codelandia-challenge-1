const searchInput = document.querySelector('.input-search-bar');
const searchContainer = document.querySelector('.search-bar-container');

const favIcon = document.querySelector('.fav-icon');

//todo: maybe this is not the perfect solution.
document.addEventListener('click', () => {
    if (searchInput === document.activeElement) {
        searchContainer.style.boxShadow = '0px 0px 15px rgb(0, 0, 0, 0.2)';
    } else {
        searchContainer.style.boxShadow = 'none';
    }
})

favIcon.addEventListener('mouseover', (element) => {
    if (favIcon.classList.contains('favorite')) return;
    favIcon.src = 'images/fav-icon-filled.png';
});

favIcon.addEventListener('mouseleave', () => {
    if (favIcon.classList.contains('favorite')) return;
    favIcon.src = 'images/fav-icon.png';
})

favIcon.addEventListener('click', () => {
    favIcon.classList.contains('favorite') ? favIcon.classList.remove('favorite') : favIcon.classList.add('favorite');
})