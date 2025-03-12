import ReactDOM from "react-dom/client";
import GiphyApp from "./GiphyApp";
import { SearchProvider } from "./context/SearchContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SearchProvider>
    <GiphyApp />
  </SearchProvider>
);
