import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Box } from '@mui/material';

function Header() {
  return (
    <Box>
      <Navbar
        bg="dark"
        style={{
          width: {
            xl: '1450px',
            lg: '1200',
            md: '1000',
            sm: '700',
            xs: '400',
          },
        }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              color: 'red',
              fontFamily: 'Helvetica',
              fontSize: 25,
              marginLeft: -50,
            }}
          >
            ToDo-App
          </Navbar.Brand>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="danger" color="red" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">favorite</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </Box>
  );
}

export default Header;
