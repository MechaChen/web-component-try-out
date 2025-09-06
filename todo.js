const template = document.createElement("template");
template.innerHTML = `
  <style>
    h3 { color: green; }
  </style>
  <h3 data-title=""></h3>
`;
class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
    this.title = shadow.querySelector("[data-title]");
    this.title.innerHTML = this.innerHTML;
  }
}

customElements.define("todo-item", TodoItem);
