class ProductManager {
  constructor(){
    this.products = [];
  }
  getProducts = () => {
    return this.products;
  };
  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    const validationCode = this.products.find((product) => product.code === code);
    if (validationCode) {
      console.log(`The code ${validationCode} is already in use`);
      return;
    }
    else{
      if (this.products.length === 0) {
        product.id = 1;
      }
      else {
        product.id = this.products[this.products.length - 1].id + 1;
      }
      this.products.push(product);
    } 
  };
  getProductById = (id) => {
    const productId = this.products.find((product) => product.id === id);
    if (!productId){
      return "Product not found";
    }
    else {
      return productId;
    }
  };
}
const product = new ProductManager();
console.log(product.getProducts());
product.addProduct("producto prueba", "pruebaa", 200, "sin imagen", "abc45", 25);
product.addProduct("producto prueba 2", "prueba", 200, "sin imagn", "ab45", 25);
console.log(product.getProducts());
console.log(product.getProductById(1));