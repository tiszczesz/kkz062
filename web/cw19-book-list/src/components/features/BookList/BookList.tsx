import './BookList.css';
import { nanoid } from 'nanoid';
import { Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { IBook } from '../../../interfaces/IBook';
import Delete from '../../../Images/delete.png';
import { FormEvent, useState } from 'react';

type Props = {
  books: IBook[];
  deleteBook:(id:string)=>void;
  addBook:(book:IBook)=>void;
};

const BookList = ({ books,deleteBook,addBook }: Props) => {
    //const [book,setBook] = useState<IBook>({id:'',title:'',author:'',year:0,price:0})
    const [title,setTitle]= useState('');
    const [author,setAuthor]= useState('');
    const [year,setYear]= useState(0);
    const [price,setPrice]= useState(0);
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        addBook({id:nanoid(),title,author,year,price})
        setTitle('');
        setAuthor('');
        setPrice(0);
        setYear(0);
    }

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
                <br />Rok wydania: {book.year}
              </Col>
              <Col md={{span:1,offset:5}}>
                <img className='hover' src={Delete} alt="usuń" 
                onClick={(event)=>deleteBook(book.id)} />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Card border='secendary' className='p-2 bg-light'>
        <Card.Header>Dodaj nową książkę</Card.Header>
        <Card.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='title'>
                    <Form.Label>Tytuł:</Form.Label>
                    <Form.Control type='text' value={title}
                    name='title' onChange={(event)=>setTitle(event.target.value)}/>
                </Form.Group>
                <Form.Group controlId='author'>
                    <Form.Label>Autor:</Form.Label>
                    <Form.Control type='text' value={author}
                     name='author' onChange={(event)=>setAuthor(event.target.value)} />
                </Form.Group>
                <Form.Group controlId='year'>
                    <Form.Label>Rok wydania:</Form.Label>
                    <Form.Control type='number' name='year' value={year}
                    onChange={(event)=>setYear(parseInt(event.target.value))} />
                </Form.Group>
                <Form.Group controlId='price'>
                    <Form.Label>Cena:</Form.Label>
                    <Form.Control type='number' name='price' step="0.01" 
                    value={price}
                    onChange={(event)=>setPrice(parseFloat(event.target.value))}
                     />
                </Form.Group>
                <Button variant='primary' type='submit' className='w-100'>Dodaj książkę</Button>
            </Form>

        </Card.Body>
      </Card>
    </div>
  );
};

export default BookList;
