// Add click tracking for analytics
document.addEventListener('DOMContentLoaded', function() {

    /* ================================
       FILTER IPHONE SERIES
    ================================== */

    const filterTabs = document.querySelectorAll('.filter-tab');
    const products = document.querySelectorAll('.product-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {

            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            products.forEach(product => {
                if (filter === 'all') {
                    product.style.display = 'block';
                } else {
                    if (product.classList.contains(filter)) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                }
            });

        });
    });


    /* ================================
       TRACK PRODUCT CLICKS
    ================================== */

    document.querySelectorAll('.shopee-btn').forEach(btn => {
        btn.addEventListener('click', function() {

            const originalText = this.innerHTML;
            this.innerHTML = '<span class="loading"></span> Membuka...';

            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);

            const productName = this.closest('.product-card')
                                    .querySelector('.product-name')
                                    .textContent;

            console.log('Product clicked:', productName);
        });
    });


    /* ================================
       NAVIGATION TABS
    ================================== */

    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.nav-tab')
                    .forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });


    /* ================================
       LAZY LOAD IMAGES
    ================================== */

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img').forEach(img => {
            imageObserver.observe(img);
        });
    }


    /* ================================
       TOUCH EFFECT MOBILE
    ================================== */

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });

        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });


    /* ================================
       IMAGE ERROR HANDLING
    ================================== */

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=300';
        });
    });

});
