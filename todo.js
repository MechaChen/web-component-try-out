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
    this.checkbox = shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "checked") {
      this.updatedChecked(newVal);
    }
  }

  updatedChecked(value) {
    this.checkbox.checked = value;
  }
}

customElements.define("todo-item", TodoItem);
