import header from "./components/header";
import main from "./components/main";
import "./style.css";

document
  .querySelector("#app")
  .insertAdjacentHTML("beforeend", header() + main());
