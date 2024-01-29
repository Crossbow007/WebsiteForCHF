// document.addEventListener('DOMContentLoaded', function() {
//     var burgerMenu = document.getElementById('burger-menu');
//     var navList = document.getElementById('nav-list');

//     burgerMenu.onclick = function() {
//         // Check if nav is visible
//         var isMenuVisible = navList.offsetLeft === 0;

//         if (isMenuVisible) {
//             // Hide menu
//             navList.style.left = '-100%';
//         } else {
//             // Show menu
//             navList.style.left = '0';
//         }
//     };
// });


document.addEventListener('DOMContentLoaded', function () {
    var burgerMenu = document.getElementById('burger-menu');
    var navList = document.getElementById('nav-list');

    burgerMenu.onclick = function () {
        // Toggle the visibility of the navigation menu
        navList.style.left = navList.style.left === '0px' ? '-100%' : '0';
    };

    // Initial setup for the slider
    updateSlider();
    updateSlider1();
    updateSlider2();


    // Automatically update the slider every 5000 milliseconds (5 seconds)
    setInterval(updateSlider, 1800);
    setInterval(updateSlider1, 1800);
    setInterval(updateSlider2, 1800);

});

// 1. 初始数据
const sliderData = [
    { url: './imgs/factory04.jpg', title: 'Outside building of factory ', color: 'rgb(100, 67, 68)' },
    { url: './imgs/factory03.jpg', title: 'Main entrance of factory', color: 'rgb(43, 35, 26)' },
    { url: './imgs/factory05.jpg', title: 'HACCP standard operation', color: 'rgb(36, 31, 33)' },
    { url: './imgs/factory01.jpg', title: 'Inside  of factory', color: 'rgb(139, 98, 66)' },
    { url: './imgs/factory02.jpg', title: 'Meeting room', color: 'rgb(67, 90, 92)' },
    { url: './imgs/factory06.jpg', title: 'Auto sanitizer ', color: 'rgb(67, 90, 92)' },
    { url: './imgs/machine01.png', title: 'Noodle Maker', color: 'rgb(36, 31, 33)' },


];

// Function to update the slider
function updateSlider() {
    const randomIndex = Math.floor(Math.random() * sliderData.length);
    const img = document.querySelector('.slider-wrapper img');
    const p = document.querySelector('.slider-footer p');
    const footer = document.querySelector('.slider-footer');

    img.src = sliderData[randomIndex].url;
    p.innerHTML = sliderData[randomIndex].title;
    footer.style.backgroundColor = sliderData[randomIndex].color;

    // Update the active indicator
    const indicators = document.querySelectorAll('.slider-indicator li');
    indicators.forEach((indicator, index) => {
        if (index === randomIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

const sliderData1 = [

    { url: './imgs/bg01.jpg', title: 'Ingredients of Local garlic  ', color: 'rgb(100, 67, 68)' },
    { url: './imgs/bg04.png', title: 'Europ potato starch', color: 'rgb(43, 35, 26)' },




];

// Function to update the slider
function updateSlider1() {
    const randomIndex = Math.floor(Math.random() * sliderData1.length);
    const img = document.querySelector('.slider-wrapper1 img');
    const p = document.querySelector('.slider-footer1 p');
    const footer = document.querySelector('.slider-footer1');

    img.src = sliderData1[randomIndex].url;
    p.innerHTML = sliderData1[randomIndex].title;
    footer.style.backgroundColor = sliderData1[randomIndex].color;

    // Update the active indicator
    const indicators = document.querySelectorAll('.slider-indicator1 li');
    indicators.forEach((indicator, index) => {
        if (index === randomIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}


const sliderData2 = [

    {
        url: './imgs/p01_hotpot.png', title: 'Hot Pot Noodle ', color: 'rgb(100, 67, 68)'
    },
    { url: './imgs/p02_thinNoodle.png', title: 'Potato Thin Noodle', color: 'rgb(43, 35, 26)' },
    { url: './imgs/p03_coolJelly.png', title: 'Cool Jelly', color: 'rgb(36, 31, 33)' },
    { url: './imgs/p04_chiliOil.png', title: 'Chili Oil', color: 'rgb(36, 31, 33)' },


];

// Function to update the slider
function updateSlider2() {
    const randomIndex = Math.floor(Math.random() * sliderData2.length);
    const img = document.querySelector('.slider-wrapper2 img');
    const p = document.querySelector('.slider-footer2 p');
    const footer = document.querySelector('.slider-footer2');

    img.src = sliderData2[randomIndex].url;
    p.innerHTML = sliderData2[randomIndex].title;
    footer.style.backgroundColor = sliderData2[randomIndex].color;

    // Update the active indicator
    const indicators = document.querySelectorAll('.slider-indicator2 li');
    indicators.forEach((indicator, index) => {
        if (index === randomIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}
