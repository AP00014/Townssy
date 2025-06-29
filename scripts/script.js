
        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Toggle hamburger animation
            if (hamburger.classList.contains('active')) {
                hamburger.querySelector('.line1').style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                hamburger.querySelector('.line2').style.opacity = '0';
                hamburger.querySelector('.line3').style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                hamburger.querySelector('.line1').style.transform = 'none';
                hamburger.querySelector('.line2').style.opacity = '1';
                hamburger.querySelector('.line3').style.transform = 'none';
            }
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.querySelector('.line1').style.transform = 'none';
                hamburger.querySelector('.line2').style.opacity = '1';
                hamburger.querySelector('.line3').style.transform = 'none';
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(element => {
                const position = element.getBoundingClientRect();
                if (position.top < window.innerHeight * 0.9) {
                    element.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
        
        // Initialize animations
        animateOnScroll();
        
        // Initialize Slick Slider for testimonials
        $(document).ready(function(){
            $('.testimonial-slider').slick({
                dots: true,
                arrows: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        });
        
        // Welcome Modal
        const welcomeModal = document.getElementById('welcomeModal');
        const closeModal = document.getElementById('closeModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        
        // Show modal on page load
        document.addEventListener('DOMContentLoaded', function() {
            welcomeModal.classList.add('active');
        });
        
        // Close modal
        closeModal.addEventListener('click', function() {
            welcomeModal.classList.remove('active');
        });
        
        closeModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            welcomeModal.classList.remove('active');
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    

        document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const youthProgramBtn = document.getElementById('youthProgramBtn');
  const youthModal = document.getElementById('youthModal');
  const closeYouthModal = document.getElementById('closeYouthModal');
  const youthForm = document.getElementById('youthApplicationForm');

  // Open modal when button is clicked
  youthProgramBtn.addEventListener('click', function(e) {
    e.preventDefault();
    youthModal.classList.add('active');
  });

  // Close modal
  closeYouthModal.addEventListener('click', function() {
    youthModal.classList.remove('active');
  });

  // Close when clicking outside form
  youthModal.addEventListener('click', function(e) {
    if (e.target === youthModal) {
      youthModal.classList.remove('active');
    }
  });

  // Form submission
  youthForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Validate at least one interest is checked
    const checkedInterests = document.querySelectorAll('input[name="interests[]"]:checked');
    if (checkedInterests.length === 0) {
      alert('Please select at least one area of interest');
      return;
    }

    // Submit to Formspree
    try {
      const response = await fetch(youthForm.action, {
        method: 'POST',
        body: new FormData(youthForm),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Thank you for your application! We will contact you soon.');
        youthModal.classList.remove('active');
        youthForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your application. Please try again later.');
    }
  });
});




 document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            let currentSlide = 0;
            let slideInterval;

            // Initialize slider
            function initSlider() {
                if (slides.length === 0) return;
                
                // Show first slide
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
                
                // Start autoplay
                startSlideInterval();
            }

            // Go to specific slide
            function goToSlide(n) {
                slides[currentSlide].classList.remove('active');
                dots[currentSlide].classList.remove('active');
                
                currentSlide = (n + slides.length) % slides.length;
                
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }

            // Next slide
            function nextSlide() {
                goToSlide(currentSlide + 1);
            }

            // Previous slide
            function prevSlide() {
                goToSlide(currentSlide - 1);
            }

            // Start autoplay
            function startSlideInterval() {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            }

            // Pause autoplay when hovering
            document.getElementById('hero-slider').addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });

            // Resume autoplay when not hovering
            document.getElementById('hero-slider').addEventListener('mouseleave', startSlideInterval);

            // Event listeners
            nextBtn.addEventListener('click', () => {
                nextSlide();
                startSlideInterval();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                startSlideInterval();
            });

            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideIndex = parseInt(this.getAttribute('data-slide'));
                    goToSlide(slideIndex);
                    startSlideInterval();
                });
            });

            // Countdown timer for Slide 2
            function updateCountdown() {
                const now = new Date();
                const endOfDay = new Date();
                endOfDay.setHours(23, 59, 59, 999);
                
                const diff = endOfDay - now;
                
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                document.getElementById('days').textContent = days.toString().padStart(2, '0');
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            }

            // Update countdown every second
            setInterval(updateCountdown, 1000);
            updateCountdown();

            // Initialize slider
            initSlider();
        });