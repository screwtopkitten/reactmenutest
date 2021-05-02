import React, { useState } from 'react';
import { ReactComponent as CatIcon } from './icons/cat-solid.svg';
import { ReactComponent as BugIcon } from './icons/bug-solid.svg';
import { ReactComponent as SearchIcon } from './icons/search-solid.svg';
import { ReactComponent as AtIcon } from './icons/at-solid.svg';
import { ReactComponent as UserIcon } from './icons/users-solid.svg';

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
    <li className="navitem">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu(){
  function DropdownItem(props){
    return(
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-button">{props.rightIcon}</span>
      </a>
    );
  }
  return(
    <div className="dropdown">
      <DropdownItem> My Profile</DropdownItem>
      <DropdownItem
        leftIcon = {<CatIcon/>}
        rightIcon = {<CatIcon/>}>

      </DropdownItem>


    </div>
  );
}
export default App;
