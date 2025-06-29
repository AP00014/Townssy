  
        // Sample data for products
        const products = [
            {
                id: 1,
                name: "Smart Watch Pro Series 8",
                description: "Health & Fitness Tracker",
                price: 89.99,
                minPrice: 89.99,
                maxPrice: 129.99,
                specs: ["1.78\" AMOLED Display", "Heart Rate & Blood Oxygen Monitor", "14 Days Battery Life", "Waterproof (5ATM)"],
                minOrder: 10,
                shipping: "Free shipping",
                supplier: "Tech Kings Ltd",
                verified: true,
                category: "electronics",
                location: "ghana",
                type: "manufacturer",
                badge: "Verified Supplier",
                image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 2,
                name: "Wireless Bluetooth Earbuds",
                description: "With Noise Cancellation",
                price: 49.99,
                minPrice: 49.99,
                maxPrice: 79.99,
                specs: ["Active Noise Cancellation", "30 Hours Playtime", "IPX7 Waterproof", "Wireless Charging Case"],
                minOrder: 20,
                shipping: "DHL shipping",
                supplier: "Audio Solutions",
                verified: true,
                category: "electronics",
                location: "nigeria",
                type: "manufacturer",
                badge: "Top Rated",
                image: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 3,
                name: "Men's Running Shoes",
                description: "Lightweight & Breathable",
                price: 24.99,
                minPrice: 24.99,
                maxPrice: 39.99,
                specs: ["Lightweight Cushioning", "Breathable Mesh Upper", "Rubber Outsole for Traction", "Available in 6 colors"],
                minOrder: 50,
                shipping: "Free shipping",
                supplier: "Footwear Solutions",
                verified: false,
                category: "apparel",
                location: "china",
                type: "trading",
                image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 4,
                name: "Smart Home Security Camera",
                description: "360° View",
                price: 39.99,
                minPrice: 39.99,
                maxPrice: 59.99,
                specs: ["1080p Full HD Resolution", "Night Vision & Motion Detection", "Two-Way Audio", "Cloud & Local Storage Options"],
                minOrder: 15,
                shipping: "Express shipping",
                supplier: "HomeSecure Inc",
                verified: true,
                category: "home",
                location: "turkey",
                type: "manufacturer",
                badge: "New Arrival",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 5,
                name: "HEPA Air Purifier",
                description: "For Home & Office",
                price: 89.99,
                minPrice: 89.99,
                maxPrice: 129.99,
                specs: ["4-Stage Filtration System", "Covers up to 500 sq. ft.", "Smart Sensors & Auto Mode", "Whisper-Quiet Operation"],
                minOrder: 5,
                shipping: "Free shipping",
                supplier: "CleanAir Solutions",
                verified: false,
                category: "home",
                location: "south-africa",
                type: "manufacturer",
                badge: "Best Seller",
                image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 6,
                name: "20000mAh Power Bank",
                description: "With Fast Charging",
                price: 29.99,
                minPrice: 29.99,
                maxPrice: 44.99,
                specs: ["Charges 4 Devices Simultaneously", "18W PD Fast Charging", "LED Power Indicator", "Built-in Safety Protections"],
                minOrder: 30,
                shipping: "Standard shipping",
                supplier: "E-Power Technologies",
                verified: true,
                category: "electronics",
                location: "ghana",
                type: "manufacturer",
                image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 7,
                name: "Premium Wireless Headphones",
                description: "With ANC",
                price: 79.99,
                minPrice: 79.99,
                maxPrice: 119.99,
                specs: ["Active Noise Cancellation", "40mm Drivers for Rich Sound", "30 Hours Battery Life", "Foldable & Travel Case"],
                minOrder: 10,
                shipping: "Free shipping",
                supplier: "Audio Solutions",
                verified: true,
                category: "electronics",
                location: "china",
                type: "manufacturer",
                badge: "Premium",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 8,
                name: "Waterproof Travel Backpack",
                description: "With USB Port",
                price: 34.99,
                minPrice: 34.99,
                maxPrice: 49.99,
                specs: ["40L Capacity with Multiple Pockets", "Built-in USB Charging Port", "Anti-Theft Design", "Comfortable Shoulder Straps"],
                minOrder: 50,
                shipping: "Standard shipping",
                supplier: "Travel Gear Co.",
                verified: false,
                category: "travel",
                location: "turkey",
                type: "trading",
                image: "https://images.unsplash.com/photo-1600086827875-a1c0f0a2112d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }
        ];
        
        // Sample data for services
        const services = [
            {
                id: 1,
                title: "Logo Design & Brand Identity",
                description: "Professional logo design with brand guidelines",
                price: 150,
                delivery: "3 days",
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
                description: "Custom responsive website development",
                price: 800,
                delivery: "7 days",
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
                description: "Monthly social media content & management",
                price: 300,
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
                title: "Business Plan Writing",
                description: "Professional business plan for startups",
                price: 250,
                delivery: "5 days",
                rating: 4.9,
                reviews: 57,
                category: "business",
                provider: "Strategic Consultants",
                verified: false,
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 5,
                title: "Mobile App Development",
                description: "iOS & Android app development",
                price: 1500,
                delivery: "14 days",
                rating: 4.8,
                reviews: 78,
                category: "tech",
                provider: "AppMasters",
                verified: true,
                image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 6,
                title: "SEO Optimization",
                description: "Search engine optimization for your website",
                price: 400,
                delivery: "Ongoing",
                rating: 4.7,
                reviews: 83,
                category: "marketing",
                provider: "SEO Experts",
                verified: true,
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 7,
                title: "Video Editing",
                description: "Professional video editing services",
                price: 120,
                delivery: "4 days",
                rating: 4.9,
                reviews: 105,
                category: "media",
                provider: "Visual Creators",
                verified: true,
                badge: "Featured",
                image: "https://images.unsplash.com/photo-1574717024453-354056aafa98?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 8,
                title: "Financial Consulting",
                description: "Business financial planning & strategy",
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
            { id: "business", name: "Business Consulting", icon: "fas fa-briefcase" },
            { id: "writing", name: "Writing & Translation", icon: "fas fa-pen" },
            { id: "media", name: "Video & Animation", icon: "fas fa-video" }
        ];
        
        // Filter options
        const filterOptions = {
            categories: ["electronics", "apparel", "home", "travel"],
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
        const serviceCategoriesContainer = document.getElementById('service-categories');
        const minPriceInput = document.getElementById('min-price');
        const maxPriceInput = document.getElementById('max-price');
        const applyPriceBtn = document.getElementById('apply-price');
        const resetPriceBtn = document.getElementById('reset-price');
        const productSortSelect = document.getElementById('product-sort');
        const serviceSortSelect = document.getElementById('service-sort');
        
        // Current filters
        let currentFilters = {
            category: [],
            location: [],
            type: [],
            minPrice: 0,
            maxPrice: Infinity
        };
        
        let currentServiceCategory = 'all';
        
        // Initialize the page
        function initPage() {
            renderProducts(products);
            renderServices(services);
            renderFilterOptions();
            renderServiceCategories();
            setupEventListeners();
        }
        
        // Render products to the page
        function renderProducts(productsArray) {
            productsContainer.innerHTML = '';
            
            if (productsArray.length === 0) {
                productsContainer.innerHTML = '<div class="no-results">No products match your filters</div>';
                return;
            }
            
            productsArray.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name} - ${product.description}</h3>
                        <ul class="product-specs">
                            ${product.specs.map(spec => `<li><i class="fas fa-check-circle"></i> ${spec}</li>`).join('')}
                        </ul>
                        <div class="product-price">$${product.minPrice} - $${product.maxPrice}</div>
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
                            <span class="service-price">$${service.price}</span>
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
                    <input type="checkbox" value="${category}"> ${category.charAt(0).toUpperCase() + category.slice(1)}
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
                    <input type="checkbox" value="${location}"> ${displayName}
                `;
                locationFilter.appendChild(label);
            });
            
            // Type filter
            filterOptions.types.forEach(type => {
                const label = document.createElement('label');
                const displayName = type.charAt(0).toUpperCase() + type.slice(1);
                label.innerHTML = `
                    <input type="checkbox" value="${type}"> ${displayName}
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
            serviceCategoriesContainer.appendChild(allCategory);
            
            // Add other categories
            serviceCategories.forEach(category => {
                const categoryCard = document.createElement('div');
                categoryCard.className = 'category-card';
                categoryCard.dataset.category = category.id;
                categoryCard.innerHTML = `
                    <div class="category-icon"><i class="${category.icon}"></i></div>
                    <div class="category-name">${category.name}</div>
                `;
                serviceCategoriesContainer.appendChild(categoryCard);
            });
        }
        
        // Apply filters to products
        function applyFilters() {
            const filteredProducts = products.filter(product => {
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
            
            // Sort products
            const sortedProducts = sortProducts(filteredProducts, productSortSelect.value);
            renderProducts(sortedProducts);
        }
        
        // Apply service filters
        function applyServiceFilters() {
            let filteredServices = services;
            
            // Category filter
            if (currentServiceCategory !== 'all') {
                filteredServices = filteredServices.filter(service => service.category === currentServiceCategory);
            }
            
            // Sort services
            const sortedServices = sortServices(filteredServices, serviceSortSelect.value);
            renderServices(sortedServices);
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
        
        // Sort services
        function sortServices(servicesArray, sortBy) {
            return [...servicesArray].sort((a, b) => {
                switch(sortBy) {
                    case 'price-low':
                        return a.price - b.price;
                    case 'price-high':
                        return b.price - a.price;
                    case 'rating':
                        return b.rating - a.rating;
                    default: // featured
                        return a.id - b.id;
                }
            });
        }
        
        // Set up event listeners
        function setupEventListeners() {
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
            
            serviceSortSelect.addEventListener('change', () => {
                applyServiceFilters();
            });
            
            // Service category selection
            document.querySelectorAll('.category-card').forEach(card => {
                card.addEventListener('click', () => {
                    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                    currentServiceCategory = card.dataset.category;
                    applyServiceFilters();
                });
            });
        }
        
        // Initialize the page when loaded
        window.addEventListener('DOMContentLoaded', initPage);
    