/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */

import Book from './Modules/book.js';
import UI from './Modules/ui.js';
import Store from './Modules/store.js';

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.addEventListener('DOMContentLoaded', UI.showDate);
document.getElementById('lists').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target);
});
const addBtn = document.getElementById('btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const books = Store.getbooks();
  const author = document.getElementById('atr').value;
  const title = document.getElementById('ttl').value;
  const newBook = new Book(author, title);
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  document.location.reload();
});
