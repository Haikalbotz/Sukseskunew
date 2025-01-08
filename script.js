// Contoh sederhana, bisa dikembangkan lebih lanjut
const quickActions = document.querySelectorAll('.quick-actions button');

quickActions.forEach(button => {
    button.addEventListener('click', () => {
        alert(`Anda menekan tombol ${button.textContent}`);
    });
});

const productGrid = document.querySelectorAll('.product-grid button');

productGrid.forEach(button => {
    button.addEventListener('click', () => {
        alert(`Anda memilih ${button.textContent}`);
    });
});

const bottomNav = document.querySelectorAll('.bottom-nav button');

bottomNav.forEach(button => {
    button.addEventListener('click', () => {
        alert(`Anda memilih menu ${button.textContent}`);
    });
});