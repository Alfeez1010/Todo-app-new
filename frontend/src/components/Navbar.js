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
              color: '#ddede1',
              fontFamily: 'Helvetica',
              fontSize: 25,
              marginLeft: -50,
              fontWeight: 'bold',
            }}
          >
            TODO LIST
          </Navbar.Brand>
          <div>
            <Dropdown sx={{ BackgroundColor: '#ddede1', color: 'red' }}>
              <Dropdown.Toggle
                variant="danger"
                BackgroundColor="#ddede1"
                id="dropdown-basic"
              >
                Menu
              </Dropdown.Toggle>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </Box>
  );
}

export default Header;
