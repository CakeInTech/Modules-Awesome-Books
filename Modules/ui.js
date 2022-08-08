import { DateTime } from './luxon.min.js';
import Store from './store.js';

export default class UI {
  static showDate = () => {
    document.getElementById('date').innerHTML = DateTime.now();
  }

  static displayui = (book) => {
    const tbody = document.getElementById('lists');
    tbody.insertAdjacentHTML(
      'beforeend',
      `<tr> <td>${book.title} by ${book.author}</td> 
         <td><button class="remove" type="button">Remove</button></td> </tr> `,
    );
  }

  static displayBooks = () => {
    const books = Store.getbooks();
    books.forEach((book) => {
      UI.displayui(book);
    });
  }

  static deleteBook = (target) => {
    if (target.classList.contains('remove')) {
      target.parentElement.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.getElementById('atr').value = '';
    document.getElementById('ttl').value = '';
  }
}