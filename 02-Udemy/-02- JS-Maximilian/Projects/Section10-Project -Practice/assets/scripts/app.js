// 5 Just we have a multi code repeated in creating the element so we can use
// the concept of inheritance
class component {
  constructor(rootHookId) {
    this.hookId = rootHookId;
  }
  createRootElement(tag, cssClass, attributes) {
    const rootEl = document.createElement(tag);
    if (cssClass) rootEl.className = cssClass;
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) rootEl.setAttribute(attr.name, attr.value);
    }
    document.getElementById(this.hookId).append(rootEl);
    return rootEl;
  }
}

// 4 class to create a cart
class ShoppingCart extends component {
  items = [];
  // we can use setters in this to update the arrays of object

  // using get and set to calc the total amount
  get totalAmount() {
    const totalPrice = this.items.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
    return totalPrice;
  }
  addProductItem(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }
  // we will make a constructor to render hook id to use in in the inheritance
  constructor(renderHookId) {
    super(renderHookId);
    this.render();
  }
  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>;
    <button>Oreder Now</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
  }
}

// 3 this class take each product from the forEach in class number 1 and render it here
class ProductItem extends component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
    this.render();
  }
  // to add event lisiner when push the ad button
  AddToCart() {
    App.addProductItem(this.product);
  }
  render() {
    const productEl = this.createRootElement("li", "product-item");

    // productEl.classList.add("product-item");
    productEl.innerHTML = `
    <div>
    <img src="${this.product.imageURL}" alt="${this.product.title}">
    <div class="product-item__content">
    <h2>${this.product.title}</h2>
    <h3>${this.product.price}</h3>
    <p>${this.product.description}</p>
    <button>Add to Cart</button>
    </div>
    </div>
    `;
    const addToCartBtn = productEl.querySelector("button");
    addToCartBtn.addEventListener("click", this.AddToCart.bind(this));
  }
}

// 2
class Product {
  // these field override by the constructor, you can delete them
  title = "DEFAULT";
  imageURL;
  price;
  description;
  constructor(title, imageUrl, price, desc) {
    // these called proberties when they found inside constructor
    this.title = title;
    this.imageURL = imageUrl;
    this.price = price;
    this.description = desc;
  }
}
// 1 conver the const product list to oop
class ProductList extends component {
  products = [
    new Product(
      "A pillow",
      "https://i.insider.com/5fdccb1ac910a400192e84ae?width=1200&format=jpeg",
      19.99,
      "A soft pillow"
    ),
    new Product(
      "A carpet",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsE4PIoq2BRaYsoBdBfuBRG6Q4ElQC_a63g&usqp=CAU",
      89.99,
      "A carpet which you will like, or not!"
    ),
  ];
  // it dosn't need to be initilized as this already done during the making the instances
  constructor(renderHookId) {
    super(renderHookId);
    this.render();
  }
  // also convert the render() method to oop
  render() {
    const productList = this.createRootElement("ul", "product-list");
    productList.id = "ul-id";
    for (const product of this.products) {
      new ProductItem(product, "ul-id");
    }
  }
}
// for creating instance from the class
// 5 class to render the classes and append the app (0000)
class Shop {
  render() {
    this.card = new ShoppingCart("app");
    new ProductList("app");
  }
}

// make a static class here
class App {
  static init() {
    const shop = new Shop();
    // new property contain the class of shoppingCart which i take from the instance of shop
    // instead of making a lot of instances
    shop.render();
    this.card = shop.card;
  }
  static addProductItem(product) {
    this.card.addProductItem(product);
  }
}
App.init();
// 1 (This is the old one before making the oop conversion)
// we convert it to multible clasess based on the realation of the code with others
// for example: every item in the product put inside class
// render in class and so on,,,
/*
const productList = {
  products: [
    new Product(
      "A pillow",
      "https://i.insider.com/5fdccb1ac910a400192e84ae?width=1200&format=jpeg",
      19.99,
      "A soft pillow"
    ),
    new Product(
      "A carpet",
      "https://embed.widencdn.net/img/shawfloors/so1f7vpt66/2048x1024px/ZZ245%20Sheer%20Purrfection-00553%20Smokey%20Gray_Room_241.jpeg?anchor=0,244&q=93",
      89.99,
      "A carpet which you will like, or not!"
    ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const productList = document.createElement("ul");
    productList.className = "product-list";
    for (const product of this.products) {
      const productEl = document.createElement("li");
      productEl.className = "product-item";
      // productEl.classList.add("product-item");
      productEl.innerHTML = `
      <div>
      <img src="${product.imageURL}" alt="${product.title}">
      <div class="product-item__content">
      <h2>${product.title}</h2>
      <h3>${product.price}</h3>
      <p>${product.description}</p>
      <button>Add to Cart</button>
      </div>
      </div>
      `;
      productList.append(productEl);
    }

    renderHook.append(productList);
  },
};
productList.render();
*/
