
import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
      <>
      <div>
     <Navbar fixed='top' bg="dark" variant='dark'>
       <Container>
             <Navbar.Brand>
                 React + typescript
             </Navbar.Brand>
         </Container>
     </Navbar>
    </div>
      
      </>
  );
};

export default Header;
