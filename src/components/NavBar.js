import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [isHovering1, setIsHovering1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };
 
  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };


  const [isHovering2, setIsHovering2] = useState(false);
  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };
  
  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };  

  const [isHovering3, setIsHovering3] = useState(false);
  const handleMouseEnter3 = () => {
    setIsHovering3(true);
  };
  
  const handleMouseLeave3 = () => {
    setIsHovering3(false);
  };

  const [isHovering4, setIsHovering4] = useState(false);
  const handleMouseEnter4 = () => {
    setIsHovering4(true);
  };
  const handleMouseLeave4 = () => {
    setIsHovering4(false);
  };

  const [isHovering5, setIsHovering5] = useState(false);
  const handleMouseEnter5 = () => {
    setIsHovering5(true);
  };
  const handleMouseLeave5 = () => {
    setIsHovering5(false);
  };  
  
  
  const [isHovering6, setIsHovering6] = useState(false);
  const handleMouseEnter6 = () => {
    setIsHovering6(true);
  };
  const handleMouseLeave6 = () => {
    setIsHovering6(false);
  }; 
 
  
  const [isHovering7, setIsHovering7] = useState(false);
  const handleMouseEnter7 = () => {
    setIsHovering7(true);
  };
  const handleMouseLeave7 = () => {
    setIsHovering7(false);
  };  
  
  
  const [isHovering8, setIsHovering8] = useState(false);
  const handleMouseLeave8 = () => {
    setIsHovering8(false);
  };
  const handleMouseEnter8 = () => {
    setIsHovering8(true);
  }; 
  
    
  return (
      <>
         <Navbar sticky="top" bg="dark" constiant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand className='ps-3'to="/"  style={{color:'#e68a00', fontWeight: "bold"}}><strong>NewsUpdate</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="justify-content-end flex-grow-1 pe-5"
                    style={{ maxHeight: 'auto' }}
                    navbarScroll
                >
                    <Nav.Link><Link style={{color: isHovering1 ? '#e68a00' : 'white', textDecoration: 'none', fontSize: 15, fontWeight: "bold"} } onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link style={{color: isHovering2 ? '#e68a00' : 'white', textDecoration: 'none', fontSize: 15, fontWeight: "bold"} } onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} to="/business">Business</Link></Nav.Link>
                    <Nav.Link><Link style={{color: isHovering3 ? '#e68a00' : 'white', textDecoration: 'none', fontSize: 15, fontWeight: "bold"} } onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} to="/entertainment">Entertainment</Link></Nav.Link>
                    <Nav.Link><Link style={{color: isHovering4 ? '#e68a00' : 'white', textDecoration: 'none', fontSize: 15, fontWeight: "bold"} } onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} to="/general">General</Link></Nav.Link>
                    <Nav.Link><Link style={{color: isHovering5 ? '#e68a00' : 'white', textDecoration: 'none', fontSize: 15, fontWeight: "bold"} } onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} to="/health">Health</Link></Nav.Link>
                    <Nav.Link><Link style={{color: isHovering6 ? '#e68a00' : 'white', textDecoration: 'none', fontSize: 15, fontWeight: "bold"} } onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6} to="/science">Science</Link></Nav.Link>
                    <Nav.Link><Link style={{color: isHovering7 ? '#e68a00' : 'white', textDecoration: 'none', fontSize: 15, fontWeight: "bold"} } onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7} to="/sports">Sports</Link></Nav.Link>
                    <Nav.Link><Link style={{color: isHovering8 ? '#e68a00' : 'white', textDecoration: 'none', fontSize: 15, fontWeight: "bold"} } onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8} to="/technology">Technology</Link></Nav.Link>
                          
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
      </>
    )
  }
  export default NavBar
