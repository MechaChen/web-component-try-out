class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `Benson's first custom element`;
  }
}

customElements.define("todo-item", TodoItem);
