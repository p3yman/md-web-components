export class SwitchTab extends HTMLElement {
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
    const element = document.createElement("a");
    element.href = `#${this.getAttribute("target") || "tab-0"}`;
    element.innerHTML = this.innerHTML || "";
    element.classList.add("button", this.getAttribute("type") || "white");

    const style = document.createElement("style");
    style.textContent = `
      .button {
        display: inline-block;
        padding: 10px 20px;
        border: 1px solid #000;
        border-radius: 5px;
        text-decoration: none;
        color: #000;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
      }
      .button.white {
        background-color: #fff;
      }
      .button.black {
        background-color: #000;
        color: #fff;
      }
      .button.success {
        background-color: #28a745;
        color: #fff;
      }
    `;

    this.shadowRoot?.appendChild(style);
    this.shadowRoot?.appendChild(element);
  }
}
