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
            "https://media3.bosch-home.com/Images/400x300/20281406_Bosch-Blender-Range_Keyvisual_Global_VitaPower-1600x1200.jpg",
            "https://m.media-amazon.com/images/I/61eb0fFwHaL.jpg",
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/1292342/1.jpg?8989"
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
        description: "Comfortable and sustainable footwear",
        price: 65,
        minPrice: 50,
        maxPrice: 90,
        specs: ["Recycled materials", "Non-slip", "Multiple sizes", "Eco-friendly design"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "fashion",
        location: "Bolgatanga",
        type: "supplier",
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
        description: "Elegant women's footwear collection",
        price: 65,
        minPrice: 90,
        maxPrice: 200,
        specs: ["Premium quality materials", "Various styles", "Sizes 36-41", "Comfortable design"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "fashion",
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
        description: "Premium branded laptops collection",
        price: 1500,
        minPrice: 1500,
        maxPrice: 6000,
        specs: ["Latest processors", "SSD storage", "HD displays", "Multiple brands available"],
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
        price: 350,
        minPrice: 350,
        maxPrice: 650,
        specs: ["Non-stick inner pot", "Keep warm function", "Multiple cooking modes", "Easy to clean"],
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
            "https://upfrica-production.s3.eu-west-2.amazonaws.com/92vkegjvhlxg1petrisc6mc8qnx8",
        ]
    },
    {
        id: 12,
        name: "Hand bags",
        description: "Designer fashion handbags",
        price: 450,
        minPrice: 450,
        maxPrice: 600,
        specs: ["Premium materials", "Multiple compartments", "Stylish designs", "Various colors"],
        minOrder: 20,
        shipping: "Free shipping",
        supplier: "Nature Goods",
        verified: true,
        category: "fashion",
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
        description: "Durable travel and everyday backpacks",
        price: 150,
        minPrice: 65,
        maxPrice: 240,
        specs: ["Water-resistant material", "Multiple compartments", "Padded straps", "Laptop sleeve"],
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
        name: "Local Hand Bags",
        description: "Traditional handcrafted bags",
        price: 150,
        minPrice: 150,
        maxPrice: 800,
        specs: ["Handwoven materials", "Traditional designs", "Unique patterns", "Authentic craftsmanship"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "fashion",
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
        name: "Printers",
        description: "Professional printing solutions",
        price: 5000,
        minPrice: 5000,
        maxPrice: 45000,
        specs: ["High-quality printing", "Wireless connectivity", "Multiple paper sizes", "Color and B/W options"],
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
        name: "Sandwich Maker",
        description: "Electric sandwich and grill maker",
        price: 250,
        minPrice: 250,
        maxPrice: 450,
        specs: ["Non-stick plates", "Temperature control", "Easy to clean", "Compact design"],
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
        name: "Donut Maker",
        description: "Professional donut making machine",
        price: 350,
        minPrice: 350,
        maxPrice: 600,
        specs: ["Non-stick coating", "Temperature control", "Easy operation", "Makes 6-12 donuts"],
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
        description: "Traditional handcrafted headwear",
        price: 120,
        minPrice: 80,
        maxPrice:150,
        specs: ["Handwoven materials", "Traditional designs", "Various sizes", "Authentic craftsmanship"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "fashion",
        location: "Bolgatanga",
        type: "supplier",
        images: [
            "../images/IMG-20250726-WA0009.jpg",
            "../images/IMG-20250726-WA0010.jpg",
        ]
    },
    {
        id: 19,
        name: "Non-Stick Cookware",
        description: "Premium non-stick cooking set",
        price: 650,
        minPrice: 650,
        maxPrice:1500,
        specs: ["Durable coating", "Heat-resistant handles", "Dishwasher safe", "Complete cookware set"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
       images: [
            "../images/IMG-20250810-WA0002.jpg",
            "../images/IMG-20250810-WA0006.jpg",
            "../images/IMG-20250810-WA0013.jpg",
            "../images/IMG-20250810-WA0011.jpg",
            "../images/IMG-20250810-WA0017.jpg",

        ]
    },
    {
        id: 20,
        name: "Pasta Machine",
        description: "Professional pasta making machine",
        price: 340,
        minPrice: 340,
        maxPrice: 450,
        specs: ["Adjustable thickness", "Multiple pasta types", "Stainless steel construction", "Easy to clean"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
        image: "../images/IMG-20250810-WA0179.jpg"
    },
    {
        id: 21,
        name: "Portable wardrobe",
        description: "Space-saving wardrobe solution",
        price: 300,
        minPrice: 300,
        maxPrice: 600,
        specs: ["Easy assembly", "Durable fabric", "Multiple compartments", "Lightweight design"],
        minOrder: 5,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://tonaton.com/r/cGljdHVyZXMtZ2hhbmEuamlqaXN0YXRpYy5uZXQ/48517499_MzAwLTMwMC0zZWUwODkwYjVl.webp",
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/30345/1.jpg?9774",
            "https://m.media-amazon.com/images/I/81tvrGGoTwL._UF894,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/71feGR1VfoL.jpg",
           

        ]
    },
    {
        id: 22,  
        name: "Computer Monitors",
        description: "High-quality display monitors",
        price: 300,
        minPrice: 300,
        maxPrice: 2500,
        specs: ["Full HD/4K resolution", "Multiple input ports", "Adjustable stand", "Eye care technology"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "electronics",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://kids.kiddle.co/images/thumb/a/a4/Computer_monitor.jpg/300px-Computer_monitor.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIH1RTanuVfdRXTivfN54k-Y5nUisPRatT1w&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNZq231rls9Am-VE_CrtSSxP5uY8FJ-be8HTLkpAfKAJ0uuTt5tyRF6BooargWxg94NQ&usqp=CAU",
            "https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/monitors-accessories/computer-monitors-redesign/HP_P34hc-G4-WQHD-USB-C-Curved-Monitor@2x.png",
            "https://m.media-amazon.com/images/I/71hWM-JNMjL.jpg"
           

        ]
    },
    {
        id: 23,
        name: "Computer Keyboards",
        description: "Professional computer keyboards",
        price: 60,
        minPrice: 60,
        maxPrice: 150,
        specs: ["Mechanical/Membrane switches", "Ergonomic design", "Multimedia keys", "USB connectivity"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "electronics",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://cdn.mos.cms.futurecdn.net/4ohzXW2UdqpXoiTduBM7Dc-1200-80.jpg",
            "https://i.pcmag.com/imagery/reviews/03iakpnFyujfWLKIxJ8Ui1M-1..v1705421237.jpg",
            "https://media.wired.com/photos/6812968e54f1c5198297b7e6/4:3/w_960,c_limit/Keychron-Q5-Pro-Mechanical-Keyboard-Top-View-Reviewer-Photo-SOURCE-Henri-Robbins.jpg",
            "https://c1.neweggimages.com/productimage/nb640/VDVYD2310050OP7XEEC.jpg",
           

        ]
    },
    {
        id: 24,
        name: "Computer Mouse",
        description: "Ergonomic computer mice",
        price: 35,
        minPrice: 75,
        maxPrice:100,
        specs: ["Optical/Laser sensor", "Adjustable DPI", "Ergonomic design", "Wireless/Wired options"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "electronics",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://m.media-amazon.com/images/I/617iKc8AcZL._AC_SL1500_.jpg",
            "https://static.independent.co.uk/2023/01/10/16/Corsair%20katar%20elite%20wireless%20gaming%20mouse.jpg",
            "https://i.ebayimg.com/00/s/MTE5NlgxMDg5/z/hoUAAOSwovFi4nGy/$_57.JPG?set_id=8800005007",
            "https://www.geniusnet.com/upload/en/common/PIC_2025031245_a63938127.webp",
           

        ]
    },
    {
        id: 25,
        name: "Computer System Units",
        description: "Complete desktop computer systems",
        price: 500,
        minPrice: 500,
        maxPrice: 5000,
        specs: ["Latest processors", "High-capacity storage", "Dedicated graphics", "Windows OS"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "electronics",
        location: "Bolgatanga",
        type: "supplier" ,
         images: [
            "https://m.media-amazon.com/images/I/71y4ZSCnkPL._UF350,350_QL50_.jpg",
            "https://img.freepik.com/premium-photo/computer-system-unit_253658-1881.jpg",
            "https://i.pinimg.com/736x/4d/c5/0c/4dc50c11cfbb43012eab7f24d2e5f864.jpg",
            "https://freesvg.org/img/Machovka_Computer_system_case.png",
           

        ]
    },
    {
        id: 26,
        name: "Electrical Sockets and Switches",
        description: "High-quality electrical accessories",
        price: 50,
        minPrice: 50,
        maxPrice: 100,
        specs: ["Safety certified", "Multiple designs", "USB ports available", "Easy installation"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "electronics",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://diamondenergygh.com/wp-content/uploads/2021/12/13A-Double-socket-USB-universal-soocket-outlet-neon-light-Diamond-Energy-Ghana-Dyson.jpg",
            "https://supplymaster.store/cdn/shop/collections/saudi-arabia-alfanar-electric-switches-sockets-ranges.jpg?v=1623420481&width=1296",
            "https://img.freepik.com/free-vector/switches-sockets-realistic-set_1284-16484.jpg?semt=ais_hybrid&w=740&q=80",
            "https://www.shutterstock.com/image-photo/white-electrical-plug-electric-socket-260nw-795005629.jpg",
            "https://images.socketsandswitches.com/images/Home/art-deco-sockets-and-switches.webp"
           

        ]
    },
    {
        id: 27,
        name: "Helmet",
        description: "High-quality safety helmet",
        price: 100,
        minPrice: 80,
        maxPrice: 150,
        specs: ["Safety certified", "Impact resistant", "Adjustable fit", "Ventilation system"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "sports",
        location: "Bolgatanga",
        type: "supplier",
         image: "../images/IMG-20250807-WA0015.jpg"
    },
     {
        id: 28,
        name: "Dressing Mirror with a Stand",
        description: "Elegant full-length mirror with sturdy stand",
        price: 300,
        minPrice: 300,
        maxPrice: 600,
        specs: ["Adjustable angle", "Solid wood frame", "Full-length design", "Easy assembly"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/4250883/1.jpg?1506",
         
            "https://i.ebayimg.com/images/g/8~wAAOSw7XFlpku-/s-l400.jpg",
            "https://s.alicdn.com/@sc04/kf/H44f74ba5cb3f4494b36a3751895e4d1dA.jpeg_300x300.jpg",
           

        ]
    },
    {
        id: 29,
        name: "Bicycles",
        description: "High-quality bicycles for all ages",
        price: 800,
        minPrice: 800,
        maxPrice: 2000,
        specs: ["Durable frame", "Multiple speeds", "Comfortable seat", "Reliable braking system"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "sports",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuANgsTrQGzCHaJdWoSJUPJreo6ODSmK_Eag&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTRaNUD8fzxaV1Alela2SiKVJhxL88M4AJ4g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkPIBhE9GdV28JtO24nT-OkFWUB18qULnOQ&s",
            "https://i5.walmartimages.com/seo/Kent-Sparkles-Bicycle-18-Wheels-Child-Ages-6-Black-and-Pink_5e86a104-4ada-48b1-97f6-da7454fec662.f0b72e94626b8430a01d105a2d3b53cf.jpeg",
           

        ]
    },
     {
        id: 30,
        name: "Motor cycles",
        description: "Reliable and efficient motorcycles",
        price: 8000,
        minPrice: 8000,
        maxPrice: 15000,
        specs: ["Fuel efficient", "Powerful engine", "Comfortable seating", "Low maintenance"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "automotive",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "../images/IMG-20250807-WA0017.jpg",
            "../images/IMG-20250807-WA0014.jpg",
            "../images/IMG-20250807-WA0016.jpg",
            "../images/IMG-20250807-WA0024.jpg",
       
        ]
    },
     {
        id: 31,
        name: "Three_Wheeled Cargo motorbikes",
        description: "Heavy-duty cargo transport vehicles",
        price: 24000,
        minPrice: 24000,
        maxPrice: 30000,
        specs: ["Large cargo capacity", "Fuel efficient engine", "Durable construction", "Easy maintenance"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "automotive",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://www.shutterstock.com/image-vector/tricycle-vector-template-design-white-600nw-2453583247.jpg",
            "https://www.dayangmoto.com/uploads/202331172/three-wheel-cargo-moto5df5f49c-07bc-4ac5-b337-9206ab1b34eb.jpg",
            "https://www.dayangmoto.com/uploads/202131172/top-cover-300cc-engine-cargo-tricycle47405051573.jpg",
           
        ]
    },
     {
        id: 32,
        name: "Electric scooter",
        description: "Modern eco-friendly transportation",
        price: 5000,
        minPrice: 5000,
        maxPrice: 10000,
        specs: ["Long battery life", "Fast charging", "Foldable design", "LED lights"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "automotive",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPa1ybWs2xTsdv3uropWVPHtg0ZNUgJIl1A&s",
            "https://www.gzsamebike.com/wp-content/uploads/2024/09/Golden-Horse-e-bike-1024x683.webp",
            "https://images-cdn.ubuy.ae/64086d71b18ced3d4f1fd583-1000w-electric-scooter.jpg",
            "https://fanttik.com/cdn/shop/files/05_971192c2-a4db-4e9d-83fb-f24248058232.jpg?v=1715668577&width=1600",
            "https://www.ubuy.com.gh/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFNc1c1UzZFeUwuX0FDX1NMMTUwMF8uanBn.jpg"
        ]
    },
     {
        id: 33,
        name: "Air conditioners",
        description: "Energy-efficient cooling systems",
        price: 3500,
        minPrice:3500,
        maxPrice: 10000,
        specs: ["Energy saving mode", "Remote control", "Timer function", "Easy installation"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "electronics",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4h-smyRsi5fyNCfTWBQAMHa08MvSVobmwWQ&s",
            "https://daikinacsolutionsplaza.com/blog/wp-content/uploads/2023/04/image-6.png",
            "https://m.media-amazon.com/images/I/61E5aRnZ5TL._AC_SL1500_.jpg",
            "https://noblesmartgh.com/wp-content/uploads/2021/12/NASCO-2.5HP-FLOOR-STANDING-AIR-CONDITION.jpg",
            "https://www.electromart.com.gh/wp-content/uploads/2025/03/1-3-1-jpg.webp"
        ]
    },
     {
        id: 34,
        name: "Smart TV's",
        description: "High-definition smart televisions",
        price: 1200,
        minPrice:1200,
        maxPrice: 9999,
        specs: ["4K resolution", "Smart features", "Multiple HDMI ports", "WiFi connectivity"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "electronics",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PSBG6r7cyjsEvTCEmMxvGs6txs34ULjpJQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHBSXxgH_Y5lW2NXIGlzao-7A5DD3dkoUaQ&s",
            "https://electrolandgh.com/wp-content/uploads/2025/06/SAMSUNG-UHD-SMART-4K-55-UA50DU8000UXGH-SIDE-2.jpg",
            "https://aws-obg-image-lb-4.tcl.com/content/dam/brandsite/product/tv/s/s5400a/id-image/40-43/40-3.png?t=1672124702170&w=800",
            "https://m.media-amazon.com/images/I/61Abc9FzKwL._AC_SL1500_.jpg"
        ]
    },
     {
        id: 35,
        name: "Popcorn Machine",
        description: "Commercial-grade popcorn makers",
        price: 800,
        minPrice:800,
        maxPrice:1500,
        specs: ["Fast heating", "Easy to clean", "Large capacity", "Safety features"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://i0.wp.com/jachete.ci/wp-content/uploads/2024/01/46641751_189407325331446_2124200273806098432_n.jpeg?fit=560%2C560&ssl=1",
            "https://5.imimg.com/data5/ANDROID/Default/2024/9/447737638/CA/EO/JQ/194420517/product-jpeg-500x500.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ECULx4gPqN_9jPWIMDV4zITfe7JEJsA_Eg&s",
            "https://rukminim2.flixcart.com/image/704/844/xif0q/popcorn-maker/e/7/6/electric-popcorn-maker-rustic-60-original-imagghuhutaz2zhz.jpeg?q=90&crop=false",

        ]
    },
  {
        id: 36,
        name: "Microwave",
        description: "Versatile kitchen microwave ovens",
        price: 1000,
        minPrice:1000,
        maxPrice:2000,
        specs: ["Multiple power levels", "Digital display", "Quick cook options", "Child lock safety"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://milakitchen.com/cdn/shop/files/mi_1.jpg?v=1731895551",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oxqOEBEcXVnOWzR9X1PAlbTkt0kmqcbedA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1htMlyxsYZ-h6bwKzP_aNLdBgB4WmU0kMtm7OTWy2IkYk3-JWzG17D1BzfJ3_aHqOlw&usqp=CAU",
            "https://www.cuisinart.ca/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-master-ca/default/dw614f6378/CMW-70C_1.jpg?sw=1200&sh=1200&sm=fit",

        ]
    },
    {
        id: 37,
        name: "Irons",
        description: "Steam and dry clothing irons",
        price: 1000,
        minPrice:130,
        maxPrice:500,
        specs: ["Steam function", "Temperature control", "Anti-drip feature", "Self-cleaning"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzu_tJmgqg2X8Qf2rTgBKsKlFJZPBWd3OdQ&s1",
            "https://cdn.thewirecutter.com/wp-content/media/2024/05/clothingirons-2048px-01293.jpg",
            "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-choose-the-best-irons-2023-step-2.jpg",
            "https://www.electromart.com.gh/wp-content/uploads/2024/05/PHILIPS-STEAM-IRON-GC1742-46-RED-2000W.webp",

        ]
    },
  {
        id: 38,
        name: "Washing Machines",
        description: "Efficient laundry appliances",
        price: 1500,
        minPrice:1500,
        maxPrice:7000,
        specs: ["Multiple wash programs", "Energy efficient", "Large capacity", "Quiet operation"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "home",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkfg5HDu9OSk4dXpd8fDpaxr2QIeya3VO8w&s",
            "https://whirlpoolindia.vtexassets.com/arquivos/ids/164386/Xpert-care-Silver-lid-open-O3-6.5kg_1500x1500.jpg?v=638731267672600000",
            "https://www.electromart.com.gh/wp-content/uploads/2024/05/Bruhm-BWT-080G.webp",
            "https://images.thdstatic.com/productImages/1f582bc2-1fbf-47c6-96d2-31d165a4e8cc/svn/white-whirlpool-front-load-washers-chw9160gw-64_600.jpg",

        ]
    },
 {
        id: 39,
        name: "Bluetooth Sound Bar",
        description: "Premium audio sound systems",
        price: 500,
        minPrice:500,
        maxPrice:4000,
        specs: ["Wireless connectivity", "Surround sound", "Multiple inputs", "Wall mountable"],
        minOrder: 1,
        shipping: "delivery",
        supplier: "Townssy",
        verified: true,
        category: "electronics",
        location: "Bolgatanga",
        type: "supplier",
         images: [
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/6141192/1.jpg?1801",
            "https://images-cdn.ubuy.co.in/647784b5542ef615b126deda-bose-smart-soundbar-900-with-bass-module.jpg",
            "https://assets.bosecreative.com/transform/5e2eeee5-1903-442f-8543-3373b57a545b/SB900_Black_009_RGB?io=transform:fill,width:1500,height:1000&quality=95",
            "https://www.reliant.co.uk/blog/wp-content/uploads/2023/12/sb2.jpg",

        ]
    },



];



// Service data
const services = [
    {
        id: 1,
        title: "Graphic Design",
        description: "Professional logo and brand identity design",
       
        delivery: "1-5 days",
        rating: 4.9,
        reviews: 128,
        category: "design",
        provider: "S.T Fix Media ",
        verified: true,
        badge: "Top Rated",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Website Development",
        description: "Custom responsive website for your business",
        delivery: "7-14 days",
        rating: 4.8,
        reviews: 92,
        category: "tech",
        provider: "AW Tech",
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
        provider: "AW tech",
        verified: true,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Business Consulting",
        description: "Strategic planning and financial advice",
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
      
        delivery: "Months",
        rating: 4.9,
        reviews: 78,
        category: "tech",
        provider: "AmaasTECH",
        verified: true,
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Professional Photography",
        description: "Commercial and event photography services",
      
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
    categories: ["electronics", "fashion", "home", "kitchen", "sports", "automotive"],
    locations: ["ghana", "Bolgatanga"],
    types: ["manufacturer", "supplier", "verified"]
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

// User Activity Tracking
const userActivity = {
    viewedProducts: [],
    searchHistory: [],
    filterHistory: [],
    lastVisit: null
};

// Load user activity from localStorage
function loadUserActivity() {
    const savedActivity = localStorage.getItem('userActivity');
    if (savedActivity) {
        const parsedActivity = JSON.parse(savedActivity);
        Object.assign(userActivity, parsedActivity);
    }
    userActivity.lastVisit = new Date().toISOString();
    saveUserActivity();
}

// Save user activity to localStorage
function saveUserActivity() {
    localStorage.setItem('userActivity', JSON.stringify(userActivity));
}

// Track product view
function trackProductView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product is already in viewedProducts
    const existingIndex = userActivity.viewedProducts.findIndex(p => p.id === productId);
    
    if (existingIndex !== -1) {
        // Move to the beginning of the array (most recent)
        userActivity.viewedProducts.splice(existingIndex, 1);
    }
    
    // Add product to the beginning of viewedProducts
    userActivity.viewedProducts.unshift({
        id: product.id,
        name: product.name,
        timestamp: new Date().toISOString()
    });
    
    // Keep only the 20 most recent viewed products
    if (userActivity.viewedProducts.length > 20) {
        userActivity.viewedProducts = userActivity.viewedProducts.slice(0, 20);
    }
    
    saveUserActivity();
}

// Track search query
function trackSearch(query) {
    if (!query) return;
    
    userActivity.searchHistory.unshift({
        query: query,
        timestamp: new Date().toISOString()
    });
    
    // Keep only the 10 most recent searches
    if (userActivity.searchHistory.length > 10) {
        userActivity.searchHistory = userActivity.searchHistory.slice(0, 10);
    }
    
    saveUserActivity();
}

// Track filter usage
function trackFilterUsage(filters) {
    userActivity.filterHistory.unshift({
        filters: {...filters},
        timestamp: new Date().toISOString()
    });
    
    // Keep only the 10 most recent filter combinations
    if (userActivity.filterHistory.length > 10) {
        userActivity.filterHistory = userActivity.filterHistory.slice(0, 10);
    }
    
    saveUserActivity();
}

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
    
    // Load user activity from localStorage
    loadUserActivity();
    
    // No longer auto-applying last used filters
    
    filteredProducts = [...products];
    applyFilters(); // Apply default filters
    renderServices(services);
    renderFilterOptions();
    renderServiceCategories();
    setupEventListeners();
    setupScrollToTop();
    
    // Render recently viewed products if available
    renderRecentlyViewed();
    
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
                <div class="product-price">
                    ${product.minPrice !== undefined ? `₵${product.minPrice}` : ''}
                    ${product.minPrice !== undefined && product.maxPrice !== undefined ? ' - ' : ''}
                    ${product.maxPrice !== undefined ? `₵${product.maxPrice}` : ''}
                </div>
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
    
    // Apply Filters button event listener
    const applyFiltersBtn = document.getElementById('apply-filters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            applyFilters();
            filtersModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
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