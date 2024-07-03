import GameController from "./modules/GameController";
import "./style.css";

let appDiv = document.querySelector("#app");
let button = document.querySelector("button");
GameController();
button.onclick = () => {
  if (document.querySelector(".board")) {
    document.querySelector(".board").remove();
    document.querySelector(".board").remove();
  }
  GameController();
};
