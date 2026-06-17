const products = [
  {
    name: "Women Sweater",
    category: "Women",
    type: "Sweater",
    price: 450,
    image: "images/Women sweater R450.jpg",
    alt: "Woman wearing a cream and blue Simple Couture sweater",
    description: "Soft premium knit for effortless layering.",
    featured: true,
  },
  {
    name: "Women Jeans",
    category: "Women",
    type: "Denim",
    price: 600,
    image: "images/Women jeans R600.jpg",
    alt: "Simple Couture women denim jeans",
    description: "Structured everyday denim with a flattering fit.",
    featured: false,
  },
  {
    name: "Men Sweater",
    category: "Men",
    type: "Sweater",
    price: 450,
    image: "images/Men sweater R450.jpg",
    alt: "Man wearing a Simple Couture quarter zip sweater",
    description: "Merino blend with a clean quarter-zip finish.",
    featured: true,
  },
  {
    name: "Men Jeans",
    category: "Men",
    type: "Denim",
    price: 600,
    image: "images/Mens jeans R600.jpg",
    alt: "Simple Couture mens denim jeans",
    description: "Durable denim made for everyday movement.",
    featured: false,
  },
  {
    name: "Girls Sweater",
    category: "Kids",
    type: "Sweater",
    price: 250,
    image: "images/Girls sweator R250.jpg",
    alt: "Girl wearing a Simple Couture kids sweater",
    description: "Soft knit comfort for cooler school mornings.",
    featured: false,
  },
  {
    name: "Girls Jacket",
    category: "Kids",
    type: "Jacket",
    price: 250,
    image: "images/Girls jacket R250.jpg",
    alt: "Girl wearing a white Simple Couture puffer jacket",
    description: "Lightweight warmth with a practical everyday fit.",
    featured: true,
  },
  {
    name: "Boys Sweater",
    category: "Kids",
    type: "Sweater",
    price: 400,
    image: "images/Boys sweater R400.jpg",
    alt: "Boy wearing a Simple Couture sweater",
    description: "Easy layering piece for active kids.",
    featured: false,
  },
  {
    name: "Boys Jacket",
    category: "Kids",
    type: "Jacket",
    price: 250,
    image: "images/Boys jacket R250.jpg",
    alt: "Boy wearing a tan Simple Couture quilted jacket",
    description: "Durable outerwear with a comfort-first fit.",
    featured: true,
  },
];

const currency = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  maximumFractionDigits: 0,
});

function productCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.alt}" loading="lazy" />
      <div class="product-card-body">
        <h3>${product.name}</h3>
        <p class="product-meta">${product.category} ${product.type}</p>
        <p>${product.description}</p>
        <p class="product-price">${currency.format(product.price)}</p>
      </div>
    </article>
  `;
}

function renderFeaturedProducts() {
  const target = document.querySelector("[data-featured-products]");

  if (!target) return;

  target.innerHTML = products
    .filter((product) => product.featured)
    .map(productCard)
    .join("");
}

function renderShopProducts() {
  const grid = document.querySelector("[data-product-grid]");
  const count = document.querySelector("[data-product-count]");
  const search = document.querySelector("#product-search");
  const category = document.querySelector("#category-filter");
  const sort = document.querySelector("#sort-products");

  if (!grid || !count || !search || !category || !sort) return;

  const updateProducts = () => {
    const searchValue = search.value.trim().toLowerCase();
    const selectedCategory = category.value;
    const sortValue = sort.value;

    let filteredProducts = products.filter((product) => {
      const searchable = `${product.name} ${product.category} ${product.type} ${product.description}`.toLowerCase();
      const matchesSearch = searchable.includes(searchValue);
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filteredProducts = [...filteredProducts].sort((a, b) => {
      if (sortValue === "price-low") return a.price - b.price;
      if (sortValue === "price-high") return b.price - a.price;
      if (sortValue === "name") return a.name.localeCompare(b.name);
      return Number(b.featured) - Number(a.featured);
    });

    grid.innerHTML = filteredProducts.length
      ? filteredProducts.map(productCard).join("")
      : `<p>No products match your search. Try a different keyword or category.</p>`;

    count.textContent = `${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"} found`;
  };

  search.addEventListener("input", updateProducts);
  category.addEventListener("change", updateProducts);
  sort.addEventListener("change", updateProducts);
  updateProducts();
}

function renderGallery() {
  const grid = document.querySelector("[data-gallery-grid]");
  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const lightboxCaption = document.querySelector("[data-lightbox-caption]");
  const closeButton = document.querySelector("[data-lightbox-close]");

  if (!grid || !lightbox || !lightboxImage || !lightboxCaption || !closeButton) return;

  grid.innerHTML = products
    .map(
      (product) => `
        <article class="gallery-card">
          <button type="button" data-gallery-image="${product.image}" data-gallery-alt="${product.alt}" data-gallery-caption="${product.name} - ${product.description}">
            <img src="${product.image}" alt="${product.alt}" loading="lazy" />
            <span class="gallery-card-body">
              <strong>${product.name}</strong>
              <span class="product-meta">${product.category} collection</span>
            </span>
          </button>
        </article>
      `,
    )
    .join("");

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.src = "";
  };

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-image]");
    if (!button) return;

    lightboxImage.src = button.dataset.galleryImage;
    lightboxImage.alt = button.dataset.galleryAlt;
    lightboxCaption.textContent = button.dataset.galleryCaption;
    lightbox.hidden = false;
    closeButton.focus();
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

function setupAccordion() {
  document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    accordion.addEventListener("click", (event) => {
      const trigger = event.target.closest(".accordion-trigger");
      if (!trigger) return;

      const panel = trigger.nextElementSibling;
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
    });
  });
}

function setupTabs() {
  const tabs = document.querySelector("[data-tabs]");
  if (!tabs) return;

  const tabButtons = [...tabs.querySelectorAll("[role='tab']")];
  const panels = [...tabs.querySelectorAll("[role='tabpanel']")];

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((tab) => tab.setAttribute("aria-selected", "false"));
      panels.forEach((panel) => {
        panel.hidden = panel.id !== button.getAttribute("aria-controls");
      });
      button.setAttribute("aria-selected", "true");
    });
  });
}

function setupContactValidation() {
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("[data-form-status]");
  if (!form || !status) return;

  const rules = {
    name: (value) => (value.trim().length >= 2 ? "" : "Please enter at least 2 characters."),
    email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email address."),
    topic: (value) => (value ? "" : "Please choose an enquiry type."),
    message: (value) => (value.trim().length >= 10 ? "" : "Please enter a message of at least 10 characters."),
  };

  const setError = (name, message) => {
    const error = form.querySelector(`[data-error-for="${name}"]`);
    const field = form.elements[name];
    if (!error || !field) return;

    error.textContent = message;
    field.setAttribute("aria-invalid", String(Boolean(message)));
  };

  const validateField = (name) => {
    const field = form.elements[name];
    const message = rules[name](field.value);
    setError(name, message);
    return !message;
  };

  Object.keys(rules).forEach((name) => {
    form.elements[name].addEventListener("input", () => validateField(name));
    form.elements[name].addEventListener("blur", () => validateField(name));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = Object.keys(rules).every(validateField);

    status.className = "form-status";
    if (!isValid) {
      status.textContent = "Please correct the highlighted fields before sending.";
      status.classList.add("error");
      return;
    }

    status.textContent = "Thank you. Your enquiry is ready to send once the website is connected to a backend.";
    status.classList.add("success");
    form.reset();
  });
}

renderFeaturedProducts();
renderShopProducts();
renderGallery();
setupAccordion();
setupTabs();
setupContactValidation();
