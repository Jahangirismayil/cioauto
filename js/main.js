document.addEventListener("DOMContentLoaded", function() {
    var loading = document.getElementById("loading");
    var content = document.getElementById("content");

   
    window.addEventListener("load", function() {
        loading.style.display = "none"; 
        content.style.display = "block";
    });
});

function checkForUpdates() {
   
    if ('serviceWorker' in navigator) {
       
        navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {

            console.log('Service Worker kaydedildi:', registration);
        })
        .catch(function(error) {
          
            console.error('Service Worker kaydedilirken hata oluştu:', error);
        });
    } else {
       
        document.getElementById('update-message').innerText = "";
    }
}


window.onload = function() {
    checkForUpdates();
};

document.addEventListener ('DOMContentLoaded', (event) => {
    const menuItems = document.querySelectorAll('.nav-main__link');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            window.scrollTo({ top : 0, behavior: 'smooth'});
        })
    })
})

document.addEventListener('DOMContentLoaded', (event) => {
    const scrollButton = document.getElementById('scrollButton');

    scrollButton.addEventListener('click', () => {
        const scrollAmount = window.innerHeight / 0.8;
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const scrollButton = document.getElementById('scrollButton2');

    scrollButton.addEventListener('click', () => {
        const scrollAmount = window.innerHeight / 0.5; 
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const scrollButton = document.getElementById('scrollButton3');

    scrollButton.addEventListener('click', () => {
        const scrollAmount = window.innerHeight / 0.1; 
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const scrollButton = document.getElementById('scrollButton3');

    scrollButton.addEventListener('click', () => {
        const scrollAmount = window.innerHeight / 0.1; 
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    const menu = document.getElementById('menu');
    const showMenuOffset = 200;

    window.addEventListener('scroll', () => {
        if (window.scrollY > showMenuOffset) {
            menu.classList.remove('nav-main');
        } else {
            menu.classList.add('nav-main');
        }
    });
});





document.addEventListener ('DOMContentLoaded', (event) => {
    const menuItems = document.querySelectorAll('.nav-main__link');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = item.getAttribute('Araçlarımız');
            const targetElement = document.getElementById(targetId);
            window.scrollTo({top:targetElement.offsetTop - 50,
            behavior: 'smooth' });
        });
    });
});



window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var navLinks = document.querySelectorAll('#navbar a');

    sections.forEach(function(section, index) {
        var top = section.offsetTop;
        var height = section.clientHeight;

        if (window.pageYOffset >= top && window.pageYOffset < top + height) {
            navLinks[index].classList.add('active');
        } else {
            navLinks[index].classList.remove('active');
        }
    });
});
function search() {
    var searchText = document.getElementById('searchInput').value.toLowerCase();
    var content = document.getElementById('content');
    var paragraphs = content.getElementsByTagName('p');

    for (var i = 0; i < paragraphs.length; i++) {
        var paragraphText = paragraphs[i].innerText.toLowerCase();
        if (paragraphText.includes(searchText)) {
            var regex = new RegExp(searchText, 'gi');
            paragraphs[i].innerHTML = paragraphText.replace(regex, '<span class="highlight">$&</span>');
        }
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
}

document.getElementById("scrollToTopButton").addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
});








