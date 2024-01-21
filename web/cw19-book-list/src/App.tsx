import React, { useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/layout/Header/Header';
import BookList from './components/features/BookList/BookList';
import Sidebar from './components/layout/Sidebar/Sidebar';
import { bookData } from './Data/RepoBooks';
import { IBook } from './interfaces/IBook';

function App() {
  const [bookList,setBookList] = useState(bookData)
  function handleDeleteBook(id: string): void {
    console.log("Usuwanie książki o id: "+id);
    setBookList(bookList.filter((book)=>(book.id!==id)))
  }

  function handleAddBook(book: IBook): void {
    setBookList([...bookList,book])
   console.log("dodawanie książki: ",book);
  }

  return (
    <div >
      <Container>
        <Header info='Zbiór książek' color="grey" />
        <Row>
          <Col xs="12" md="9">
            <main className='mt-2 mb-2'>
              <BookList books={bookList} deleteBook={handleDeleteBook} addBook={handleAddBook} />
            </main>
            
          </Col>
          <Col xs="12" md="3">
            <Sidebar books={bookList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
