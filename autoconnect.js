
const buttons = Array.from(document.querySelectorAll('span')).filter(el => el.textContent.trim() === 'Connect');

buttons.forEach(button => {
    const parentButton = button.closest('button'); // buat nyari elemen konek button
    if (parentButton) {
        parentButton.click();
    }
});

console.log(`${buttons.length} tombol konek telah ditekan.`);
