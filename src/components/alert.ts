export class Alert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    setTimeout(() => {
      this.render();
    });
  }

  render() {
    const element = document.createElement("div");
    element.classList.add("alert", this.getAttribute("type") || "info");
    element.innerHTML = this.innerHTML || "";

    const style = document.createElement("style");
    style.textContent = `
      .alert {
        padding: 15px;
        margin-bottom: 20px;
        border: 1px solid transparent;
        border-radius: 5px;
      }
      .alert.info {
        color: #0056b3;
        background-color: #cce5ff;
        border-color: #b8daff;
      }
      .alert.warning {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
      }
      .alert.error {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
      }
      .alert.success {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
      }
    `;

    this.shadowRoot?.appendChild(style);
    this.shadowRoot?.appendChild(element);
  }
}
