import "normalize.css";
import "./styles/main.scss";
import API from "./js/apiService";
import init from "./js/init";
import templateFunction from "./templates/template.hbs";
import loadBtn from "./js/load_more_btn";

const refs = init();

console.log(templateFunction);
console.log(API);

const rederCard = el => {
  const markup = templateFunction(el);
  refs.list.insertAdjacentHTML("beforeend", markup);
};

console.log(rederCard);

const searchEl = function (el) {
  e.preventDefault();

  //   const form = el.currentTarget;
  //   const searchQuery = form.elements.query.value;
};
