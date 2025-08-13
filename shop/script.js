// Products data
const products = [
    {
        id: 1,
        name: "Premium Electric Kettle",
        description: "Stainless steel with auto shut-off",
        price: 105,
        minPrice: 90,
        maxPrice: 260,
        specs: ["1.7L capacity", "360° rotation", "Auto shut-off"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "electronics",
        location: "Bolgatanga",
        type: "supplier",
        badge: "New Arrival",
        images: [
            "../images/IMG-20250704-WA0074.jpg",
            "../images/IMG-20250704-WA0080.jpg",
            "../images/IMG-20250704-WA0101.jpg"
        ]
    },
    {
        id: 2,
        name: "Blenders",
        description: "Advanced home appliances",
        price: 400,
        minPrice: 250,
        maxPrice: 700,
        specs: ["1500W motor", "6-speed control", "2-year warranty"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
        badge: "Premium",
        images: [
            "../images/IMG-20250704-WA0079.jpg",
            "../images/IMG-20250704-WA0091.jpg",
        ]
    },
    {
        id: 3,
        name: "Halogen Oven Pro",
        description: "Healthy cooking with less oil",
        price: 650,
        minPrice: 600,
        maxPrice: 650,
        specs: ["12L capacity", "Digital controls", "10 accessories"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
        badge: "Best Seller",
        images: [
            "../images/IMG-20250704-WA0092.jpg",
            "https://www.sqprofessional.com/images/7183h.jpg",
            "https://powerpac.com.sg/cdn/shop/products/PPT615_01-home-kitchen-household-electrical-appliance-singapore-powerpac-cooker-multicooker-halogenoven-oven-multipurpose-grill-electriccooker-multiusage.jpg?v=1735269237&width=1445"
        ]
    },
    {
        id: 4,
        name: "Nasco Gas Cooker with Oven",
        description: "Professional kitchen equipment",
        price: 2200,
        minPrice: 2200,
        maxPrice: 2500,
        specs: ["4 burners", "Stainless steel", "Safety features"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
        badge: "Top Rated",
        images: [
            "../images/IMG-20250704-WA0093.jpg",
            "https://www.niamapa.com/wp-content/uploads/2019/09/Nasco-4-Burner-Gas-Cooker-SNIPER-GC-S2.jpg",
            "https://hubcomputersgh.com/wp-content/uploads/2023/08/14.jpg"
        ]
    },
    {
        id: 5,
        name: "Premium Trolley Suitcases",
        description: "Set of 3 durable luggage pieces",
        price: 1500,
        minPrice: 1200,
        maxPrice: 2200,
        specs: ["Hardshell", "TSA locks", "360° wheels"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
        badge: "Travel Essential",
        images: [
            "../images/IMG-20250704-WA0051.jpg",
            "../images/IMG-20250704-WA0050.jpg",
            "../images/IMG-20250704-WA0041.jpg",
            "../images/IMG-20250704-WA0044.jpg",
            "../images/IMG-20250704-WA0052.jpg",
            "../images/IMG-20250704-WA0038.jpg",
        ]
    },
    {
        id: 6,
        name: "Designer Hand Bag",
        description: "Luxury leather handbag",
        price: 280,
        minPrice: 120,
        maxPrice: 450,
        specs: ["Genuine leather", "Gold hardware", "Multiple compartments"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "fashion",
        location: "china",
        type: "manufacturer",
        badge: "Luxury",
        images: [
            "../images/IMG-20250704-WA0064.jpg",
            "../images/IMG-20250704-WA0063.jpg",
            "../images/IMG-20250704-WA0065.jpg",
            "../images/IMG-20250704-WA0061.jpg",
            "../images/IMG-20250704-WA0028.jpg",
            "../images/IMG-20250704-WA0018.jpg",
            "../images/IMG-20250704-WA0011.jpg",
            "../images/IMG-20250704-WA0024.jpg",
        ]
    },
    {
        id: 7,
        name: "CCTV Security System",
        description: "4K resolution with night vision",
        price: 420,
        minPrice: 350,
        maxPrice: 2000,
        specs: ["4 cameras", "1TB storage", "Mobile app"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "electronics",
        location: "Bolgatanga",
        type: "Supplier",
        badge: "Security",
        images: [
            "https://upischool.com/wp-content/uploads/2022/08/camera.jpg",
            "https://ipmgroupuk.com/wp-content/uploads/2024/07/4K-Cameras.webp",
            "https://visionbot.com/wp-content/uploads/2023/10/cctv-security-cameras-for-outdoor-use-installed-outside-the-house-the-alarm-system-ai-generative-photo.jpg"
        ]
    },
    {
        id: 8,
        name: "Eco-Friendly Slippers",
        description: "Comfortable and sustainable",
        price: 65,
        minPrice: 50,
        maxPrice: 90,
        specs: ["Recycled materials", "Non-slip", "Multiple sizes"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "fashion",
        location: "Bolgatanga",
        type: "Bolagatanga",
        badge: "Eco",
        images: [
            "../images/IMG-20250704-WA0005.jpg",
            "../images/IMG-20250704-WA0006.jpg",
            "../images/IMG-20250704-WA0004.jpg",
            "../images/IMG-20250704-WA0010.jpg",
            "../images/IMG-20250704-WA0053.jpg",
            "../images/IMG-20250704-WA0013.jpg",
            "../images/IMG-20250704-WA0014.jpg",
            "../images/IMG-20250704-WA0029.jpg",
            "../images/IMG-20250704-WA0031.jpg",
            "../images/IMG-20250704-WA0057.jpg",
        ]
    },
    {
        id: 9,
        name: "High Heels",
        description: "Eco-friendly products",
        price: 65,
        minPrice: 90,
        maxPrice: 200,
        specs: ["Eco-friendly materials", "Natural colors", "Model 3G38923C", "Size 36-41"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
        images: [
            "../images/IMG-20250704-WA0021.jpg",
            "../images/IMG-20250704-WA0017.jpg",
            "../images/IMG-20250704-WA0019.jpg",
            "../images/IMG-20250704-WA0020.jpg",
            "../images/IMG-20250704-WA0027.jpg",
            "../images/IMG-20250704-WA0035.jpg",
            "../images/IMG-20250704-WA0046.jpg",
            "../images/IMG-20250704-WA0058.jpg",
            "../images/IMG-20250704-WA0031.jpg"
        ]
    },
    {
        id: 10,
        name: "Laptops",
        description: "",
        price: 65,
        minPrice: 1500,
        maxPrice: 6000,
        specs: ["HP", "Dell", "MacBook", "Lenovo"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
        images: [
            "../images/IMG-20250810-WA0036.jpg",
            "../images/IMG-20250810-WA0035.jpg",
            "../images/IMG-20250810-WA0042.jpg",
        ]
    },
    {
        id: 11,
        name: "Rice cookers",
        description: "Best kitchen Products",
        price: 65,
        minPrice: 350,
        maxPrice: 650,
        specs: ["Sustainable materials", "Natural colors", "Model 3G38923C", "Size 36-41"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Nature Goods",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "manufacturer",
        images: [
            "../images/IMG-20250704-WA0075.jpg",
            "../images/IMG-20250704-WA0089.jpg",
            "../images/IMG-20250810-WA0017.jpg",
        ]
    },
    {
        id: 12,
        name: "Hand bags",
        description: "Eco-friendly products",
        price: 65,
        minPrice: 450,
        maxPrice: 600,
        specs: ["Sustainable materials", "Natural colors", "Model 3G38923C", "Size 36-41"],
        minOrder: 20,
        shipping: "Free shipping",
        supplier: "Nature Goods",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "manufacturer",
        images: [
            "../images/IMG-20250704-WA0024.jpg",
            "../images/IMG-20250810-WA0059.jpg",
            "../images/IMG-20250810-WA0061.jpg",
            "../images/IMG-20250810-WA0069.jpg",
            "../images/IMG-20250810-WA0109.jpg",
            "../images/IMG-20250810-WA0130.jpg",
            "../images/IMG-20250810-WA0091.jpg",
            "../images/IMG-20250810-WA0086.jpg",
            "../images/IMG-20250810-WA0087.jpg",
            "../images/IMG-20250810-WA0088.jpg",
        ]
    },
    {
        id: 13,
        name: "Backpack",
        description: "Eco-friendly products",
        price: 500,
        minPrice: 65,
        maxPrice: 240,
        specs: ["Sustainable materials", "Natural colors", "Model 3G38923C", "Size 36-41"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "manufacturer",
        images: [
            "../images/IMG-20250810-WA0051.jpg",
            "../images/IMG-20250810-WA0076.jpg",
            "../images/IMG-20250704-WA0133.jpg",
        ]
    },
    {
        id: 14,
        name: "local hand bags",
        description: "Eco-friendly products",
        price: 65,
        minPrice: 150,
        maxPrice: 800,
        specs: ["Sustainable materials", "Natural colors", "Model 3G38923C", "Size 36-41"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "manufacturer",
        images: [
            "../images/IMG-20250726-WA0013.jpg",
            "../images/IMG-20250726-WA0011.jpg",
            "../images/IMG-20250810-WA0140.jpg",
            "../images/IMG-20250810-WA0147.jpg",
        ]
    },
    {
        id: 15,
        name: "printers",
        description: "Eco-friendly products",
        price: 65,
        minPrice: 5000,
        maxPrice: 45000,
        specs: [],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "manufacturer",
         images: [
            "https://media.officedepot.com/image/upload/f_auto,c_limit,w_1920,q_auto/v1583520553/coremedia/resource/blob/300958/9aa74ea65f9a1f9052bc2886de3aeaa8/655795-data",
            "https://store.hp.com/app/assets/images/uploads/prod/differences-between-all-types-of-printers-31544227427803.png?imwidth=600&imdensity=1",
            "https://media.geeksforgeeks.org/wp-content/uploads/20240305113709/Printer.jpg",
            "https://cartridgesdirect.com.au/product_images/uploaded_images/different-printer-types-laser-printers.png",
        ]
    },
    {
        id: 16,
        name: "Sandwich maker",
        description: "Eco-friendly products",
        price: 250,
        minPrice: 250,
        maxPrice: 450,
        specs: [],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
        image: "../images/IMG-20250810-WA0170.jpg"
    },
    {
        id: 17,
        name: "Donot machine",
        description: "Eco-friendly products",
        price: 65,
        minPrice: 350,
        maxPrice: 600,
        specs: [ ],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
        image: "../images/IMG-20250810-WA0180.jpg"
    },
    {
        id: 18,
        name: "Local Hats",
        description: "Eco-friendly products",
        price: 120,
        minPrice: 80,
        maxPrice:150,
        specs: [],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
        images: [
            "../images/IMG-20250726-WA0009.jpg",
            "../images/IMG-20250726-WA0010.jpg",
        ]
    },
    {
        id: 19,
        name: "Local Hats",
        description: "Eco-friendly products",
        price: 65,
        minPrice: 65,
        maxPrice: 90,
        specs: ["Sustainable materials", "Natural colors", "Model 3G38923C", "Size 36-41"],
        minOrder: 20,
        shipping: "Free shipping",
        supplier: "Nature Goods",
        verified: true,
        category: "home",
        location: "turkey",
        type: "manufacturer",
        image: "../images/IMG-20250726-WA0010.jpg"
    },
    {
        id: 20,
        name: "modern rice cooker",
        description: "Eco-friendly products",
        price: 65,
        minPrice: 65,
        maxPrice: 90,
        specs: ["Sustainable materials", "Natural colors", "Model 3G38923C", "Size 36-41"],
        minOrder: 20,
        shipping: "Free shipping",
        supplier: "Nature Goods",
        verified: true,
        category: "home",
        location: "turkey",
        type: "manufacturer",
        image: "../images/IMG-20250704-WA0089.jpg"
    },
    {
        id: 21,
        name: "African Art",
        description: "Extra product to test pagination",
        price: 75,
        minPrice: 75,
        maxPrice: 100,
        specs: ["Test spec 1", "Test spec 2"],
        minOrder: 5,
        shipping: "Standard shipping",
        supplier: "Test Supplier",
        verified: true,
        category: "electronics",
        location: "ghana",
        type: "manufacturer",
        image: "../images/IMG-20250726-WA0035.jpg"
    }
];

// Service data
const services = [
    {
        id: 1,
        title: "Graphic Design",
        description: "Professional logo and brand identity design",
        price: 250,
        delivery: "3-5 days",
        rating: 4.9,
        reviews: 128,
        category: "design",
        provider: "Creative Design Studio",
        verified: true,
        badge: "Top Rated",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Website Development",
        description: "Custom responsive website for your business",
        price: 1200,
        delivery: "7-14 days",
        rating: 4.8,
        reviews: 92,
        category: "tech",
        provider: "WebTech Solutions",
        verified: true,
        image: "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Social Media Management",
        description: "Monthly content creation and engagement",
        price: 500,
        delivery: "Ongoing",
        rating: 4.7,
        reviews: 64,
        category: "marketing",
        provider: "Digital Growth Agency",
        verified: true,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Business Consulting",
        description: "Strategic planning and financial advice",
        price: 350,
        delivery: "Consultation",
        rating: 4.8,
        reviews: 46,
        category: "business",
        provider: "Finance Pros",
        verified: false,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications",
        price: 1800,
        delivery: "4-6 weeks",
        rating: 4.9,
        reviews: 78,
        category: "tech",
        provider: "AppCraft Studios",
        verified: true,
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Professional Photography",
        description: "Commercial and event photography services",
        price: 300,
        delivery: "5-7 days",
        rating: 4.8,
        reviews: 53,
        category: "creative",
        provider: "Lens Masters",
        verified: true,
        image: "https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
];

// Service categories
const serviceCategories = [
    { id: "all", name: "All Services", icon: "fas fa-star" },
    { id: "design", name: "Design & Creative", icon: "fas fa-paint-brush" },
    { id: "tech", name: "Programming & Tech", icon: "fas fa-laptop-code" },
    { id: "marketing", name: "Digital Marketing", icon: "fas fa-chart-line" },
    { id: "business", name: "Business Consulting", icon: "fas fa-briefcase" },
    { id: "creative", name: "Creative Services", icon: "fas fa-camera" }
];

// Filter options
const filterOptions = {
    categories: ["electronics", "apparel", "home", "beauty", "sports", "office"],
    locations: ["ghana", "Bolgatanga"],
    types: ["manufacturer", "trading", "verified"]
};
// DOM Elements
const productsContainer = document.getElementById('products-container');
const servicesContainer = document.getElementById('services-container');
const categoryFilter = document.getElementById('category-filter');
const locationFilter = document.getElementById('location-filter');
const typeFilter = document.getElementById('type-filter');
const navTabs = document.querySelectorAll('.nav-tab');
const productsSection = document.getElementById('products-section');
const servicesSection = document.getElementById('services-section');
const dropdownContent = document.getElementById('categories-dropdown-content');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const applyPriceBtn = document.getElementById('apply-price');
const resetPriceBtn = document.getElementById('reset-price');
const productSortSelect = document.getElementById('product-sort');
const filtersModal = document.getElementById('filters-modal');
const openFiltersBtn = document.getElementById('open-filters');
const closeFiltersBtn = document.getElementById('close-filters');
const resetAllBtn = document.querySelector('.filter-buttons .reset-btn');
const categoriesDropdownToggle = document.getElementById('categories-dropdown-toggle');
const categoriesDropdown = document.querySelector('.categories-dropdown');

// Current filters
let currentFilters = {
    category: [],
    location: [],
    type: [],
    minPrice: 0,
    maxPrice: Infinity
};

let currentServiceCategory = 'all';

// Pagination variables
const itemsPerPage = 8;
let currentPage = 1; // Always start at page 1
let totalProducts = 0;
let filteredProducts = [];

// Initialize the page
function initPage() {
    // Clear any stored page number to ensure we always start at page 1
    localStorage.removeItem('currentPage');
    
    filteredProducts = [...products];
    renderProducts(filteredProducts);
    renderServices(services);
    renderFilterOptions();
    renderServiceCategories();
    setupEventListeners();
    setupScrollToTop();
    
    // Always scroll to top on initial load
    window.scrollTo(0, 0);
}

// Render products with pagination
function renderProducts(productsArray) {
    productsContainer.innerHTML = '';
    
    if (productsArray.length === 0) {
        productsContainer.innerHTML = '<div class="no-results">No products match your filters</div>';
        setupPagination(productsArray);
        return;
    }
    
    const sortedProducts = sortProducts(productsArray, productSortSelect.value);
    filteredProducts = sortedProducts;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, sortedProducts.length);
    const paginatedProducts = sortedProducts.slice(startIndex, endIndex);
    
    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let sliderHTML = '';
        if (product.images && product.images.length > 0) {
            sliderHTML = `
                <div class="product-slider">
                    <div class="auto-slide-indicator">
                        <i class="fas fa-sync-alt"></i> Auto
                    </div>
                    <div class="slider-container">
                        ${product.images.map(img => `
                            <img src="${img}" alt="${product.name}">
                        `).join('')}
                    </div>
                    <div class="slider-arrow slider-prev">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                    <div class="slider-arrow slider-next">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <div class="slider-nav">
                        ${product.images.map((_, index) => `
                            <div class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            sliderHTML = `
                <div class="product-image">
                    <img src="${product.image || 'https://via.placeholder.com/300x200?text=No+Image'}" alt="${product.name}">
                </div>
            `;
        }
        
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            ${sliderHTML}
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-description">${product.description}</div>
                <ul class="product-specs">
                    ${product.specs.map(spec => `<li><i class="fas fa-check-circle"></i> ${spec}</li>`).join('')}
                </ul>
                <div class="product-price">₵${product.minPrice} - ₵${product.maxPrice}</div>
                <div class="product-meta">
                    <span><i class="fas fa-box"></i> Min. Order: ${product.minOrder} pieces</span>
                    <span><i class="fas fa-shipping-fast"></i> ${product.shipping}</span>
                </div>
                <div class="product-supplier">
                    <div class="supplier-logo">${product.supplier.substring(0,2)}</div>
                    <div class="supplier-name">${product.supplier} ${product.verified ? '<i class="fas fa-check-circle verified-badge"></i>' : ''}</div>
                </div>
                <a href="https://wa.me/233257785088?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}" class="contact-btn">
                    <i class="fab fa-whatsapp"></i> Contact Supplier
                </a>
            </div>
        `;
        productsContainer.appendChild(productCard);
        
        if (product.images && product.images.length > 1) {
            setupProductSlider(productCard);
        }
    });
    
    setupPagination(sortedProducts);
}

// Setup product slider
function setupProductSlider(productCard) {
    const slider = productCard.querySelector('.slider-container');
    const prevBtn = productCard.querySelector('.slider-prev');
    const nextBtn = productCard.querySelector('.slider-next');
    const dots = productCard.querySelectorAll('.slider-dot');
    const sliderContainer = productCard.querySelector('.product-slider');
    let currentSlide = 0;
    let autoSlideInterval;
    
    function goToSlide(slideIndex) {
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
        currentSlide = slideIndex;
    }
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % productCard.querySelectorAll('.slider-container img').length;
            goToSlide(nextSlide);
        }, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    startAutoSlide();
    
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
    
    prevBtn.addEventListener('click', () => {
        const prevSlide = currentSlide === 0 ? productCard.querySelectorAll('.slider-container img').length - 1 : currentSlide - 1;
        goToSlide(prevSlide);
        stopAutoSlide();
        startAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        const nextSlide = currentSlide === productCard.querySelectorAll('.slider-container img').length - 1 ? 0 : currentSlide + 1;
        goToSlide(nextSlide);
        stopAutoSlide();
        startAutoSlide();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });
}

// Setup pagination with scroll-to-top
function setupPagination(productsArray) {
    totalProducts = productsArray.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const pageNumbersContainer = document.getElementById('page-numbers');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    pageNumbersContainer.innerHTML = '';
    
    const maxVisiblePages = 5;
    let startPage, endPage;
    
    if (totalPages <= maxVisiblePages) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
            startPage = 1;
            endPage = maxVisiblePages;
        } else if (currentPage + Math.floor(maxVisiblePages / 2) >= totalPages) {
            startPage = totalPages - maxVisiblePages + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - Math.floor(maxVisiblePages / 2);
            endPage = currentPage + Math.floor(maxVisiblePages / 2);
        }
    }
    
    if (startPage > 1) {
        addPageNumber(1);
        if (startPage > 2) {
            addEllipsis();
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        addPageNumber(i);
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            addEllipsis();
        }
        addPageNumber(totalPages);
    }
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            changePage(currentPage - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            changePage(currentPage + 1);
        }
    });
    
    function addPageNumber(pageNumber) {
        const pageNum = document.createElement('div');
        pageNum.classList.add('page-number');
        if (pageNumber === currentPage) pageNum.classList.add('active');
        pageNum.textContent = pageNumber;
        pageNum.addEventListener('click', () => changePage(pageNumber));
        pageNumbersContainer.appendChild(pageNum);
    }
    
    function addEllipsis() {
        const ellipsis = document.createElement('div');
        ellipsis.className = 'page-number ellipsis';
        ellipsis.textContent = '...';
        pageNumbersContainer.appendChild(ellipsis);
    }
}

// Change page with scroll-to-top
function changePage(newPage) {
    currentPage = newPage;
    renderProducts(filteredProducts);
    scrollToTop();
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Setup scroll to top button
function setupScrollToTop() {
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.id = 'scrollToTop';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', scrollToTop);
}

// Render services
function renderServices(servicesArray) {
    servicesContainer.innerHTML = '';
    
    if (servicesArray.length === 0) {
        servicesContainer.innerHTML = '<div class="no-results">No services match your filters</div>';
        return;
    }
    
    servicesArray.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            ${service.badge ? `<div class="service-badge">${service.badge}</div>` : ''}
            <div class="service-image">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="service-info">
                <h3 class="service-title">${service.title}</h3>
                <div class="service-description">${service.description}</div>
                <div class="service-rating">
                    <i class="fas fa-star"></i> ${service.rating} (${service.reviews} reviews)
                </div>
                <div class="service-delivery">
                    <span><i class="fas fa-clock"></i> Delivery: ${service.delivery}</span>
                    <span class="service-price">₵${service.price}</span>
                </div>
                <div class="service-provider">
                    <div class="provider-logo">${service.provider.substring(0,2)}</div>
                    <div class="provider-name">${service.provider} ${service.verified ? '<i class="fas fa-check-circle verified-badge"></i>' : ''}</div>
                </div>
                <a href="https://wa.me/233257785088?text=I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service" class="contact-btn">
                    <i class="fab fa-whatsapp"></i> Contact Provider
                </a>
            </div>
        `;
        servicesContainer.appendChild(serviceCard);
    });
}

// Render filter options
function renderFilterOptions() {
    filterOptions.categories.forEach(category => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="checkbox" name="category" value="${category}"> 
            ${category.charAt(0).toUpperCase() + category.slice(1)}
        `;
        categoryFilter.appendChild(label);
    });
    
    filterOptions.locations.forEach(location => {
        const label = document.createElement('label');
        const displayName = location.replace('-', ' ').split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
            
        label.innerHTML = `
            <input type="checkbox" name="location" value="${location}"> ${displayName}
        `;
        locationFilter.appendChild(label);
    });
    
    filterOptions.types.forEach(type => {
        const label = document.createElement('label');
        const displayName = type.charAt(0).toUpperCase() + type.slice(1);
        label.innerHTML = `
            <input type="checkbox" name="type" value="${type}"> ${displayName}
        `;
        typeFilter.appendChild(label);
    });
}

// Render service categories
function renderServiceCategories() {
    serviceCategories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        if (category.id === currentServiceCategory) categoryCard.classList.add('active');
        categoryCard.dataset.category = category.id;
        categoryCard.innerHTML = `
            <div class="category-icon"><i class="${category.icon}"></i></div>
            <div class="category-name">${category.name}</div>
        `;
        dropdownContent.appendChild(categoryCard);
    });
}

// Apply filters
function applyFilters() {
    currentPage = 1; // Reset to page 1 when filters change
    
    filteredProducts = products.filter(product => {
        if (currentFilters.category.length > 0 && !currentFilters.category.includes(product.category)) {
            return false;
        }
        
        if (currentFilters.location.length > 0 && !currentFilters.location.includes(product.location)) {
            return false;
        }
        
        if (currentFilters.type.length > 0) {
            if (currentFilters.type.includes('verified') && !product.verified) {
                return false;
            }
            if (currentFilters.type.includes('manufacturer') && product.type !== 'manufacturer') {
                return false;
            }
            if (currentFilters.type.includes('trading') && product.type !== 'trading') {
                return false;
            }
        }
        
        if (product.minPrice < currentFilters.minPrice || product.minPrice > currentFilters.maxPrice) {
            return false;
        }
        
        return true;
    });
    
    renderProducts(filteredProducts);
    scrollToTop(); // Scroll to top when filters are applied
}

// Apply service filters
function applyServiceFilters() {
    let filteredServices = services;
    
    if (currentServiceCategory !== 'all') {
        filteredServices = filteredServices.filter(service => service.category === currentServiceCategory);
    }
    
    renderServices(filteredServices);
}

// Sort products
function sortProducts(productsArray, sortBy) {
    return [...productsArray].sort((a, b) => {
        switch(sortBy) {
            case 'price-low': return a.minPrice - b.minPrice;
            case 'price-high': return b.minPrice - a.minPrice;
            case 'newest': return b.id - a.id;
            default: return a.id - b.id;
        }
    });
}

// Reset all filters
function resetAllFilters() {
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    minPriceInput.value = '';
    maxPriceInput.value = '';
    
    currentFilters = {
        category: [],
        location: [],
        type: [],
        minPrice: 0,
        maxPrice: Infinity
    };
    
    currentServiceCategory = 'all';
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
        if (card.dataset.category === 'all') {
            card.classList.add('active');
        }
    });
    
    currentPage = 1;
    applyFilters();
    applyServiceFilters();
}

// Setup event listeners
function setupEventListeners() {
    openFiltersBtn.addEventListener('click', () => {
        filtersModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeFiltersBtn.addEventListener('click', () => {
        filtersModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    filtersModal.addEventListener('click', (e) => {
        if (e.target === filtersModal) {
            filtersModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            if (tab.dataset.tab === 'products') {
                productsSection.classList.add('active-section');
                servicesSection.classList.remove('active-section');
            } else {
                servicesSection.classList.add('active-section');
                productsSection.classList.remove('active-section');
            }
            
            scrollToTop(); // Scroll to top when switching tabs
        });
    });
    
    document.querySelectorAll('#category-filter input').forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) {
                currentFilters.category.push(input.value);
            } else {
                currentFilters.category = currentFilters.category.filter(cat => cat !== input.value);
            }
            applyFilters();
        });
    });
    
    document.querySelectorAll('#location-filter input').forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) {
                currentFilters.location.push(input.value);
            } else {
                currentFilters.location = currentFilters.location.filter(loc => loc !== input.value);
            }
            applyFilters();
        });
    });
    
    document.querySelectorAll('#type-filter input').forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) {
                currentFilters.type.push(input.value);
            } else {
                currentFilters.type = currentFilters.type.filter(type => type !== input.value);
            }
            applyFilters();
        });
    });
    
    applyPriceBtn.addEventListener('click', () => {
        currentFilters.minPrice = parseFloat(minPriceInput.value) || 0;
        currentFilters.maxPrice = parseFloat(maxPriceInput.value) || Infinity;
        applyFilters();
    });
    
    resetPriceBtn.addEventListener('click', () => {
        minPriceInput.value = '';
        maxPriceInput.value = '';
        currentFilters.minPrice = 0;
        currentFilters.maxPrice = Infinity;
        applyFilters();
    });
    
    productSortSelect.addEventListener('change', () => {
        currentPage = 1; // Reset to page 1 when sorting changes
        renderProducts(filteredProducts);
        scrollToTop(); // Scroll to top when sorting changes
    });
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentServiceCategory = card.dataset.category;
            applyServiceFilters();
            categoriesDropdown.classList.remove('active');
            scrollToTop(); // Scroll to top when category changes
        });
    });
    
    categoriesDropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        categoriesDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!categoriesDropdown.contains(e.target)) {
            categoriesDropdown.classList.remove('active');
        }
    });
    
    resetAllBtn.addEventListener('click', resetAllFilters);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initPage();
    
    // Ensure we scroll to top on page refresh
    window.addEventListener('load', () => {
        if (performance.navigation.type === 1) { // Type 1 means page was refreshed
            scrollToTop();
        }
    });
});