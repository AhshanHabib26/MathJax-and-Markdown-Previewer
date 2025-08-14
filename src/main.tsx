import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MathJaxContext } from "better-react-mathjax";

import { registerSW } from "virtual:pwa-register";
import { toast } from "sonner";

registerSW({
  onNeedRefresh() {
    toast.info("New content available. Please reload.", {
      action: {
        label: "Reload",
        onClick: () => window.location.reload(),
      },
    });
  },
  onOfflineReady() {
    toast.success("App is ready to work offline");
  },
});

// Configure MathJax
const mathJaxConfig = {
  loader: { load: ["input/tex", "output/chtml"] },
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <MathJaxContext config={mathJaxConfig}>
        <App />
      </MathJaxContext>
  </StrictMode>
);
