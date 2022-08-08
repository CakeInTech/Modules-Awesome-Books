export default class Store {
  static getbooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = this.getbooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const titleFC = title.parentElement.parentElement.children[0].textContent;
    const books = Store.getbooks();
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < books.length; i++) {
      if (titleFC === `${books[i].title} by ${books[i].author}`) {
        books.splice(i, 1);
      }
    }
    localStorage.setItem('books', JSON.stringify(books));
  }
}