class Catalog {
  get noResultsErrorMessage() {
    return $(".alert.alert-warning");
  }

  get products() {
    return $$("#search .product_list .product-container .product-name");
  }
}

const catalog = new Catalog();
export default catalog;
