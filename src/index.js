import "normalize.css";
import "./styles/main.scss";
import API from "./js/apiService";
import getRefs from "./js/get-refs";
import templateFunction from "./templates/template.hbs";
import { error } from "@pnotify/core";
import "./js/pnotify.js";

// змінні
const refs = getRefs();

// слухачі
refs.searchForm.addEventListener("submit", onSearch);

// розмітка
function rederCard(el) {
  const markup = templateFunction(el);
  refs.list.innerHTML = markup;
}

console.log(rederCard);

// пошук
function onSearch(e) {
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  e.preventDefault();

  API.pixabay(searchQuery)
    .then(rederCard)
    .catch(itsError)
    .finally(() => form.reset());
}

// помилка
const itsError = error({
  text: "Error",
});
