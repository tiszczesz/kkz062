import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/layout/Header/Header';
import BookList from './components/features/BookList/BookList';
import Sidebar from './components/layout/Sidebar/Sidebar';
import { bookData } from './Data/RepoBooks';

function App() {
  return (
    <div >
      <Container>
        <Header info='Zbiór książek' color="grey" />
        <Row>
          <Col xs="12" md="9">
            <main className='mt-2 mb-2'>
              <BookList books={bookData} />
            </main>
            
          </Col>
          <Col xs="12" md="3">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
