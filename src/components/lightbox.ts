export class Lightbox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    this.shadowRoot
      ?.querySelector(".lightbox-overlay")
      ?.addEventListener("click", this.hideLightbox);
    this.shadowRoot
      ?.querySelector(".lightbox-image")
      ?.addEventListener("click", this.showLightbox);
  }

  disconnectedCallback() {
    this.shadowRoot
      ?.querySelector(".lightbox-overlay")
      ?.removeEventListener("click", this.hideLightbox);
    this.shadowRoot
      ?.querySelector(".lightbox-image")
      ?.removeEventListener("click", this.showLightbox);
  }

  showLightbox = () => {
    const overlay: HTMLElement | null | undefined =
      this.shadowRoot?.querySelector(".lightbox-overlay");
    if (overlay?.style?.display) {
      overlay.style.display = "block";
    }
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  hideLightbox = () => {
    const overlay: HTMLElement | null | undefined =
      this.shadowRoot?.querySelector(".lightbox-overlay");
    if (overlay?.style?.display) {
      overlay.style.display = "none";
    }
    document.body.style.overflow = ""; // Re-enable scrolling when lightbox is closed
  };

  render() {
    const src = this.getAttribute("src") || "";
    const img = document.createElement("img");
    img.src = src;
    const link = document.createElement("a");
    link.classList.add("lightbox-image");
    link.href = src;
    link.appendChild(img);
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox-overlay");

    link.addEventListener("click", (event) => {
      event.preventDefault();
      this.showLightbox();
    });

    const style = document.createElement("style");
    style.textContent = `
      .lightbox-image {
        cursor: zoom-in;
        transition: transform 0.3s ease;
        width: 100%;
        max-width: 100%;
        margin: 20px auto;
        display: block;
      }
      .lightbox-image img {
        width: 100%;
        max-width: 100%;
        display: block;
      }
      .lightbox-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 10;
        cursor: pointer;
      }
      .lightbox-overlay img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        max-width: 80%;
        height: auto;
        max-height: 80%;
        transform: translate(-50%, -50%);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
      }
    `;

    this.shadowRoot?.appendChild(style);
    this.shadowRoot?.appendChild(link);
    overlay.appendChild(img.cloneNode(true));
    this.shadowRoot?.appendChild(overlay);
  }
}
