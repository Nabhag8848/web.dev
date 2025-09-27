customElements.define(
  "star-rating",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const starRating = document.getElementById(
        "star-rating-template"
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(starRating.cloneNode(true));
    }
  }
);
