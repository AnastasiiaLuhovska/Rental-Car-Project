import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./css/common.css";
import App from "./App.tsx";
import store, { persistor } from "./redux/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
