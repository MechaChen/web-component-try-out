class ExpandableList extends HTMLUListElement {
  constructor() {
    super();
    this.style.position = "relative";
    this.toggleButton = document.createElement("button");
    this.toggleButton.className = "toggleButton";
    this.toggleButton.innerHTML = "▼";
    this.appendChild(this.toggleButton);
  }
}

customElements.define("expandable-list", ExpandableList, { extends: "ul" });
