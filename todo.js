const template = document.createElement("template");
template.innerHTML = `
  <style>
    label {
      color: #099;
      display: block;
    }
  </style>
  <label>
    <input type="checkbox" />
    <slot></slot>
  </label>
`;
class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("todo-item", TodoItem);
