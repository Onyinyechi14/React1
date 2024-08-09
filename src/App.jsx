import React from 'react'
import Name from './Name';
import Price from './Price';
import ProductImage from './ProductImage';
import Description from './Description';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const firstName = 'Onyinyechi';

function App() {
  return (
    <div className='App'>
      <Card style={{width: '18rem'}}>
        <Card.Body>
          <ProductImage />
          <Name />
          <Price />
          <Description />
          </Card.Body>
          </Card>
          <p>
            {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
          </p>
            {firstName && <img src='https://www.nike.com/w/mens-shoes-nik1zy7ok' alt="Your custom image" />}
    </div>
  );
}

export default App
