export class VideoPlayer extends HTMLElement {
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
    element.classList.add("video-player");

    const id = this.getAttribute("id") || "";
    const iframe = `<iframe src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    element.innerHTML = iframe;

    const style = document.createElement("style");
    style.textContent = `
      .video-player {
        width: 100%;
        max-width: 100%;
      }
      .video-player iframe {
        width: 100%;
        aspect-ratio: 16 / 9;
      }
    `;

    this.shadowRoot?.appendChild(style);
    this.shadowRoot?.appendChild(element);
  }
}
