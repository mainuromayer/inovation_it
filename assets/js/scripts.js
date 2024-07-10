
  




/*
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('scroll', function() {
    const wheel = document.getElementById('wheel');
    const servicesSection = document.getElementById('services');
    const servicesSectionTop = servicesSection.offsetTop;
    const servicesSectionHeight = servicesSection.offsetHeight;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= servicesSectionTop - windowHeight && scrollPosition < servicesSectionTop + servicesSectionHeight) {
        const rotationDegree = (scrollPosition - servicesSectionTop + windowHeight) / 2;
        wheel.style.transform = `rotateX(${rotationDegree}deg)`;

        const services = document.querySelectorAll('.service');
        services.forEach(service => service.classList.remove('in-view'));

        const activeIndex = Math.round((scrollPosition - servicesSectionTop + windowHeight) / windowHeight);
        if (services[activeIndex]) {
            services[activeIndex].classList.add('in-view');
        }
    }
});
*/
/*
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition < sectionTop + sectionHeight / 2) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

document.addEventListener('scroll', highlightCurrentSection);
*/
/*
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', setupSmoothScroll);

// Adding event listener for resizing the window
window.addEventListener('resize', function() {
    const wheel = document.getElementById('wheel');
    const services = document.querySelectorAll('.service');

    // Adjusting transform origin and size based on new window size
    const windowWidth = window.innerWidth;
    services.forEach(service => {
        service.style.transformOrigin = `${windowWidth / 2}px ${windowWidth / 2}px`;
    });
});

// Adding functionality for testimonials carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.classList.add('visible');
        } else {
            testimonial.classList.remove('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    showTestimonial(currentTestimonial);
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }, 5000);
});

// FAQ toggle functionality
const faqItems = document.querySelectorAll('.faq-item h3');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const faqContent = item.nextElementSibling;
        if (faqContent.style.display === 'block') {
            faqContent.style.display = 'none';
        } else {
            faqContent.style.display = 'block';
        }
    });
});

// Adding back-to-top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = 'Top';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    const bottomSection = document.querySelector('.bottom');

    if (window.scrollY > 1) {
        bottomSection.style.marginTop = '-47px';
    } else {
        bottomSection.style.marginTop = '35px';
    }
});
*/
const crossSection = document.getElementById('cross');

function addEnterAnimation() {
  introSection.classList.add('x-plus-enter-active');
  setTimeout(() => {
    introSection.classList.remove('x-plus-enter-active');
  }, 1000); // Match the duration of the animation
}

function addLeaveAnimation() {
  introSection.classList.add('x-plus-leave-active');
  setTimeout(() => {
    introSection.classList.remove('x-plus-leave-active');
  }, 1000); // Match the duration of the animation
}

// Example of triggering the enter animation
addEnterAnimation();

// Trigger the leave animation after a delay (example: 2 seconds after enter animation ends)
setTimeout(() => {
  addLeaveAnimation();
}, 3000); // Adjust the delay as needed
