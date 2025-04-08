// src/app.ts
import { Router } from "./router.js";
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
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b, _c;
    render("<h1>Home Page</h1><p>Welcome to the SPA!</p>");
    // Create navigation buttons
    const navDiv = document.createElement("div");
    navDiv.innerHTML = `
    <button id="homeBtn">Home</button>
    <button id="aboutBtn">About</button>
    <button id="backBtn">Back</button>
  `;
    document.body.insertBefore(navDiv, document.getElementById("app"));
    (_a = document.getElementById("homeBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        router.navigate("/");
    });
    (_b = document.getElementById("aboutBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        router.navigate("/about");
    });
    // Using history.back() as a stand-in for a "previous" function
    (_c = document.getElementById("backBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        history.back();
    });
});
/* document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.getElementById("app");
  
    if (appContainer) {
      // Clear the div and add the Babylon.js canvas
      appContainer.innerHTML = "";
      new CanvasComponent("app");
    }
  }); */ 
