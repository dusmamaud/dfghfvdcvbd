// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeIcon.className = isDark ? 'bx bx-sun' : 'bx bx-moon';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') === 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
});

// Search Overlay
const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput.focus(), 300);
});

searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';

    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close overlays on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchOverlay.classList.remove('active');
        menuOverlay.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
        
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
        
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Generate floating elements
const floatingElements = document.querySelector('.floating-elements');

function createFloatingElements() {
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.width = `${Math.random() * 200 + 50}px`;
        element.style.height = element.style.width;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDuration = `${Math.random() * 10 + 10}s`;
        floatingElements.appendChild(element);
    }
}

createFloatingElements();

// Color and Size Selection
const colorOptions = document.querySelectorAll('.color-option');
const sizeOptions = document.querySelectorAll('.size-option');
const heroImage = document.querySelector('.hero-image');

// Image URLs for different colors
const colorImages = {
    black: 'heroimage/black.png',
    brown: 'heroimage/brown.png',
    blue: 'heroimage/blue.png',
    green: 'heroimage/green.png'
};

// Preload images
Object.values(colorImages).forEach(url => {
    const img = new Image();
    img.src = url;
});

// Initialize with default color
if (heroImage && colorOptions.length > 0) {
    const defaultColor = colorOptions[0].dataset.color;
    heroImage.src = colorImages[defaultColor];
    colorOptions[0].classList.add('active');
}

// Color selection with touch and click support
function handleColorSelection(option) {
    const color = option.dataset.color;
    if (!color || !colorImages[color]) return;

    // Remove active class from all options
    colorOptions.forEach(opt => opt.classList.remove('active'));
    
    // Add active class to selected option
    option.classList.add('active');

    // Change image immediately for better mobile experience
    if (heroImage) {
        // Create new image element
        const newImage = new Image();
        newImage.src = colorImages[color];
        
        newImage.onload = () => {
            heroImage.src = colorImages[color];
            heroImage.style.opacity = '1';
        };

        // Set opacity to 0 while loading
        heroImage.style.opacity = '0';
    }
}

colorOptions.forEach(option => {
    // Handle both click and touch events
    ['click', 'touchstart'].forEach(eventType => {
        option.addEventListener(eventType, (e) => {
            e.preventDefault(); // Prevent default touch behavior
            handleColorSelection(option);
        }, { passive: false });
    });
});

// Size selection
if (sizeOptions.length > 0) {
    sizeOptions[0].classList.add('active');
}

sizeOptions.forEach(option => {
    ['click', 'touchstart'].forEach(eventType => {
        option.addEventListener(eventType, (e) => {
            e.preventDefault();
            sizeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        }, { passive: false });
    });
});

// Parallax Effect (disable on mobile)
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

if (!isMobile()) {
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        if (heroImage) {
            heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
        
        document.querySelectorAll('.floating-element').forEach(element => {
            const speed = Math.random() * 0.5;
            element.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
        });
    });
}

// Feature Items Hover Effect
const featureItems = document.querySelectorAll('.feature-item');

featureItems.forEach(item => {
    const applyEffect = () => {
        item.style.transform = 'translateY(-5px)';
        item.style.backgroundColor = '#ffffff';
        item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    };

    const removeEffect = () => {
        item.style.transform = 'translateY(0)';
        item.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        item.style.boxShadow = 'none';
    };

    // Add both mouse and touch events
    item.addEventListener('mouseenter', applyEffect);
    item.addEventListener('mouseleave', removeEffect);
    item.addEventListener('touchstart', applyEffect);
    item.addEventListener('touchend', removeEffect);
});

// Button Hover Effect
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    const handleButtonEffect = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;

        btn.style.setProperty('--x', `${x}px`);
        btn.style.setProperty('--y', `${y}px`);
    };

    // Add both mouse and touch events
    btn.addEventListener('mouseenter', handleButtonEffect);
    btn.addEventListener('touchstart', handleButtonEffect);
});