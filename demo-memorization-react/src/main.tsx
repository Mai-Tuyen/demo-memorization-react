import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Parent from "./TestMemorization/Parent.tsx";
import UseMemoExample from "./UseMemoExample/UseMemoExample.tsx";
import UseCallBackExample from "./UseCallBackExample/UseCallBackExample.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  // <App />
  <UseMemoExample />
  // <UseCallBackExample />
  // <Parent />
  // </StrictMode>,
);
