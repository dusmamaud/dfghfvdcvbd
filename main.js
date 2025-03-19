document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('productList');
  const filterSelects = document.querySelectorAll('.filter-select');
  const viewButtons = document.querySelectorAll('.view-btn');
  
  // Initial product render
  renderProducts(products);

  // Filter functionality
  filterSelects.forEach(select => {
      select.addEventListener('change', () => {
          const category = filterSelects[0].value;
          const sortBy = filterSelects[1].value;
          
          let filteredProducts = filterProducts(products, category);
          filteredProducts = sortProducts(filteredProducts, sortBy);
          
          renderProducts(filteredProducts);
      });
  });

  // View toggle functionality
  viewButtons.forEach(btn => {
      btn.addEventListener('click', () => {
          viewButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          const viewMode = btn.dataset.view;
          productList.className = `products-${viewMode}`;
      });
  });

  // Product card render function
  function renderProducts(products) {
      productList.innerHTML = products.map(product => `
          <div class="product-card">
              <div class="product-image">
                  <img src="${product.images[0]}" alt="${product.name}">
                  <div class="product-overlay">
                      <button class="quick-view" data-id="${product.id}">
                          Quick View
                      </button>
                  </div>
              </div>
              <div class="product-content">
                  <h3 class="product-title">${product.name}</h3>
                  <div class="product-prices">
                      <span class="current-price">$${product.currentPrice}</span>
                      ${product.discount ? `
                          <span class="original-price">$${product.originalPrice}</span>
                          <span class="discount-badge">-${product.discount}%</span>
                      ` : ''}
                  </div>
                  <div class="product-actions">
                      <a href="detail.html?id=${product.id}" class="btn-view">View Details</a>
                      <button class="btn-cart" data-id="${product.id}">
                          <i class='bx bx-cart-add'></i>
                      </button>
                  </div>
              </div>
          </div>
      `).join('');

      // Add event listeners for quick view and cart buttons
      initializeProductInteractions();
  }
});