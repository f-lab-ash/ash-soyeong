import { navigate } from "./routes/navigate";
import Router from "./routes/router";
import "./components";

function App($container) {
  this.$container = $container;

  const init = () => {
    // click
    document.querySelector("nav").addEventListener("click", (e) => {
      const target = e.target.closest("a");
      if (!(target instanceof HTMLAnchorElement)) return;

      e.preventDefault();
      const targetURL = e.target.href.replace("http://localhost:3000", "");
      navigate(targetURL);
    });

    new Router($container);
  };

  init();
}

export default App;
