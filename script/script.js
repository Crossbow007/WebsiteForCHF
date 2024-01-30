
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
    setInterval(updateSlider1, 1000);
    setInterval(updateSlider2, 1800);

});

// data
const sliderData = [
    { url: './imgs/factory04.jpg', title: 'Outside building of factory ', color: 'rgb(172, 162, 147)' },
    { url: './imgs/factory03.jpg', title: 'Main entrance of factory', color: 'rgb(172, 162, 147)' },

    { url: './imgs/factory01.jpg', title: 'Inside  of factory', color: 'rgb(172, 162, 147)' },
    { url: './imgs/factory02.jpg', title: 'Meeting room', color: 'rgb(172, 162, 147)' },
    { url: './imgs/factory05.jpg', title: 'HACCP standard operation', color: 'rgb(172, 162, 147)' },
    { url: './imgs/factory06.jpg', title: 'Auto sanitizer ', color: 'rgb(172, 162, 147)' },
    { url: './imgs/machine01.png', title: 'Noodle Maker', color: 'rgb(172, 162, 147)' },


];

// Keep track of the current index
let currentIndex = 0;

// Function to update the slider
function updateSlider() {
    const img = document.querySelector('.slider-wrapper img');
    const p = document.querySelector('.slider-footer p');
    const footer = document.querySelector('.slider-footer');

    // Update with the current index
    img.src = sliderData[currentIndex].url;
    p.innerHTML = sliderData[currentIndex].title;
    footer.style.backgroundColor = sliderData[currentIndex].color;

    // Update the active indicator
    const indicators = document.querySelectorAll('.slider-indicator li');
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });

    // Increment the index or reset to 0 if reached the end
    currentIndex = (currentIndex + 1) % sliderData.length;
}



const sliderData1 = [
    { url: './imgs/bg01.jpg', title: 'Ingredients of Local garlic   ', color: 'rgb(172, 162, 147)' },
    { url: './imgs/bg04.png', title: 'Europe potato starch', color: 'rgb(172, 162, 147)' },
];

function updateSlider1() {
    const img = document.querySelector('.slider-wrapper1 img');
    const p = document.querySelector('.slider-footer1 p');
    const footer = document.querySelector('.slider-footer1');

    // Update with the current index
    img.src = sliderData1[currentIndex].url;
    p.innerHTML = sliderData1[currentIndex].title;
    footer.style.backgroundColor = sliderData1[currentIndex].color;

    // Update the active indicator
    const indicators = document.querySelectorAll('.slider-indicator1 li');
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });

    // Increment the index or reset to 0 if reached the end
    currentIndex = (currentIndex + 1) % sliderData1.length;
}




const sliderData2 = [

    {
        url: './imgs/p01_hotpot.png', title: 'Hot Pot Noodle ', color: 'rgb(172, 162, 147)'
    },
    { url: './imgs/p02_thinNoodle.png', title: 'Potato Thin Noodle', color: 'rgb(172, 162, 147)' },
    { url: './imgs/p03_coolJelly.png', title: 'Potato Jelly', color: 'rgb(172, 162, 147)' },
    { url: './imgs/p04_chiliOil.png', title: 'Chili Oil', color: 'rgb(172, 162, 147)' },


];


function updateSlider2() {
    const img = document.querySelector('.slider-wrapper2 img');
    const p = document.querySelector('.slider-footer2 p');
    const footer = document.querySelector('.slider-footer2');

    // Update with the current index
    img.src = sliderData2[currentIndex].url;
    p.innerHTML = sliderData2[currentIndex].title;
    footer.style.backgroundColor = sliderData2[currentIndex].color;

    // Update the active indicator
    const indicators = document.querySelectorAll('.slider-indicator2 li');
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });

    // Increment the index or reset to 0 if reached the end
    currentIndex = (currentIndex + 1) % sliderData2.length;
}


function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a new FormData object from the form
    const formData = new FormData(document.getElementById('contactForm'));

    // Send the form data to the server using fetch API
    fetch('add.php', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                // If the response is ok, show the success message
                alert('Submission completed');
                document.getElementById('contactForm').reset(); // Clear the form
            } else {
                // If there's an error, show an error message
                alert('Submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An unexpected error occurred');
        });
}
