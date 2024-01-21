import './BookList.css';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { IBook } from '../../../interfaces/IBook';
import Delete from '../../../Images/delete.png';

type Props = {
  books: IBook[];
//   addBook:(book:IBook)=>void;
  deleteBook:(id:string)=>void;
};

const BookList = ({ books,deleteBook }: Props) => {
  return (
    <div>
      <h2>Lista książek</h2>
      <ListGroup className="mt-4">
        {books.map((book) => (
          <ListGroup.Item className="hover bg-light df " key={book.id}>
            <Row >
              <Col md="6">
                <span style={{ fontWeight: 'bold', color: 'green' }}>
                  {book.title} 
                </span> 
                <span style={{fontStyle:"italic"}}> {book.author}</span> {book.price} zł
              </Col>
              <Col md={{span:1,offset:5}}>
                <img className='hover' src={Delete} alt="usuń" 
                onClick={(event)=>deleteBook(book.id)} />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default BookList;
