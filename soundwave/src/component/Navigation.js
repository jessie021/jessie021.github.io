import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Button, ButtonGroup } from 'react-bootstrap';

import { useHistory } from "react-router-dom";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Navigation = () => {

  const { t, i18n } = useTranslation();

  function handleClick(lang){
    i18n.changeLanguage(lang);
  } 

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="home"> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-soundwave" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"/>
        </svg> SoundWave <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-soundwave" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"/>
        </svg> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={t('nav.1')} id="collasible-nav-dropdown">
              <NavDropdown.Item href="MusicTheory"><span>{t('drop.1')}</span></NavDropdown.Item>
              <NavDropdown.Item href="NoteTheory"><span>{t('drop.2')}</span></NavDropdown.Item>
              <NavDropdown.Item href="MusicGenres"><span>{t('drop.3')}</span></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="LearnMore"><span>{t('nav.2')}</span></Nav.Link>
            <Nav.Link href="Teachers"><span>{t('nav.3')}</span></Nav.Link>
            <Nav.Link href="SignUp"><span>{t('nav.4')}</span></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>

        <ButtonGroup horizontal size="sm" >
                <Button onClick={()=>handleClick('en')}>en</Button>
                <Button onClick={()=>handleClick('fr')}>fr</Button>
            </ButtonGroup>

      </Navbar>

   
    </div>
  );
}


export default Navigation;