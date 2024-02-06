function Shop($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <div>
        Shop 페이지에요.
      </div>
    `;
  };

  this.render();
}

export default Shop;
