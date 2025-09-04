let mobile_bars = document.getElementById('mobile-bars');
let aside = document.getElementById('aside');

mobile_bars.addEventListener('click', function () {

    if (aside.style.left === '0px') {
        aside.style.left = '-250px';
    }

    else {
        aside.style.left = '0px';
    }
});


// modal 1
// modal 1
// modal 1


const openModal1 = document.getElementById('open-modal-1');
const modalContainer1 = document.getElementById('modal-container-1');
const closeModal1 = document.getElementById('close-modal-1');

// فتح
openModal1.addEventListener('click', () => {
    modalContainer1.classList.add('show');
});

// إغلاق بزر ×
closeModal1.addEventListener('click', () => {
    modalContainer1.classList.remove('show');
});

// إغلاق عند الضغط على الخلفية
modalContainer1.addEventListener('click', (e) => {
    if (e.target === modalContainer1) {
        modalContainer1.classList.remove('show');
    }
});




// modal 2
// modal 2
// modal 2


const openModal2 = document.getElementById('open-modal-2');
const modalContainer2 = document.getElementById('modal-container-2');
const closeModal2 = document.getElementById('close-modal-2');

// فتح
openModal2.addEventListener('click', () => {
    modalContainer2.classList.add('show');
});

// إغلاق بزر ×
closeModal2.addEventListener('click', () => {
    modalContainer2.classList.remove('show');
});

// إغلاق عند الضغط على الخلفية
modalContainer2.addEventListener('click', (e) => {
    if (e.target === modalContainer2) {
        modalContainer2.classList.remove('show');
    }
});




// modal 3
// modal 3
// modal 3



const openModal3 = document.getElementById('open-modal-3');
const modalContainer3 = document.getElementById('modal-container-3');
const closeModal3 = document.getElementById('close-modal-3');

// فتح
openModal3.addEventListener('click', () => {
    modalContainer3.classList.add('show');
});

// إغلاق بزر ×
closeModal3.addEventListener('click', () => {
    modalContainer3.classList.remove('show');
});

// إغلاق عند الضغط على الخلفية
modalContainer3.addEventListener('click', (e) => {
    if (e.target === modalContainer3) {
        modalContainer3.classList.remove('show');
    }
});




// modal 4 
// modal 4 
// modal 4 




const openModal4 = document.getElementById('open-modal-4');
const modalContainer4 = document.getElementById('modal-container-4');
const closeModal4 = document.getElementById('close-modal-4');

// فتح
openModal4.addEventListener('click', () => {
    modalContainer4.classList.add('show');
});

// إغلاق بزر ×
closeModal4.addEventListener('click', () => {
    modalContainer4.classList.remove('show');
});

// إغلاق عند الضغط على الخلفية
modalContainer4.addEventListener('click', (e) => {
    if (e.target === modalContainer4) {
        modalContainer4.classList.remove('show');
    }
});



// خاص بمكتبة الصور 

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
