
function nextPage() {
    window.location.href = 'yes.html';
}
function nextPagee() {
    window.location.href = 'yess.html';
}
function Page7() {
    window.location.href = 'page7.html';
}
function Page8() {
    window.location.href = 'page8.html';
}
function Husband() {
    window.location.href = 'husband.html';
}
function Ofcourse() {
    window.location.href = 'ofcourse.html';
}
function Page9() {
    window.location.href = 'page9.html';
}
function Page10() {
    window.location.href = 'page10.html';
}
function Page11() {
    window.location.href = 'page11.html';
}
function Promisee() {
    window.location.href = 'promise.html';
}
function Page12() {
    window.location.href = 'page12.html';
}
function Page13() {
    window.location.href = 'page13.html';
}
function Page14() {
    window.location.href = 'page14.html';
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    noButton.classList.add('wiggle');
    noButton.addEventListener('animationend', () => {
        noButton.classList.remove('wiggle');
    }, { once: true });

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${noButton.offsetLeft + noButton.offsetWidth / 2}px`;
    heart.style.top = `${noButton.offsetTop + noButton.offsetHeight / 2}px`;
    document.body.appendChild(heart);
    
    heart.addEventListener('animationend', () => {
        heart.remove();
    }, { once: true });
}
