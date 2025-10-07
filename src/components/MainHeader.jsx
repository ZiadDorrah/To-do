import classes from './MainHeader.module.css'; // CSS module
import logo from '../imgs/Logo.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MainHeader = () => {


  return (
    <div className={classes.header} id="header">
      <div className={classes.container}>

        <ul
          id="primary-navigation"
          className={`${classes['main-nav']} `}
        >
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/completed">Completed</Link></li> 
          <li><Link to="/reminder">Reminder</Link></li> 
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
