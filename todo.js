class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h1>${this.innerHTML}</h1>`;
  }
}

customElements.define("todo-item", TodoItem);
