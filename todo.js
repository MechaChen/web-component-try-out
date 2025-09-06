class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<style>h3 { color: green; }</style><h3>${this.innerHTML}</h3>`;
  }
}

customElements.define("todo-item", TodoItem);
