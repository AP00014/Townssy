// Sample product data using the images you provided
const products = [
    {
        id: 1,
        name: "kettle",
        description: "Premium collection",
        price: 105,
        minPrice: 90,
        maxPrice: 105,
        specs: ["High-quality materials"],
        minOrder: 1,
        shipping: " delivery",
        supplier: "Townssy",
        verified: true,
        category: "Electical",
        location: "Bolgatanga",
        type: "supplier",
        badge: "New Arrival",
        image: "../images/IMG-20250704-WA0074.jpg"
    },
    {
        id: 2,
        name: "Silver Crest Electronics",
        description: "Advanced home appliances",
        price: 350,
        minPrice: 350,
        maxPrice: 450,
        specs: ["Energy efficient", "1 year warranty", "Modern design", "Easy to use"],
        minOrder: 3,
        shipping: "Standard shipping",
        supplier: "Silver Crest Ltd",
        verified: true,
        category: "electronics",
        location: "china",
        type: "manufacturer",
        badge: "Premium",
        image: "../images/IMG-20250704-WA0079.jpg"
    },
    {
        id: 3,
        name: "Fantasy Decor",
        description: "Home decoration items",
        price: 45,
        minPrice: 45,
        maxPrice: 75,
        specs: ["Unique designs", "High-quality materials", "Various styles", "Affordable prices"],
        minOrder: 10,
        shipping: "Free shipping",
        supplier: "Fantasy Home",
        verified: false,
        category: "home",
        location: "turkey",
        type: "trading",
        image: "../images/IMG-20250704-WA0092.jpg"
    },
    {
        id: 4,
        name: "Mascq Sports",
        description: "Olympic-grade equipment",
        price: 220,
        minPrice: 220,
        maxPrice: 300,
        specs: ["Professional quality", "Durable materials", "Multiple sizes", "Official supplier"],
        minOrder: 2,
        shipping: "Express shipping",
        supplier: "Mascq Sports",
        verified: true,
        category: "sports",
        location: "south-africa",
        type: "manufacturer",
        badge: "Top Rated",
        image: "../images/IMG-20250704-WA0093.jpg"
    },
    {
        id: 5,
        name: "Brisons Audio",
        description: "Premium sound systems",
        price: 180,
        minPrice: 180,
        maxPrice: 250,
        specs: ["High-fidelity sound", "Bluetooth connectivity", "Sleek design", "Long battery life"],
        minOrder: 5,
        shipping: "Free shipping",
        supplier: "Brisons Tech",
        verified: true,
        category: "electronics",
        location: "nigeria",
        type: "manufacturer",
        image: "../images/IMG-20250704-WA0051.jpg"
    },
    {
        id: 6,
        name: "Quangwei Paper",
        description: "Eco-friendly packaging",
        price: 28,
        minPrice: 28,
        maxPrice: 42,
        specs: ["80g/m² density", "100% eco-friendly", "Brown kraft paper", "Various sizes"],
        minOrder: 50,
        shipping: "Standard shipping",
        supplier: "Quangwei Packaging",
        verified: false,
        category: "office",
        location: "china",
        type: "manufacturer",
        image: "../images/IMG-20250704-WA0064.jpg"
    },
    {
        id: 7,
        name: "CCTV Electronic",
        description: "1500W power system",
        price: 420,
        minPrice: 420,
        maxPrice: 550,
        specs: ["High wattage output", "Stable performance", "Safety features", "Model CIC-0233"],
        minOrder: 1,
        shipping: "Express shipping",
        supplier: "CCTV Electronics",
        verified: true,
        category: "electronics",
        location: "ghana",
        type: "manufacturer",
        badge: "Best Seller",
        image: "../images/IMG-20250704-WA0080.jpg"
    },
    {
        id: 8,
        name: "Nature Collection",
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
        image: "../images/IMG-20250704-WA0021.jpg"
    },
    {
        id: 9,
        name: "slipers",
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
        image: "../images/IMG-20250704-WA0005.jpg"
    },
    {
        id: 10,
        name: "slipers",
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
        image: "../images/IMG-20250704-WA0004.jpg"
    },
    {
        id: 11,
        name: "women handbag",
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
        image: "../images/IMG-20250704-WA0003.jpg"
    },
    {
        id: 12,
        name: "Hand bag",
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
        image: "../images/IMG-20250704-WA0024.jpg"
    },
    {
        id: 13,
        name: "Hand bag",
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
        image: "../images/IMG-20250704-WA0028.jpg"
    },
    {
        id: 14,
        name: "local hand bag",
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
        image: "../images/IMG-20250726-WA0013.jpg"
    },
    {
        id: 15,
        name: "Local Hand bag",
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
        image: "../images/IMG-20250726-WA0011.jpg"
    },
    {
        id: 16,
        name: "local Hand bag",
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
        image: "../images/IMG-20250726-WA0012.jpg"
    },
    {
        id: 17,
        name: "local women dress",
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
        image: "../images/IMG-20250726-WA0028.jpg"
    },
    {
        id: 18,
        name: "Local Hat",
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
        image: "../images/IMG-20250726-WA0009.jpg"
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

// Sample service data
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
    }
];

// Service categories
const serviceCategories = [
    { id: "design", name: "Design & Creative", icon: "fas fa-paint-brush" },
    { id: "tech", name: "Programming & Tech", icon: "fas fa-laptop-code" },
    { id: "marketing", name: "Digital Marketing", icon: "fas fa-chart-line" },
    { id: "business", name: "Business Consulting", icon: "fas fa-briefcase" }
];

// Filter options
const filterOptions = {
    categories: ["electronics", "apparel", "home", "sports", "office"],
    locations: ["ghana", "nigeria", "south-africa", "china", "turkey"],
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
const itemsPerPage = 20;
let currentPage = 1;
let totalProducts = 0;
let filteredProducts = [];

// Initialize the page
function initPage() {
    filteredProducts = [...products]; // Initialize filtered products
    renderProducts(filteredProducts);
    renderServices(services);
    renderFilterOptions();
    renderServiceCategories();
    setupEventListeners();
}

// Render products to the page with pagination
function renderProducts(productsArray) {
    productsContainer.innerHTML = '';
    
    if (productsArray.length === 0) {
        productsContainer.innerHTML = '<div class="no-results">No products match your filters</div>';
        setupPagination(productsArray); // Update pagination with empty array
        return;
    }
    
    // Sort products first
    const sortedProducts = sortProducts(productsArray, productSortSelect.value);
    
    // Update filtered products for pagination
    filteredProducts = sortedProducts;
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, sortedProducts.length);
    const paginatedProducts = sortedProducts.slice(startIndex, endIndex);
    
    // Render products for current page
    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
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
    });
    
    // Setup pagination controls
    setupPagination(sortedProducts);
}

// Setup pagination controls
function setupPagination(productsArray) {
    totalProducts = productsArray.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const pageNumbersContainer = document.getElementById('page-numbers');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Clear existing page numbers
    pageNumbersContainer.innerHTML = '';
    
    // Create page number buttons
    const maxVisiblePages = 5; // Maximum number of visible page buttons
    let startPage, endPage;
    
    if (totalPages <= maxVisiblePages) {
        // Show all pages if total pages is less than max visible
        startPage = 1;
        endPage = totalPages;
    } else {
        // Calculate start and end pages to show
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
    
    // Add first page and ellipsis if needed
    if (startPage > 1) {
        addPageNumber(1);
        if (startPage > 2) {
            const ellipsis = document.createElement('div');
            ellipsis.className = 'page-number ellipsis';
            ellipsis.textContent = '...';
            pageNumbersContainer.appendChild(ellipsis);
        }
    }
    
    // Add page numbers in range
    for (let i = startPage; i <= endPage; i++) {
        addPageNumber(i);
    }
    
    // Add last page and ellipsis if needed
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('div');
            ellipsis.className = 'page-number ellipsis';
            ellipsis.textContent = '...';
            pageNumbersContainer.appendChild(ellipsis);
        }
        addPageNumber(totalPages);
    }
    
    // Helper function to add a page number button
    function addPageNumber(pageNumber) {
        const pageNum = document.createElement('div');
        pageNum.classList.add('page-number');
        if (pageNumber === currentPage) pageNum.classList.add('active');
        pageNum.textContent = pageNumber;
        pageNum.addEventListener('click', () => {
            currentPage = pageNumber;
            renderProducts(filteredProducts);
        });
        pageNumbersContainer.appendChild(pageNum);
    }
    
    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    // Add event listeners for prev/next buttons
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts(filteredProducts);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts(filteredProducts);
        }
    });
}

// Render services to the page
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
    // Category filter
    filterOptions.categories.forEach(category => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="checkbox" name="category" value="${category}"> 
            ${category.charAt(0).toUpperCase() + category.slice(1)}
        `;
        categoryFilter.appendChild(label);
    });
    
    // Location filter
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
    
    // Type filter
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
    // Add "All" category
    const allCategory = document.createElement('div');
    allCategory.className = 'category-card active';
    allCategory.dataset.category = 'all';
    allCategory.innerHTML = `
        <div class="category-icon"><i class="fas fa-star"></i></div>
        <div class="category-name">All Services</div>
    `;
    dropdownContent.appendChild(allCategory);
    
    // Add other categories
    serviceCategories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.dataset.category = category.id;
        categoryCard.innerHTML = `
            <div class="category-icon"><i class="${category.icon}"></i></div>
            <div class="category-name">${category.name}</div>
        `;
        dropdownContent.appendChild(categoryCard);
    });
}

// Apply filters to products
function applyFilters() {
    currentPage = 1; // Reset to first page when filters change
    
    filteredProducts = products.filter(product => {
        // Category filter
        if (currentFilters.category.length > 0 && !currentFilters.category.includes(product.category)) {
            return false;
        }
        
        // Location filter
        if (currentFilters.location.length > 0 && !currentFilters.location.includes(product.location)) {
            return false;
        }
        
        // Type filter
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
        
        // Price filter
        if (product.minPrice < currentFilters.minPrice || product.minPrice > currentFilters.maxPrice) {
            return false;
        }
        
        return true;
    });
    
    renderProducts(filteredProducts);
}

// Apply service filters
function applyServiceFilters() {
    let filteredServices = services;
    
    // Category filter
    if (currentServiceCategory !== 'all') {
        filteredServices = filteredServices.filter(service => service.category === currentServiceCategory);
    }
    
    renderServices(filteredServices);
}

// Sort products
function sortProducts(productsArray, sortBy) {
    return [...productsArray].sort((a, b) => {
        switch(sortBy) {
            case 'price-low':
                return a.minPrice - b.minPrice;
            case 'price-high':
                return b.minPrice - a.minPrice;
            case 'newest':
                return b.id - a.id;
            default: // featured
                return a.id - b.id;
        }
    });
}

// Reset all filters
function resetAllFilters() {
    // Uncheck all checkboxes
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset price inputs
    minPriceInput.value = '';
    maxPriceInput.value = '';
    
    // Reset currentFilters
    currentFilters = {
        category: [],
        location: [],
        type: [],
        minPrice: 0,
        maxPrice: Infinity
    };
    
    // Reset service category to 'all'
    currentServiceCategory = 'all';
    // Update active category card
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
        if (card.dataset.category === 'all') {
            card.classList.add('active');
        }
    });
    
    // Reset pagination to first page
    currentPage = 1;
    
    // Apply filters for products and services
    applyFilters();
    applyServiceFilters();
}

// Set up event listeners
function setupEventListeners() {
    // Modal functionality
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
    
    // Tab switching
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
        });
    });
    
    // Filter change events
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
    
    // Price filter buttons
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
    
    // Sort change events
    productSortSelect.addEventListener('change', () => {
        applyFilters();
    });
    
    // Service category selection
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentServiceCategory = card.dataset.category;
            applyServiceFilters();
            categoriesDropdown.classList.remove('active');
        });
    });
    
    // Categories dropdown toggle
    categoriesDropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        categoriesDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!categoriesDropdown.contains(e.target)) {
            categoriesDropdown.classList.remove('active');
        }
    });
    
    // Reset all filters button
    resetAllBtn.addEventListener('click', resetAllFilters);
}

// Initialize the page when loaded
window.addEventListener('DOMContentLoaded', initPage);