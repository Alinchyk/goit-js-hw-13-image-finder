const BASE_URL =
  "https://pixabay.com/api/?image_type=photo&orientation=horizontal";
const API_KEY = "30904460-97bcb9f828968abe2ea74d58c";
export default class NewApiPixabay {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }

  // fetchImages() {
  //   const url = `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

  //   return fetch(url)
  //     .then(response => response.json())
  //     .then(({ hits }) => {
  //       this.incrementPage();

  //       return hits;
  //     });
  // }

  async fetchImages() {
    const url = `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return await fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
