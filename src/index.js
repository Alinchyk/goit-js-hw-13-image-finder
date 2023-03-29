import "normalize.css";
import "./styles/main.scss";
import NewApiPixabay from "./js/apiService";
import init from "./js/init";
import templateFunction from "./templates/template.hbs";
import LoadMoreBtn from "./js/load_more_btn";
import { onErrorEmptyInput, onErrorNoSuchMatches } from "./js/notify";

const refs = init();
const newApiPixabay = new NewApiPixabay();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const onSearch = function (e) {
  e.preventDefault();

  newApiPixabay.query = e.currentTarget.elements.query.value.trim();

  if (newApiPixabay.query === "") {
    clearContainer();
    return onErrorEmptyInput();
  }

  loadMoreBtn.show();
  newApiPixabay.resetPage();
  clearContainer();
  fetchImages();
};

const fetchImages = function () {
  loadMoreBtn.disable();
  newApiPixabay
    .fetchImages()
    .then(el => {
      rederCard(el);
      loadMoreBtn.enable();
      onWindowScroll();
    })
    .catch(onFetchError);
};

const rederCard = function (el) {
  if (el.length === 0) {
    return onErrorNoSuchMatches();
  }

  refs.list.insertAdjacentHTML("beforeend", templateFunction(el));
};

const onWindowScroll = function () {
  const options = {
    top: null,
    behavior: "smooth",
  };

  options.top = window.pageYOffset + document.documentElement.clientHeight;
  setTimeout(() => {
    window.scrollTo(options);
  }, 1000);
};

const clearContainer = () => {
  refs.list.innerHTML = "";
};

const onFetchError = function (error) {
  alert(error);
};

refs.searchForm.addEventListener("submit", onSearch);
loadMoreBtn.refs.button.addEventListener("click", fetchImages);
