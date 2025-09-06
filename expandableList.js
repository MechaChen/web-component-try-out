class ExpandableList extends HTMLUListElement {
  constructor() {
    super();
    this.style.position = "relative";
    this.toggleButton = document.createElement("button");
    this.toggleButton.className = "toggleButton";
    this.toggleButton.innerHTML = "▶";
    this.toggleButton.addEventListener("click", () => {
      this.dataset.expanded = !this.isExpanded ? "true" : "false";
    });
    this.appendChild(this.toggleButton);
  }

  // 觀察 data-expanded 屬性
  static get observedAttributes() {
    return ["data-expanded"];
  }

  // 判斷是否處於展開狀態
  get isExpanded() {
    return this.dataset.expanded === "true";
  }

  connectedCallback() {
    this.updateStyles();
  }

  // 當觀察的屬性改變時觸發
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data-expanded") {
      this.updateStyles();
    }
  }

  // 更新樣式以反映展開/收合狀態
  updateStyles() {
    // 根據 isExpanded 狀態決定旋轉角度
    const transform = this.isExpanded ? "rotate(90deg)" : "";
    this.toggleButton.style.transform = transform;

    // 遍歷所有子元素，除了 toggleButton，根據 isExpanded 狀態顯示或隱藏
    [...this.children].forEach((child) => {
      if (child !== this.toggleButton) {
        child.style.display = this.isExpanded ? "" : "none";
      }
    });
  }
}

customElements.define("expandable-list", ExpandableList, { extends: "ul" });
