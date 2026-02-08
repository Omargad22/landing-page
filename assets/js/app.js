// ========================================
// Menu Data
// ========================================
const menuData = [
    // Main Dishes
    {
        id: 1,
        name: 'كبسة دجاج',
        category: 'main',
        price: 45,
        description: 'كبسة دجاج مع الأرز البسمتي المعطر بالزعفران والمكسرات',
        image: 'assets/images/kabsa_dish_1769853305923.png'
    },
    {
        id: 2,
        name: 'مندي لحم',
        category: 'main',
        price: 65,
        description: 'مندي لحم طري مع الأرز الأصفر المدخن واللوز',
        image: 'assets/images/mandi_dish_1769853320453.png'
    },
    {
        id: 3,
        name: 'شاورما',
        category: 'main',
        price: 25,
        description: 'شاورما دجاج أو لحم طازجة مع الخضار والصلصات',
        image: 'assets/images/shawarma_dish_1769853335948.png'
    },
    {
        id: 4,
        name: 'مشاوي مشكلة',
        category: 'main',
        price: 85,
        description: 'مشاوي مشكلة من الدجاج واللحم والكفتة مع الخضار المشوية',
        image: 'assets/images/mixed_grill_1769854585342.png'
    },
    {
        id: 5,
        name: 'مقلوبة',
        category: 'main',
        price: 50,
        description: 'مقلوبة دجاج مع الأرز والباذنجان والقرنبيط',
        image: 'assets/images/maqluba_1769854599420.png'
    },
    {
        id: 6,
        name: 'دجاج مشوي',
        category: 'main',
        price: 42,
        description: 'صدور دجاج مشوية مع الأعشاب والأرز والخضار',
        image: 'assets/images/grilled_chicken_1769854684408.png'
    },
    {
        id: 7,
        name: 'برياني دجاج',
        category: 'main',
        price: 48,
        description: 'برياني دجاج هندي معطر بالبهارات والزعفران',
        image: 'assets/images/maqluba_1769854599420.png'
    },
    {
        id: 8,
        name: 'ريش غنم مشوية',
        category: 'main',
        price: 75,
        description: 'ريش غنم مشوية مع إكليل الجبل والبطاطس المحمرة',
        image: 'assets/images/mixed_grill_1769854585342.png'
    },

    // Appetizers
    {
        id: 9,
        name: 'حمص',
        category: 'appetizer',
        price: 15,
        description: 'حمص كريمي مع زيت الزيتون والبهارات وخبز ساخن',
        image: 'assets/images/hummus_dish_1769853352686.png'
    },
    {
        id: 10,
        name: 'فلافل',
        category: 'appetizer',
        price: 18,
        description: 'فلافل مقرمشة مع الخضار الطازجة والطحينة',
        image: 'assets/images/falafel_dish_1769853366881.png'
    },
    {
        id: 11,
        name: 'بابا غنوج',
        category: 'appetizer',
        price: 16,
        description: 'بابا غنوج كريمي مع الباذنجان المدخن والطحينة',
        image: 'assets/images/baba_ghanoush_1769854640552.png'
    },
    {
        id: 12,
        name: 'سمبوسك',
        category: 'appetizer',
        price: 22,
        description: 'سمبوسك مقرمش محشي باللحم أو الجبن',
        image: 'assets/images/sambousek_1769854654202.png'
    },
    {
        id: 13,
        name: 'كبة',
        category: 'appetizer',
        price: 28,
        description: 'كبة مقلية محشوة باللحم مع صلصة اللبن',
        image: 'assets/images/kibbeh_1769854670786.png'
    },
    {
        id: 14,
        name: 'ورق عنب',
        category: 'appetizer',
        price: 24,
        description: 'ورق عنب محشي بالأرز واللحم والتوابل',
        image: 'assets/images/sambousek_1769854654202.png'
    },

    // Salads
    {
        id: 15,
        name: 'تبولة',
        category: 'salad',
        price: 18,
        description: 'سلطة تبولة طازجة بالبقدونس والطماطم والبرغل',
        image: 'assets/images/tabbouleh_1769854613293.png'
    },
    {
        id: 16,
        name: 'فتوش',
        category: 'salad',
        price: 20,
        description: 'سلطة فتوش مع الخضار المشكلة والخبز المحمص',
        image: 'assets/images/fattoush_1769854626923.png'
    },
    {
        id: 17,
        name: 'سلطة يونانية',
        category: 'salad',
        price: 22,
        description: 'سلطة يونانية بالجبنة البيضاء والزيتون الأسود',
        image: 'assets/images/baba_ghanoush_1769854640552.png'
    },
    {
        id: 18,
        name: 'سلطة سيزر',
        category: 'salad',
        price: 25,
        description: 'سلطة سيزر مع الدجاج المشوي وصلصة السيزر',
        image: 'assets/images/grilled_chicken_1769854684408.png'
    },

    // Beverages
    {
        id: 19,
        name: 'عصير برتقال طازج',
        category: 'beverage',
        price: 12,
        description: 'عصير برتقال طبيعي طازج من البرتقال الطازج',
        image: 'assets/images/hero_background_1769853292443.png'
    },
    {
        id: 20,
        name: 'عصير مانجو',
        category: 'beverage',
        price: 14,
        description: 'عصير مانجو استوائي منعش',
        image: 'assets/images/hero_background_1769853292443.png'
    },
    {
        id: 21,
        name: 'ليموناضة بالنعناع',
        category: 'beverage',
        price: 10,
        description: 'ليموناضة منعشة بالنعناع الطازج',
        image: 'assets/images/hero_background_1769853292443.png'
    },
    {
        id: 22,
        name: 'شاي بالنعناع',
        category: 'beverage',
        price: 8,
        description: 'شاي عربي تقليدي بالنعناع الطازج',
        image: 'assets/images/hero_background_1769853292443.png'
    },
    {
        id: 23,
        name: 'قهوة عربية',
        category: 'beverage',
        price: 10,
        description: 'قهوة عربية أصيلة بنكهة الهيل',
        image: 'assets/images/hero_background_1769853292443.png'
    },
    {
        id: 24,
        name: 'كابتشينو',
        category: 'beverage',
        price: 15,
        description: 'كابتشينو إيطالي فاخر',
        image: 'assets/images/kunafa_dessert_1769853381817.png'
    },

    // Desserts
    {
        id: 25,
        name: 'كنافة',
        category: 'dessert',
        price: 20,
        description: 'كنافة ذهبية مع الجبن والقطر والفستق الحلبي',
        image: 'assets/images/kunafa_dessert_1769853381817.png'
    },
    {
        id: 26,
        name: 'بقلاوة',
        category: 'dessert',
        price: 18,
        description: 'بقلاوة محشوة بالفستق والعسل',
        image: 'assets/images/kunafa_dessert_1769853381817.png'
    }
];

// ========================================
// State Management
// ========================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentFilter = 'all';

// ========================================
// DOM Elements
// ========================================
const menuGrid = document.getElementById('menuGrid');
const cartBtn = document.getElementById('cartBtn');
const wishlistBtn = document.getElementById('wishlistBtn');
const cartSidebar = document.getElementById('cartSidebar');
const wishlistSidebar = document.getElementById('wishlistSidebar');
const closeCartBtn = document.getElementById('closeCartBtn');
const closeWishlistBtn = document.getElementById('closeWishlistBtn');
const overlay = document.getElementById('overlay');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const cartItems = document.getElementById('cartItems');
const wishlistItems = document.getElementById('wishlistItems');
const cartTotal = document.getElementById('cartTotal');
const toast = document.getElementById('toast');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const filterBtns = document.querySelectorAll('.filter-btn');
const navLinks = document.querySelectorAll('.nav-link');
const checkoutBtn = document.getElementById('checkoutBtn');

// ========================================
// Render Menu
// ========================================
function renderMenu(filter = 'all') {
    const filteredData = filter === 'all'
        ? menuData
        : menuData.filter(item => item.category === filter);

    menuGrid.innerHTML = filteredData.map(item => `
        <div class="menu-card" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="menu-card-image">
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <h3 class="menu-card-title">${item.name}</h3>
                    <button class="wishlist-icon ${isInWishlist(item.id) ? 'active' : ''}" 
                            onclick="toggleWishlist(${item.id})"
                            aria-label="إضافة إلى المفضلة">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <p class="menu-card-description">${item.description}</p>
                <div class="menu-card-footer">
                    <span class="menu-card-price">${item.price} ر.س</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i> أضف للسلة
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// Cart Functions
// ========================================
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast('تمت الإضافة إلى السلة');
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
    showToast('تم الحذف من السلة');
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <p>سلة التسوق فارغة</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">${item.price} ر.س</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="حذف">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total} ر.س`;
}

// ========================================
// Wishlist Functions
// ========================================
function toggleWishlist(itemId) {
    const index = wishlist.indexOf(itemId);

    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('تم الحذف من المفضلة');
    } else {
        wishlist.push(itemId);
        showToast('تمت الإضافة إلى المفضلة');
    }

    saveWishlist();
    updateWishlistUI();
    renderMenu(currentFilter); // Re-render to update heart icons
}

function isInWishlist(itemId) {
    return wishlist.includes(itemId);
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function updateWishlistUI() {
    // Update wishlist count
    wishlistCount.textContent = wishlist.length;

    // Update wishlist items
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart"></i>
                <p>قائمة المفضلة فارغة</p>
            </div>
        `;
    } else {
        const wishlistData = menuData.filter(item => wishlist.includes(item.id));
        wishlistItems.innerHTML = wishlistData.map(item => `
            <div class="wishlist-item">
                <img src="${item.image}" alt="${item.name}" class="wishlist-item-image">
                <div class="wishlist-item-details">
                    <h4 class="wishlist-item-title">${item.name}</h4>
                    <p class="cart-item-price">${item.price} ر.س</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i> أضف للسلة
                    </button>
                </div>
                <button class="remove-btn" onclick="toggleWishlist(${item.id})" aria-label="حذف">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
}

// ========================================
// UI Interactions
// ========================================
function showToast(message) {
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function openCart() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function openWishlist() {
    wishlistSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWishlist() {
    wishlistSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// ========================================
// Event Listeners
// ========================================
// ========================================
// Event Listeners
// ========================================
if (cartBtn) cartBtn.addEventListener('click', openCart);
if (wishlistBtn) wishlistBtn.addEventListener('click', openWishlist);
if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', closeWishlist);
if (overlay) overlay.addEventListener('click', () => {
    closeCart();
    closeWishlist();
});

if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Menu filters
if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            renderMenu(currentFilter);
        });
    });
}

// Checkout button
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('السلة فارغة');
            return;
        }

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const message = `شكراً لطلبك! المبلغ الإجمالي: ${total} ر.س`;
        showToast(message);

        // In a real application, this would redirect to checkout
        setTimeout(() => {
            cart = [];
            saveCart();
            updateCartUI();
            closeCart();
        }, 2000);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ========================================
// Initialize
// ========================================
function init() {
    if (menuGrid) {
        renderMenu();
    }
    updateCartUI();
    updateWishlistUI();
}

// Run on page load
init();
