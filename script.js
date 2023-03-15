const Change1 = document.getElementById('text-change');
const Change2 = document.getElementById('text-change-2');

setTimeout(() => {
    Change1.innerHTML = 'not fatal';
}, 5000);

setTimeout(() => {
    Change2.innerHTML = 'that counts';
}, 5000);



