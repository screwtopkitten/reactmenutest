import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as CatIcon } from './icons/cat-solid.svg';
import { ReactComponent as BugIcon } from './icons/bug-solid.svg';
import { ReactComponent as SearchIcon } from './icons/search-solid.svg';
import { ReactComponent as AtIcon } from './icons/at-solid.svg';
import { ReactComponent as UserIcon } from './icons/users-solid.svg';
import { CSSTransition } from 'react-transition-group';

//import React, {useState } from 'react';
function App() {
  return (
    <Navbar>
      <NavItem icon= {<CatIcon/>}/>
      <NavItem icon= {<BugIcon/>}/>
      <NavItem icon= {<SearchIcon/>}/>
      <NavItem icon= {<AtIcon/>}/>
      <NavItem icon= {<UserIcon/>}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props){
  return(
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children} </ul>
    </nav>
  );
}

function NavItem(props){
  const[open,setOpen] = useState(false);

  return(
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu(){

  const[activeMenu, setActiveMenu] =useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null); 

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props){
    return(
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return(
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
    <CSSTransition 
    in={activeMenu === 'main'} 
    timeout={500}
    classNames="menu-primary"
    unmountOnExit
    onEnter={calcHeight}>
  
        <div className="menu">
      <DropdownItem> My Profile</DropdownItem>
      <DropdownItem
        leftIcon = {<BugIcon />}
        rightIcon = {<UserIcon />}
        goToMenu="settings">
          Settings
      </DropdownItem>
      <DropdownItem
            leftIcon="🦧"
            rightIcon={<CatIcon />}
            goToMenu="animals">
            Animals
          </DropdownItem>
      </div>
    </CSSTransition>

    <CSSTransition 
    in={activeMenu === 'settings'} 
    timeout={500}
    classNames="menu-Secondary"
    unmountOnExit 
    onEnter={calcHeight}>
  
        <div className="menu">
<DropdownItem goToMenu="main" leftIcon={<UserIcon />}>
<h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BugIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<CatIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BugIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<CatIcon />}>Awesome!</DropdownItem>          
      </div>
    </CSSTransition>

    <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<CatIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>


    </div>
  );
}
export default App;
