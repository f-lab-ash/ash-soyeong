class MyComponent extends HTMLElement {
  constructor() {
    super();
  }

  // DOM 구성요소가 삽입될 때 (mount)
  connectedCallback() {
    console.log("connectedCallback");
    let name = this.getAttribute("name");
    this.innerHTML = `테스트 name: ${name}`;
  }
  // DOM 구성요소가 제거될 때 (unmount)
  disconnectedCallback() {
    console.log("disconnectedCallback");
  }
}

window.customElements.define("my-component", MyComponent);

export default MyComponent;
