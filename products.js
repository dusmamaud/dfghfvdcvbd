const products = [
  {
      id: 1,
      name: "Premium Cotton Crew Neck",
      category: "men",
      originalPrice: 49.99,
      currentPrice: 39.99,
      discount: 20,
      images: [
          "img/tshirt-black-1.png",
          "img/tshirt-black-2.png",
          "img/tshirt-black-3.png",
          "img/tshirt-black-4.png"
      ],
      colors: [
          { name: "Black", code: "#000000", images: ["img/tshirt-black-1.png"] },
          { name: "White", code: "#ffffff", images: ["img/tshirt-white-1.png"] },
          { name: "Navy", code: "#1B262C", images: ["img/tshirt-navy-1.png"] }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      rating: 4.8,
      reviewCount: 128,
      description: "Experience unmatched comfort with our premium cotton crew neck t-shirt. Made from 100% organic cotton, this t-shirt features a classic fit, reinforced seams, and superior breathability.",
      features: [
          "100% Organic Cotton",
          "Reinforced Seams",
          "Breathable Fabric",
          "Pre-shrunk Material"
      ],
      specifications: {
          material: "100% Organic Cotton",
          weight: "180 GSM",
          fit: "Regular Fit",
          care: "Machine wash cold"
      }
  },
  // Add more products...
  {
    id: 2, 
    name: "Slim Fit Denim Jeans",
    category: "men",
    originalPrice: 89.99,
    currentPrice: 69.99,
    discount: 22,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
      "https://images.unsplash.com/photo-1542272604-787c3835535d"
    ],
    colors: [
      { name: "Dark Blue", code: "#151B54", images: ["https://images.unsplash.com/photo-1542272604-787c3835535d"] },
      { name: "Light Blue", code: "#6698FF", images: ["https://images.unsplash.com/photo-1542272604-787c3835535d"] }
    ],
    sizes: ["30", "32", "34", "36", "38"],
    rating: 4.6,
    reviewCount: 245,
    description: "Classic slim fit denim jeans with perfect stretch and comfort. Premium quality denim material.",
    features: [
      "Premium Denim",
      "Stretch Material",
      "Slim Fit Design",
      "Reinforced Stitching"
    ],
    specifications: {
      material: "98% Cotton, 2% Elastane",
      weight: "12 oz",
      fit: "Slim Fit",
      care: "Machine wash cold"
    }
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    category: "women",
    originalPrice: 79.99,
    currentPrice: 59.99,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446"
    ],
    colors: [
      { name: "Pink Floral", code: "#FFB6C1", images: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446"] },
      { name: "Blue Floral", code: "#87CEEB", images: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446"] }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.9,
    reviewCount: 167,
    description: "Beautiful floral summer dress with a flattering fit. Perfect for warm weather occasions.",
    features: [
      "Lightweight Material",
      "Floral Print",
      "A-Line Cut",
      "Hidden Zipper"
    ],
    specifications: {
      material: "100% Rayon",
      weight: "Light",
      fit: "Regular Fit",
      care: "Hand wash cold"
    }
  },
  {
    id: 4,
    name: "Athletic Running Shoes",
    category: "shoes",
    originalPrice: 129.99,
    currentPrice: 99.99,
    discount: 23,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    ],
    colors: [
      { name: "Red", code: "#FF0000", images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff"] },
      { name: "Blue", code: "#0000FF", images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff"] }
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    rating: 4.7,
    reviewCount: 389,
    description: "High-performance running shoes with superior cushioning and support.",
    features: [
      "Breathable Mesh",
      "Cushioned Sole",
      "Arch Support",
      "Lightweight Design"
    ],
    specifications: {
      material: "Synthetic Mesh",
      weight: "280g",
      fit: "True to Size",
      care: "Spot clean"
    }
  },
  {
    id: 5,
    name: "Leather Crossbody Bag",
    category: "accessories",
    originalPrice: 159.99,
    currentPrice: 129.99,
    discount: 19,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa"
    ],
    colors: [
      { name: "Brown", code: "#8B4513", images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa"] },
      { name: "Black", code: "#000000", images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa"] }
    ],
    sizes: ["One Size"],
    rating: 4.8,
    reviewCount: 156,
    description: "Genuine leather crossbody bag with multiple compartments and adjustable strap.",
    features: [
      "Genuine Leather",
      "Multiple Pockets",
      "Adjustable Strap",
      "Metal Hardware"
    ],
    specifications: {
      material: "Full Grain Leather",
      weight: "1.2 lbs",
      dimensions: "10\" x 8\" x 4\"",
      care: "Leather cleaner"
    }
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    category: "electronics",
    originalPrice: 199.99,
    currentPrice: 149.99,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605",
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605",
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605",
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605"
    ],
    colors: [
      { name: "White", code: "#FFFFFF", images: ["https://images.unsplash.com/photo-1605464315542-bda3e2f4e605"] },
      { name: "Black", code: "#000000", images: ["https://images.unsplash.com/photo-1605464315542-bda3e2f4e605"] }
    ],
    sizes: ["One Size"],
    rating: 4.6,
    reviewCount: 423,
    description: "Premium wireless earbuds with active noise cancellation and long battery life.",
    features: [
      "Active Noise Cancellation",
      "30-Hour Battery Life",
      "Water Resistant",
      "Touch Controls"
    ],
    specifications: {
      connectivity: "Bluetooth 5.0",
      batteryLife: "6 hours + 24 hours case",
      waterResistance: "IPX4",
      warranty: "1 Year"
    }
  },
  {
    id: 7,
    name: "Smart Watch",
    category: "electronics",
    originalPrice: 299.99,
    currentPrice: 249.99,
    discount: 17,
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a"
    ],
    colors: [
      { name: "Silver", code: "#C0C0C0", images: ["https://images.unsplash.com/photo-1579586337278-3befd40fd17a"] },
      { name: "Gold", code: "#FFD700", images: ["https://images.unsplash.com/photo-1579586337278-3befd40fd17a"] }
    ],
    sizes: ["40mm", "44mm"],
    rating: 4.7,
    reviewCount: 312,
    description: "Advanced smartwatch with health monitoring and smartphone integration.",
    features: [
      "Heart Rate Monitor",
      "GPS Tracking",
      "Water Resistant",
      "Sleep Tracking"
    ],
    specifications: {
      display: "AMOLED",
      battery: "Up to 18 hours",
      waterResistance: "50m",
      connectivity: "Bluetooth & WiFi"
    }
  },
  {
    id: 8,
    name: "Yoga Mat",
    category: "fitness",
    originalPrice: 69.99,
    currentPrice: 49.99,
    discount: 29,
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf9b0f",
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf9b0f",
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf9b0f",
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf9b0f"
    ],
    colors: [
      { name: "Purple", code: "#800080", images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf9b0f"] },
      { name: "Blue", code: "#0000FF", images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf9b0f"] }
    ],
    sizes: ["Standard"],
    rating: 4.5,
    reviewCount: 178,
    description: "Premium non-slip yoga mat with excellent cushioning and grip.",
    features: [
      "Non-Slip Surface",
      "6mm Thickness",
      "Eco-Friendly Material",
      "Carrying Strap"
    ],
    specifications: {
      material: "TPE",
      dimensions: "72\" x 24\"",
      thickness: "6mm",
      weight: "2.5 lbs"
    }
  },
  {
    id: 9,
    name: "Stainless Steel Water Bottle",
    category: "accessories",
    originalPrice: 34.99,
    currentPrice: 24.99,
    discount: 29,
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
    ],
    colors: [
      { name: "Silver", code: "#C0C0C0", images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8"] },
      { name: "Black", code: "#000000", images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8"] }
    ],
    sizes: ["20oz", "32oz"],
    rating: 4.8,
    reviewCount: 245,
    description: "Vacuum-insulated stainless steel water bottle keeps drinks cold for 24 hours.",
    features: [
      "Double-Wall Insulation",
      "BPA-Free",
      "Leak-Proof Lid",
      "Wide Mouth Opening"
    ],
    specifications: {
      material: "18/8 Stainless Steel",
      capacity: "32 oz",
      weight: "0.85 lbs",
      warranty: "Lifetime"
    }
  },
  {
    id: 10,
    name: "Backpack",
    category: "accessories",
    originalPrice: 79.99,
    currentPrice: 59.99,
    discount: 25,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    ],
    colors: [
      { name: "Gray", code: "#808080", images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62"] },
      { name: "Black", code: "#000000", images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62"] }
    ],
    sizes: ["One Size"],
    rating: 4.7,
    reviewCount: 189,
    description: "Durable laptop backpack with multiple compartments and water-resistant material.",
    features: [
      "Laptop Sleeve",
      "Water Resistant",
      "Multiple Pockets",
      "Padded Straps"
    ],
    specifications: {
      material: "Polyester",
      capacity: "25L",
      laptopSize: "Up to 15\"",
      weight: "1.8 lbs"
    }
  }
];