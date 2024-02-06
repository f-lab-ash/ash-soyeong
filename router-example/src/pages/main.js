function Main($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = '<my-component name="안녕"></my-component>';
  };

  this.render();
}

export default Main;
