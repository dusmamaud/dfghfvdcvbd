document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  
  const product = products.find(p => p.id === productId);
  if (!product) {
      window.location.href = 'index.html';
      return;
  }

  // Initialize image slider
  initializeImageSlider(product.images);
  
  // Initialize product info
  initializeProductInfo(product);
  
  // Initialize color and size selectors
  initializeSelectors(product);
  
  // Initialize quantity controls
  initializeQuantityControls();
  
  // Load similar products
  loadSimilarProducts(product);
});

function initializeImageSlider(images) {
  const slider = document.getElementById('imageSlider');
  const thumbnailTrack = document.getElementById('thumbnailTrack');
  
  // Main slider setup
  slider.innerHTML = images.map((img, index) => `
      <div class="slide ${index === 0 ? 'active' : ''}" data-index="${index}">
          <img src="${img}" alt="Product image ${index + 1}">
      </div>
  `).join('');
  
  // Thumbnail setup
  thumbnailTrack.innerHTML = images.map((img, index) => `
      <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
          <img src="${img}" alt="Thumbnail ${index + 1}">
      </div>
  `).join('');
  
  // Slider navigation
  initializeSliderControls();
}