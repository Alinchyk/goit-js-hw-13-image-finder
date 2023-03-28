const BASE_URL =
  "https://pixabay.com/api/?image_type=photo&orientation=horizontal";
const API_KEY = "30904460-97bcb9f828968abe2ea74d58c";

//  constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

const pixabay = function () {
  return fetch(
    `${BASE_URL}&q=${searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
  ).then(response => {
    return response.json();
  });
};

export default { pixabay };

// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
