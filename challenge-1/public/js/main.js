const searchInput = document.querySelector('.input-search-bar');
const searchContainer = document.querySelector('.search-bar-container');

//todo: maybe this is not the perfect solution.
document.addEventListener('click', () => {
    if (searchInput === document.activeElement) {
        searchContainer.style.boxShadow = '0px 0px 15px rgb(0, 0, 0, 0.2)';
    } else {
        searchContainer.style.boxShadow = 'none';
    }
})