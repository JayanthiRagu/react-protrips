import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Trip.css';
import home from '../assets/home.png';
import add from '../assets/add.png';
import list from '../assets/list.png';

class Header extends Component {
    render() {
        return (
            <div class="header">
                <div class="header1">
                    <Link to="/">
                        <img src={home} alt="home" height="30px" width="30px"></img>
                    </Link>
                    <Link to="/add">
                        <img src={add} alt="add" height="30px" width="30px"></img>
                    </Link>
                    <Link to="/list">
                        <img src={list} alt="list" height="30px" width="30px"></img>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;