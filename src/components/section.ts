export class Section extends HTMLElement {
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
    element.classList.add("section");

    const title = document.createElement("a");
    title.href = "#";
    title.classList.add("section-title");
    title.textContent = this.getAttribute("title") || "";

    title.addEventListener("click", (e) => {
      e.preventDefault();
      element.classList.toggle("collapsed");
    });

    const content = document.createElement("div");
    content.classList.add("section-content");
    content.innerHTML = this.innerHTML || "";

    element.appendChild(title);
    element.appendChild(content);

    const style = document.createElement("style");
    style.textContent = `
      .section {
        margin-bottom: 20px;
        border: 1px solid #000;
        border-radius: 5px;
      }
      .section.collapsed .section-content {
        display: none;
      }
      .section-title {
        display: flex;
        cursor: pointer;
        padding: 20px;
        border-bottom: 1px solid #000;
      }
      .section.collapsed .section-title {
        border-bottom: none;
      }
      .section-content {
        padding: 20px;
      }
    `;

    this.shadowRoot?.appendChild(style);
    this.shadowRoot?.appendChild(element);
  }
}
