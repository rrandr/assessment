import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./src/styles/faq-3.css"; // Place the `faq-3.css` file in the `src/styles` directory

// Optionally import Bootstrap's JavaScript functionality (if needed)
export const onClientEntry = () => {
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }
};