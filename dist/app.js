// src/app.ts
import { Router } from "./router.js";
import { CanvasComponent } from "./components/CanvasComponent.js";
// Initialize the router
const router = new Router();
// Simple function to render content
function render(content) {
    const appDiv = document.getElementById("app");
    if (appDiv) {
        appDiv.innerHTML = content;
    }
}
// Define some routes with corresponding content
router.addRoute("/", () => render("<h1>Home Page</h1><p>Welcome to the SPA!</p>"));
router.addRoute("/about", () => render("<h1>About</h1><p>This is the about page.</p>"));
// Simulate navigation buttons
/* document.addEventListener("DOMContentLoaded", () => {
  render("<h1>Home Page</h1><p>Welcome to the SPA!</p>");
  
  // Create navigation buttons
  const navDiv = document.createElement("div");
  navDiv.innerHTML = `
    <button id="homeBtn">Home</button>
    <button id="aboutBtn">About</button>
    <button id="backBtn">Back</button>
  `;
  document.body.insertBefore(navDiv, document.getElementById("app"));

  document.getElementById("homeBtn")?.addEventListener("click", () => {
    router.navigate("/");
  });

  document.getElementById("aboutBtn")?.addEventListener("click", () => {
    router.navigate("/about");
  });

  // Using history.back() as a stand-in for a "previous" function
  document.getElementById("backBtn")?.addEventListener("click", () => {
    history.back();
  });
}); */
document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.getElementById("app");
    if (appContainer) {
        // Clear the div and add the Babylon.js canvas
        appContainer.innerHTML = "";
        new CanvasComponent("app");
    }
});
