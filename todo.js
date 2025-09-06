class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h3>${this.innerHTML}</h3>`;
  }
}

customElements.define("todo-item", TodoItem);
