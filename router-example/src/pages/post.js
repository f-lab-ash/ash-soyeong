function Post($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <div>
        포스트 페이지에요.
      </div>
    `;
  };

  this.render();
}

export default Post;
