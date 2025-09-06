const template = document.createElement("template");
template.innerHTML = `
  <style>
    label {
      color: #099;
      display: block;
    }

    .description {
      font-size: 12px;
      color: #999;
    }
  </style>
  <label>
    <input type="checkbox" />
    <slot></slot>
    <span class="description">
      <slot name="description"></slot>
    </span>
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
