import header from "./components/header";
import main from "./components/main";
import shoe from "./components/shoe";
import "./style.css";

document
  .querySelector("#app")
  .insertAdjacentHTML("beforeend", header() + main());

for (let i = 1; i <= 8; i++) {
  document.querySelector("#app").insertAdjacentHTML("beforeend", shoe(i));
}
