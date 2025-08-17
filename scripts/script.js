
// Enhanced Mobile Menu Functionality
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileClose = document.getElementById('mobileClose');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        const body = document.body;
        
        // Set item index for staggered animation
        mobileNavItems.forEach((item, index) => {
            item.style.setProperty('--item-index', index);
        });
        
        // Function to open mobile menu
        function openMobileMenu() {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            mobileMenu.setAttribute('aria-hidden', 'false');
            body.style.overflow = 'hidden'; // Prevent scrolling
            
            // Animate hamburger
            hamburger.querySelector('.line1').style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            hamburger.querySelector('.line2').style.opacity = '0';
            hamburger.querySelector('.line3').style.transform = 'rotate(45deg) translate(-5px, -6px)';
            
            // Focus trap for accessibility
            setTimeout(() => {
                mobileClose.focus();
            }, 100);
        }
        
        // Function to close mobile menu
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
            body.style.overflow = ''; // Restore scrolling
            
            // Reset hamburger
            hamburger.querySelector('.line1').style.transform = 'none';
            hamburger.querySelector('.line2').style.opacity = '1';
            hamburger.querySelector('.line3').style.transform = 'none';
            
            // Return focus to hamburger for accessibility
            setTimeout(() => {
                hamburger.focus();
            }, 100);
        }
        
        // Toggle mobile menu
        hamburger.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        // Close menu with close button
        mobileClose.addEventListener('click', closeMobileMenu);
        
        // Close menu when clicking overlay
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        
        // Close menu when clicking a link
        document.querySelectorAll('.mobile-nav-item a').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
        
        // Close menu with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Add hover effect to mobile nav items
        mobileNavItems.forEach(item => {
            const icon = item.querySelector('i');
            
            item.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.2)';
            });
            
            item.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1)';
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



  $(document).ready(function(){
            $('.product-carousel').slick({
                dots: true,
                infinite: true,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: true,
                fade: true,
                cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: true,
                            swipe: true,
                            swipeToSlide: true
                        }
                    }
                ]
            });
            
            // Add hover effects to cards
            $('.link-card').hover(function() {
                $(this).addClass('hover');
            }, function() {
                $(this).removeClass('hover');
            });
            
            // Make entire product card clickable
            $('.product-link').click(function(e) {
                if($(e.target).is('button, a')) {
                    return true;
                }
                window.location.href = $(this).attr('href');
                return false;
            });
            
            // Add subtle tilt effect to product cards on mousemove
            $('.product-card').mousemove(function(e) {
                const $card = $(this);
                const cardWidth = $card.width();
                const cardHeight = $card.height();
                const centerX = $card.offset().left + cardWidth/2;
                const centerY = $card.offset().top + cardHeight/2;
                const mouseX = e.pageX - centerX;
                const mouseY = e.pageY - centerY;
                const rotateX = (mouseY / cardHeight * -10).toFixed(2);
                const rotateY = (mouseX / cardWidth * 10).toFixed(2);
                
                $card.css({
                    'transform': `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                });
            });
            
            $('.product-card').mouseleave(function() {
                $(this).css({
                    'transform': 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                });
            });
        });



         document.addEventListener('DOMContentLoaded', function() {
            // Animation on scroll
            const animateElements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animateElements.forEach(el => {
                observer.observe(el);
            });
            
            // Form handling
            const contactForm = document.getElementById('contactForm');
            const submitBtn = document.getElementById('submit-btn');
            const formStatus = document.getElementById('form-status');
            
            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                // Reset previous errors
                clearErrors();
                
                // Validate inputs
                const isValid = validateForm();
                
                if (isValid) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Sending...';
                    
                    try {
                        // Simulate Formspree submission - in a real implementation, 
                        // you would use your actual Formspree endpoint
                        await simulateFormspreeSubmission();
                        
                        showSuccess('Message sent successfully! We will get back to you soon.');
                        contactForm.reset();
                    } catch (error) {
                        showError('There was a problem submitting your form. Please try again later.');
                        console.error('Form submission error:', error);
                    } finally {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Send Message';
                    }
                }
            });
            
            // Form validation functions
            function validateForm() {
                let isValid = true;
                
                // Validate Name
                const name = document.getElementById('name').value.trim();
                if (name.length < 2) {
                    showError('name-error', 'Please enter your full name (at least 2 characters)');
                    isValid = false;
                }
                
                // Validate Email
                const email = document.getElementById('email').value.trim();
                if (!isValidEmail(email)) {
                    showError('email-error', 'Please enter a valid email address');
                    isValid = false;
                }
                
                // Validate Subject
                const subject = document.getElementById('subject').value;
                if (!subject) {
                    showError('subject-error', 'Please select a subject');
                    isValid = false;
                }
                
                // Validate Message
                const message = document.getElementById('message').value.trim();
                if (message.length < 10) {
                    showError('message-error', 'Please enter a message (at least 10 characters)');
                    isValid = false;
                }
                
                return isValid;
            }
            
            function isValidEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }
            
            function showError(id, message) {
                const errorElement = document.getElementById(id);
                errorElement.textContent = message;
                errorElement.style.display = 'block';
                errorElement.previousElementSibling.classList.add('error');
            }
            
            function clearErrors() {
                const errorElements = document.querySelectorAll('.error-message');
                errorElements.forEach(el => {
                    el.textContent = '';
                    el.style.display = 'none';
                });
                
                const formControls = document.querySelectorAll('.form-control');
                formControls.forEach(control => {
                    control.classList.remove('error');
                });
                
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }
            
            function showSuccess(message) {
                formStatus.textContent = message;
                formStatus.className = 'form-status success';
            }
            
            function showError(message) {
                formStatus.textContent = message;
                formStatus.className = 'form-status error';
            }
            
            // Simulate Formspree submission (replace with actual Formspree fetch in production)
            function simulateFormspreeSubmission() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        // Simulate 90% success rate
                        if (Math.random() > 0.1) {
                            resolve();
                        } else {
                            reject(new Error('Network error'));
                        }
                    }, 1500);
                });
            }
            
            // Real Formspree submission (uncomment and replace with your Formspree ID)
          
            async function submitToFormspree() {
                const formData = new FormData();
                formData.append('name', document.getElementById('name').value);
                formData.append('email', document.getElementById('email').value);
                formData.append('subject', document.getElementById('subject').value);
                formData.append('message', document.getElementById('message').value);
                
                try {
                    const response = await fetch('https://formspree.io/f/xqalnvlq', {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        return;
                    } else {
                        const errorData = await response.json();
                        throw new Error(errorData.error || 'Form submission failed');
                    }
                } catch (error) {
                    throw error;
                }
            }
          
        });