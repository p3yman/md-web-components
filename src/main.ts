import "github-markdown-css/github-markdown.css";
import "./style.css";

// Setup components
import { SwitchTab } from "./components/switch-tab";
import { Lightbox } from "./components/lightbox";
import { Alert } from "./components/alert";
import { Section } from "./components/section";
import { VideoPlayer } from "./components/video";

// Register all the components
customElements.define("switch-tab", SwitchTab);
customElements.define("lightbox-image", Lightbox);
customElements.define("alert-message", Alert);
customElements.define("section-item", Section);
customElements.define("video-player", VideoPlayer);
